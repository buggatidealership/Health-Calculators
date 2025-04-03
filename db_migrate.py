import os
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
import urllib.parse

# Get database connection details from environment variables
db_url = os.environ.get("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/postgres")

def parse_db_url(url):
    """
    Parse a PostgreSQL database URL 
    
    Handles standard URLs like:
    postgresql://username:password@host:port/dbname
    
    And Neon-specific URLs like:
    postgres://user:password@ep-xyz-123.us-east-1.aws.neon.tech/dbname?sslmode=require
    """
    # Parse the URL using urllib
    result = urllib.parse.urlparse(url)
    
    # Extract path without leading slash as database name
    path = result.path.lstrip('/')
    
    # Extract credentials
    username = result.username or 'postgres'
    password = result.password or 'postgres'
    
    # Extract host and port
    hostname = result.hostname or 'localhost'
    port = result.port or 5432
    
    # Build connection params
    conn_params = {
        'user': username,
        'password': password,
        'host': hostname,
        'port': port
    }
    
    # Add database name if available
    if path:
        conn_params['dbname'] = path
    
    # Add SSL mode if needed (for services like Neon)
    if 'sslmode=require' in url:
        conn_params['sslmode'] = 'require'
    
    return conn_params

def run_migrations():
    try:
        # Parse the connection string
        conn_params = parse_db_url(db_url)
        
        # Connect to the database
        print(f"Connecting to database {conn_params['dbname']} on {conn_params['host']}...")
        conn = psycopg2.connect(**conn_params)
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        # Check if the column exists first
        cursor.execute("""
            SELECT column_name FROM information_schema.columns 
            WHERE table_name='badge' AND column_name='level'
        """)
        
        column_exists = cursor.fetchone() is not None
        
        if not column_exists:
            print("Adding 'level' column to Badge table...")
            cursor.execute("ALTER TABLE badge ADD COLUMN level VARCHAR(32) DEFAULT 'bronze'")
            print("Column added successfully.")
        else:
            print("Column 'level' already exists.")
        
        # Clean up
        cursor.close()
        conn.close()
        
        print("Migration completed successfully.")
        return True
        
    except Exception as e:
        print(f"Error during migration: {e}")
        return False

if __name__ == "__main__":
    run_migrations()
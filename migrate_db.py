from app import app, db
from models import User, Badge, UserBadge
from sqlalchemy import text

# Add level column to Badge table
def run_migrations():
    with app.app_context():
        # Use a safer approach to check if column exists and add it
        try:
            with db.engine.connect() as conn:
                # First check if column exists
                inspector = db.inspect(db.engine)
                columns = [col['name'] for col in inspector.get_columns('badge')]
                
                if 'level' not in columns:
                    print("Adding 'level' column to Badge table...")
                    conn.execute(text('ALTER TABLE badge ADD COLUMN level VARCHAR(32) DEFAULT \'bronze\''))
                    conn.commit()
                    print("Column added successfully.")
                else:
                    print("Column 'level' already exists.")
                
                print("Database schema updated.")
                
                # Also recreate tables if needed
                db.create_all()
                print("Tables verified.")
        except Exception as e:
            print(f"Error during migration: {e}")

if __name__ == "__main__":
    run_migrations()
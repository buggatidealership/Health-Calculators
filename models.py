from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from app import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    badges = db.relationship('UserBadge', backref='user', lazy='dynamic')
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<User {self.username}>'

class Badge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(256), nullable=False)
    icon = db.Column(db.String(128), nullable=False)  # Path to SVG or image file
    category = db.Column(db.String(64), nullable=False)  # e.g., "nutrition", "fitness", "health"
    criteria = db.Column(db.String(256), nullable=False)  # Description of how to earn
    level = db.Column(db.String(32), default='bronze')  # Achievement level: bronze, silver, gold, platinum
    users = db.relationship('UserBadge', backref='badge', lazy='dynamic')
    
    def __repr__(self):
        return f'<Badge {self.name}>'
    
class UserBadge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    badge_id = db.Column(db.Integer, db.ForeignKey('badge.id'), nullable=False)
    earned_at = db.Column(db.DateTime, default=datetime.utcnow)
    details = db.Column(db.String(256))  # Optional details about how it was earned
    
    def __repr__(self):
        return f'<UserBadge {self.badge_id} for User {self.user_id}>'
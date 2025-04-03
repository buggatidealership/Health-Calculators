from models import Badge, UserBadge, User, db
from datetime import datetime
from flask_login import current_user
from flask import session, url_for
from sqlalchemy import func

def initialize_badges():
    """Create initial badges if they don't exist"""
    
    badges = [
        # Nutrition Category
        {
            'name': 'Nutrition Novice',
            'description': 'First steps into tracking your nutrition',
            'icon': 'nutrition_novice.svg',
            'category': 'nutrition',
            'criteria': 'Use the Caloric Intake Calculator for the first time',
            'level': 'bronze'
        },
        {
            'name': 'Macronutrient Master',
            'description': 'Understanding macronutrients in depth',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'nutrition',
            'criteria': 'Use the Macronutrient Calculator 5 times',
            'level': 'silver'
        },
        {
            'name': 'Fasting Explorer',
            'description': 'Exploring the benefits of fasting',
            'icon': 'fasting_explorer.svg',
            'category': 'nutrition',
            'criteria': 'Use the Fasting Weight Loss Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Vitamin Virtuoso',
            'description': 'Taking charge of your micronutrients',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'nutrition',
            'criteria': 'Use the Vitamin D Intake Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Nutrition Enthusiast',
            'description': 'Committed to nutritional knowledge',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'nutrition',
            'criteria': 'Use 3 different nutrition calculators',
            'level': 'silver'
        },
        {
            'name': 'Nutrition Expert',
            'description': 'Comprehensive nutrition knowledge',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'nutrition',
            'criteria': 'Use all nutrition calculators',
            'level': 'gold'
        },
        {
            'name': 'Weight Management Specialist',
            'description': 'Dedicated to healthy weight management',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'nutrition',
            'criteria': 'Use multiple weight management calculators',
            'level': 'silver'
        },
        
        # Fitness Category
        {
            'name': 'Fitness Beginner',
            'description': 'First steps into fitness tracking',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'fitness',
            'criteria': 'Track your first fitness calculation',
            'level': 'bronze'
        },
        {
            'name': 'Hydration Hero',
            'description': 'Mastering optimal hydration',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'fitness',
            'criteria': 'Use the Creatine Water Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Fitness Enthusiast',
            'description': 'Regularly using fitness tools',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'fitness',
            'criteria': 'Use fitness calculators 10 times',
            'level': 'silver'
        },
        
        # Health Category
        {
            'name': 'Health Monitor',
            'description': 'Taking charge of your health metrics',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use the Lifespan Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Fertility Tracker',
            'description': 'Understanding fertility cycles',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use the Female Fertility Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Child Development Specialist',
            'description': 'Supporting healthy growth in children',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use the Child Growth Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Pet Care Expert',
            'description': 'Caring for pets with knowledge',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use the Dog Pregnancy Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Newborn Care Specialist',
            'description': 'Monitoring infant health metrics',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use the Newborn Weight Loss Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Health Optimizer',
            'description': 'Taking a holistic approach to health',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use 5 different health calculators',
            'level': 'silver'
        },
        {
            'name': 'Prevention Expert',
            'description': 'Proactively managing health risks',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'health',
            'criteria': 'Use the Baldness Risk Calculator',
            'level': 'bronze'
        },
        
        # Wellness Category
        {
            'name': 'Aesthetics Researcher',
            'description': 'Understanding cosmetic procedures',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use any of the cosmetic procedure calculators',
            'level': 'bronze'
        },
        {
            'name': 'Botox Specialist',
            'description': 'Knowledge of anti-aging procedures',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use the Botox Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Implant Expert',
            'description': 'Understanding breast augmentation',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use the Breast Implant Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Lip Enhancement Pro',
            'description': 'Knowledge of facial aesthetics',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use the Lip Filler Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Bra Size Specialist',
            'description': 'Expert in sizing and measurements',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use the CC to Bra Size Calculator',
            'level': 'bronze'
        },
        {
            'name': 'Cosmetic Enthusiast',
            'description': 'Comprehensive knowledge of aesthetic procedures',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use 3 different cosmetic calculators',
            'level': 'silver'
        },
        {
            'name': 'Body Positive Advocate',
            'description': 'Supporting informed wellness choices',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'wellness',
            'criteria': 'Use 5 different wellness calculators',
            'level': 'gold'
        },
        
        # Achievement Level Badges
        {
            'name': 'Wellness Novice',
            'description': 'Beginning your wellness journey',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'achievement',
            'criteria': 'Earn 3 badges',
            'level': 'bronze'
        },
        {
            'name': 'Wellness Explorer',
            'description': 'Broadening your health knowledge',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'achievement',
            'criteria': 'Earn 8 badges',
            'level': 'silver'
        },
        {
            'name': 'Wellness Expert',
            'description': 'Comprehensive health literacy',
            'icon': 'nutrition_novice.svg',  # Will replace with unique icons later
            'category': 'achievement',
            'criteria': 'Earn 15 badges',
            'level': 'gold'
        },
        {
            'name': 'Health Champion',
            'description': 'Mastery of health and wellness knowledge',
            'icon': 'health_champion.svg',
            'category': 'achievement',
            'criteria': 'Earn 25 badges',
            'level': 'platinum'
        }
    ]
    
    for badge_data in badges:
        existing_badge = Badge.query.filter_by(name=badge_data['name']).first()
        
        if not existing_badge:
            badge = Badge(
                name=badge_data['name'],
                description=badge_data['description'],
                icon=badge_data['icon'],
                category=badge_data['category'],
                criteria=badge_data['criteria'],
                level=badge_data.get('level', 'bronze')  # Default to bronze level
            )
            db.session.add(badge)
        else:
            # Update existing badge with new data (in case we need to update badges)
            existing_badge.description = badge_data['description']
            existing_badge.icon = badge_data['icon']
            existing_badge.category = badge_data['category']
            existing_badge.criteria = badge_data['criteria']
            existing_badge.level = badge_data.get('level', 'bronze')
    
    db.session.commit()

def award_badge(badge_name, details=""):
    """Award a badge to the current user if they don't already have it"""
    if not current_user.is_authenticated:
        return False
    
    badge = Badge.query.filter_by(name=badge_name).first()
    if not badge:
        return False
    
    # Check if user already has this badge
    existing_badge = UserBadge.query.filter_by(
        user_id=current_user.id,
        badge_id=badge.id
    ).first()
    
    if existing_badge:
        return False
    
    # Award the new badge
    user_badge = UserBadge(
        user_id=current_user.id,
        badge_id=badge.id,
        earned_at=datetime.utcnow(),
        details=details
    )
    
    db.session.add(user_badge)
    db.session.commit()
    
    # Check for achievement badges after earning a new badge
    check_achievement_badges()
    
    return True

def get_user_badges(user_id):
    """Get all badges for a specific user, ordered by newest first"""
    return UserBadge.query.filter_by(user_id=user_id).order_by(UserBadge.earned_at.desc()).all()

def get_available_badges(user_id):
    """Get badges that the user hasn't earned yet with progress info"""
    earned_badge_ids = [ub.badge_id for ub in UserBadge.query.filter_by(user_id=user_id).all()]
    available_badges = Badge.query.filter(~Badge.id.in_(earned_badge_ids)).all()
    
    # Count calculator usage for the user
    calculator_usage = get_user_calculator_usage(user_id)
    badge_counts = get_badge_counts_by_category(user_id)
    
    for badge in available_badges:
        # Default to 0% progress
        badge.progress = 0
        
        # Category-specific completion tracking
        if badge.name == 'Nutrition Novice':
            if 'caloric_macronutrient_calculator' in calculator_usage:
                badge.progress = 90  # Almost there!
            
        elif badge.name == 'Macronutrient Master':
            count = calculator_usage.get('caloric_macronutrient_calculator', 0)
            badge.progress = min(100, (count / 5) * 100)
            
        elif badge.name == 'Nutrition Enthusiast':
            nutrition_calculators = ['caloric_macronutrient_calculator', 'fasting_weight_loss_calculator', 
                                    'vitamin_d_intake_calculator', 'ozempic_weight_loss_calculator']
            used_count = sum(1 for calc in nutrition_calculators if calc in calculator_usage)
            badge.progress = min(100, (used_count / 3) * 100)
            
        elif badge.name == 'Nutrition Expert':
            nutrition_calculators = ['caloric_macronutrient_calculator', 'fasting_weight_loss_calculator', 
                                    'vitamin_d_intake_calculator', 'ozempic_weight_loss_calculator']
            used_count = sum(1 for calc in nutrition_calculators if calc in calculator_usage)
            total_count = len(nutrition_calculators)
            badge.progress = min(100, (used_count / total_count) * 100)
            
        elif badge.name == 'Health Optimizer':
            health_calculators = ['lifespan_calculator', 'female_fertility_calculator', 
                                 'child_growth_calculator', 'dog_pregnancy_due_date_calculator',
                                 'newborn_weight_loss_calculator', 'baldness_risk_calculator']
            used_count = sum(1 for calc in health_calculators if calc in calculator_usage)
            badge.progress = min(100, (used_count / 5) * 100)
            
        elif badge.name == 'Cosmetic Enthusiast':
            cosmetic_calculators = ['botox_calculator', 'breast_implant_calculator', 
                                   'lip_filler_cost_calculator', 'cc_to_bra_size_calculator',
                                   'liposuction_weight_loss_calculator']
            used_count = sum(1 for calc in cosmetic_calculators if calc in calculator_usage)
            badge.progress = min(100, (used_count / 3) * 100)
            
        # Achievement badges based on total badges earned
        elif badge.name == 'Wellness Novice':
            total_badges = sum(badge_counts.values())
            badge.progress = min(100, (total_badges / 3) * 100)
            
        elif badge.name == 'Wellness Explorer':
            total_badges = sum(badge_counts.values())
            badge.progress = min(100, (total_badges / 8) * 100)
            
        elif badge.name == 'Wellness Expert':
            total_badges = sum(badge_counts.values())
            badge.progress = min(100, (total_badges / 15) * 100)
            
        elif badge.name == 'Health Champion':
            total_badges = sum(badge_counts.values())
            badge.progress = min(100, (total_badges / 25) * 100)
         
    return available_badges

def get_user_calculator_usage(user_id):
    """
    Get a dictionary of calculator usage counts for a user
    Returns: { 'calculator_name': count }
    """
    # For simplicity, tracking usage through badge details
    user_badges = UserBadge.query.filter_by(user_id=user_id).all()
    
    usage = {}
    for ub in user_badges:
        if ub.details and 'Used the ' in ub.details:
            calculator = ub.details.replace('Used the ', '').replace(' calculator', '')
            if calculator in usage:
                usage[calculator] += 1
            else:
                usage[calculator] = 1
    
    return usage

def get_badge_counts_by_category(user_id):
    """
    Get a count of badges earned by category
    Returns: { 'category': count }
    """
    # Query for badge counts by category
    badge_counts = {}
    user_badges = UserBadge.query.filter_by(user_id=user_id).all()
    
    for ub in user_badges:
        category = ub.badge.category
        if category in badge_counts:
            badge_counts[category] += 1
        else:
            badge_counts[category] = 1
    
    return badge_counts

def check_calculator_badges(calculator_name):
    """Check and award badges based on calculator usage"""
    if not current_user.is_authenticated:
        return
        
    # Map calculator routes to specific badges
    badge_triggers = {
        'caloric_macronutrient_calculator': ['Nutrition Novice'],
        'fasting_weight_loss_calculator': ['Fasting Explorer'],
        'vitamin_d_intake_calculator': ['Vitamin Virtuoso'],
        'ozempic_weight_loss_calculator': ['Weight Management Specialist'],
        'creatine_water_calculator': ['Hydration Hero'],
        'lifespan_calculator': ['Health Monitor'],
        'female_fertility_calculator': ['Fertility Tracker'],
        'child_growth_calculator': ['Child Development Specialist'],
        'dog_pregnancy_due_date_calculator': ['Pet Care Expert'],
        'newborn_weight_loss_calculator': ['Newborn Care Specialist'],
        'baldness_risk_calculator': ['Prevention Expert'],
        'botox_calculator': ['Aesthetics Researcher', 'Botox Specialist'],
        'breast_implant_calculator': ['Aesthetics Researcher', 'Implant Expert'],
        'lip_filler_cost_calculator': ['Aesthetics Researcher', 'Lip Enhancement Pro'],
        'cc_to_bra_size_calculator': ['Bra Size Specialist'],
        'liposuction_weight_loss_calculator': ['Weight Management Specialist'],
        'adult_height_predictor_calculator': ['Child Development Specialist'],
    }
    
    # Award any matching badges
    if calculator_name in badge_triggers:
        for badge_name in badge_triggers[calculator_name]:
            award_badge(badge_name, f"Used the {calculator_name} calculator")
        
        # After individual badges, check for category/usage combination badges
        check_category_badges()

def check_category_badges():
    """Check for badges that are earned by using multiple calculators in a category"""
    if not current_user.is_authenticated:
        return
    
    user_id = current_user.id
    calculator_usage = get_user_calculator_usage(user_id)
    
    # Check Nutrition Enthusiast (3 different nutrition calculators)
    nutrition_calculators = [
        'caloric_macronutrient_calculator', 
        'fasting_weight_loss_calculator', 
        'vitamin_d_intake_calculator', 
        'ozempic_weight_loss_calculator'
    ]
    used_nutrition = [calc for calc in nutrition_calculators if calc in calculator_usage]
    if len(used_nutrition) >= 3:
        award_badge('Nutrition Enthusiast', 'Used 3 or more nutrition calculators')
    
    # Check Nutrition Expert (all nutrition calculators)
    if len(used_nutrition) == len(nutrition_calculators):
        award_badge('Nutrition Expert', 'Used all nutrition calculators')
    
    # Check Cosmetic Enthusiast (3 different cosmetic calculators)
    cosmetic_calculators = [
        'botox_calculator', 
        'breast_implant_calculator', 
        'lip_filler_cost_calculator', 
        'cc_to_bra_size_calculator',
        'liposuction_weight_loss_calculator'
    ]
    used_cosmetic = [calc for calc in cosmetic_calculators if calc in calculator_usage]
    if len(used_cosmetic) >= 3:
        award_badge('Cosmetic Enthusiast', 'Used 3 or more cosmetic calculators')
    
    # Check Body Positive Advocate (5 different wellness calculators)
    if len(used_cosmetic) >= 5:
        award_badge('Body Positive Advocate', 'Used 5 or more wellness calculators')
    
    # Check Health Optimizer (5 different health calculators)
    health_calculators = [
        'lifespan_calculator', 
        'female_fertility_calculator', 
        'child_growth_calculator', 
        'dog_pregnancy_due_date_calculator',
        'newborn_weight_loss_calculator', 
        'baldness_risk_calculator',
        'adult_height_predictor_calculator'
    ]
    used_health = [calc for calc in health_calculators if calc in calculator_usage]
    if len(used_health) >= 5:
        award_badge('Health Optimizer', 'Used 5 or more health calculators')

def check_achievement_badges():
    """
    Check if user qualifies for achievement badges based on total badges earned
    This is called whenever a new badge is awarded
    """
    if not current_user.is_authenticated:
        return
    
    user_id = current_user.id
    badge_counts = get_badge_counts_by_category(user_id)
    total_badges = sum(badge_counts.values())
    
    # Check each achievement level
    if total_badges >= 3:
        award_badge('Wellness Novice', f'Earned {total_badges} badges')
    
    if total_badges >= 8:
        award_badge('Wellness Explorer', f'Earned {total_badges} badges')
    
    if total_badges >= 15:
        award_badge('Wellness Expert', f'Earned {total_badges} badges')
    
    if total_badges >= 25:
        award_badge('Health Champion', f'Earned {total_badges} badges')
# Calculator Config Registry
# Each config module exports calculator dicts.
# CALCULATOR_REGISTRY maps slug -> config for auto-route-registration.

CALCULATOR_REGISTRY = {}

def register(slug, config):
    """Register a calculator config. Called by category modules."""
    CALCULATOR_REGISTRY[slug] = config

# Import category modules to trigger registration
from configs import financial
from configs import fitness
from configs import nutrition
from configs import cosmetic
from configs import health
from configs import fertility
from configs import medications

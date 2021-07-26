import peewee as pw

from models.base_model import BaseModel
from models.user import User


class user_recipes(BaseModel):
    saved_recipe = pw.TextField(null=False)
    user = pw.ForeignKeyField(User, backref="savedRecipes")
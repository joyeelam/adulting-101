import peewee as pw

from models.base_model import BaseModel
from models.user import User


class User_recipes(BaseModel):
    recipe_title = pw.TextField()
    recipe_url = pw.TextField()
    user = pw.ForeignKeyField(User, backref="savedRecipes")
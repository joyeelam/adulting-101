import peewee as pw

from models.base_model import BaseModel
from models.user import User


class User_recipes(BaseModel):
    recipe_title = pw.TextField()
    recipe_url = pw.TextField(unique=True)
    recipe_img_url = pw.TextField(unique=True)
    user = pw.ForeignKeyField(User, backref="savedRecipes")
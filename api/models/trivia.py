import peewee as pw

from models.base_model import BaseModel
from models.user import User

class Trivia(BaseModel):

    category = pw.TextField(null=False)
    score = pw.IntegerField(null=False)
    user = pw.ForeignKeyField(User, backref='trivias', on_delete='CASCADE')

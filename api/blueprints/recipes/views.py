from flask import Blueprint
from flask_cors import cross_origin

from models.savedrecipes import user_recipes

recipes_api_blueprint = Blueprint('recipes_api',
                                  __name__,
                                  template_folder='templates')


@recipes_api_blueprint.route("/savedrecipes", methods=["POST"])
@cross_origin()
def save():
    pass

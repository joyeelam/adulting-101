from flask import Blueprint, request, make_response
from flask_cors import cross_origin

from models.savedrecipes import User_recipes

recipes_api_blueprint = Blueprint('recipes_api',
                                  __name__,
                                  template_folder='templates')


@recipes_api_blueprint.route("/", methods=["POST"])
@cross_origin()
def save():
    saved_recipe_data = request.get_json()
    user_id = saved_recipe_data['user_id']
    recipe_title = saved_recipe_data['recipe_title']
    recipe_url = saved_recipe_data['recipe_url']
    saved_recipe = User_recipes(user_id=user_id,
                                recipe_title=recipe_title,
                                recipe_url=recipe_url)
    if saved_recipe.save():
        return make_response('Recipe successfully saved', 201)
    else:
        return make_response('Request failed', 500)

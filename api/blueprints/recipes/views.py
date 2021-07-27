from flask import Blueprint, request, make_response, jsonify
from flask_cors import cross_origin

from models.savedrecipes import User_recipes
from models.user import User

recipes_api_blueprint = Blueprint('recipes_api',
                                  __name__,
                                  template_folder='templates')


# POST request: save recipes to User_recipes model
@recipes_api_blueprint.route("/save", methods=["POST"])
@cross_origin()
def save():
    saved_recipe_data = request.get_json()
    user_id = saved_recipe_data['user_id']
    recipe_title = saved_recipe_data['recipe_title']
    recipe_url = saved_recipe_data['recipe_url']
    recipe_img_url = saved_recipe_data['recipe_img_url']
    saved_recipe = User_recipes(user_id=user_id,
                                recipe_title=recipe_title,
                                recipe_url=recipe_url,
                                recipe_img_url=recipe_img_url)
    if saved_recipe.save():
        print("Recipe saved to favorites.")
        return make_response('Recipe successfully saved', 201)
    else:
        print("Could not save recipe to favorites.")
        return make_response('Request failed', 500)


# GET saved recipes from User_recipes model to React
@recipes_api_blueprint.route("/<id>")
@cross_origin()
def retrieve_data(id):
    saved_recipes = User_recipes.select().where(User_recipes.user_id == id)
    recipes = []
    for recipe in saved_recipes:
        recipes.append({
            "title": recipe.recipe_title,
            "url": recipe.recipe_url,
            "image": recipe.recipe_img_url
        })
    # print(recipes)
    return jsonify(recipes)


# Remove starred recipes from Saved Recipes
@recipes_api_blueprint.route("/remove-recipe", methods=["POST"])
@cross_origin()
def remove_recipe():
    recipe_data = request.get_json()
    user_id = recipe_data['user_id']
    recipe_url = recipe_data['recipe_url']
    print(recipe_url)
    query = User_recipes.delete().where(User_recipes.user_id == user_id,
                                        User_recipes.recipe_url == recipe_url)
    if query.execute():
        return make_response("Recipe removed from favorites", 201)
    else:
        return make_response("Request failed", 500)

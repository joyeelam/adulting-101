from flask import Blueprint, request, make_response
from flask_cors import cross_origin

from models.trivia import Trivia

trivias_api_blueprint = Blueprint('trivias_api', __name__, template_folder='templates')

@trivias_api_blueprint.route('/', methods=['POST'])
@cross_origin()
def create():
    trivia_data = request.get_json()
    category = trivia_data['category']
    score = trivia_data['score']
    user_id = trivia_data['user_id']
    trivia = Trivia(category=category, score=score, user_id=user_id)
    if trivia.save():
        return make_response('Score successfully recorded', 201)
    else:
        return make_response('Request failed', 500)
from flask import Blueprint, request, make_response, jsonify
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

from models.user import User

users_api_blueprint = Blueprint('users_api', __name__, template_folder='templates')

@users_api_blueprint.route('/', methods=['POST'])
@cross_origin()
def create():
    user_data = request.get_json()
    username = user_data['username']
    email = user_data['email']
    password = user_data ['password']
    user = User(username=username, email=email, password=password)
    if user.save():
        access_token = create_access_token(identity=user.id)
        return jsonify()
    else:
        return make_response('Request failed', 500)

@users_api_blueprint.route('/token', methods=['POST'])
@cross_origin()
def create_token():
    user_data = request.get_json()
    username = user_data['username']
    user = User.get_or_none(User.username == username)
    if user:
        password = user_data['password']
        hashed_password = user.password
        result = check_password_hash(hashed_password, password)
        if result:
            access_token = create_access_token(identity=user.id)
            return jsonify({'token': access_token, 'user_id': user.id})
    else:
        return jsonify({'msg': 'Bad username or password'}), 401

@users_api_blueprint.route('/check_username/<username>', methods=['GET'])
@cross_origin()
def check_username(username):
    existing_username = User.get_or_none(User.username == username)
    if existing_username:
        return {'valid': False}
    else:
        return {'valid': True}

@users_api_blueprint.route('/check_email/<email>', methods=['GET'])
@cross_origin()
def check_email(email):
    existing_email = User.get_or_none(User.email == email)
    if existing_email:
        return {'valid': False}
    else:
        return {'valid': True}

from config import Config
import rstr
from flask import Blueprint, request, make_response, jsonify
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash
from werkzeug.utils import secure_filename
from util.aws_s3 import upload_file_to_s3, allowed_file

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
        return jsonify({'token': access_token, 'user_id': user.id})
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
        return jsonify({'valid': False})
    else:
        return jsonify({'valid': True})

@users_api_blueprint.route('/check_email/<email>', methods=['GET'])
@cross_origin()
def check_email(email):
    existing_email = User.get_or_none(User.email == email)
    if existing_email:
        return jsonify({'valid': False})
    else:
        return jsonify({'valid': True})

@users_api_blueprint.route('/google_login', methods=['POST'])
@cross_origin()
def google_login():
    user_data = request.get_json()
    username = user_data['givenName'] + user_data['googleId']
    email = user_data['email']
    password = rstr.xeger(r'[A-Za-z\d~!@#$%^&*()_+=]{6,}')

    user = User.get_or_none(User.email == email)
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token, 'user_id': user.id})
    else:
        user = User(username=username, email=email, password=password)
        if user.save():
            access_token = create_access_token(identity=user.id)
            return jsonify({'token': access_token, 'user_id': user.id})
        else:
            return make_response('Request failed', 500)

@users_api_blueprint.route('/get_user/<id>', methods=['GET'])
@cross_origin()
def show(id):
    user = User.get_or_none(User.id == int(id))
    if user:
        return jsonify({'username': user.username, 'email': user.email, 'profile_image': user.profile_image})
    else:
        return make_response('Request failed', 500)

@users_api_blueprint.route('/<id>/upload', methods=['POST'])
@cross_origin()
def upload(id):
    user = User.get_or_none(User.id == int(id))
    file = request.files['file']
    if file and allowed_file(file.filename):
        file.filename = secure_filename(file.filename)
        image_path = upload_file_to_s3(file, Config.S3_BUCKET)
        user.profile_image = image_path
        if user.save():
            return make_response('Upload successful', 201)
    else:
        return make_response('Request failed', 500)

@users_api_blueprint.route('/<id>/update', methods=['POST'])
@cross_origin()
def update(id):

    user = User.get_or_none(User.id == int(id))
    user_data = request.get_json()

    new_info = {}
    if user_data['username'] != "":
        new_info['username'] = user_data['username']
    if user_data['email'] != "":
        new_info['email'] = user_data['email']
    if user_data['password'] != "":
        new_info['password'] = user_data['password']

    if user:
        for key in new_info:
            setattr(user, key, new_info[key])
            user.save()
        if user.save():
            return make_response('Profile successfully updated', 201)    
    return make_response('Request failed', 500)

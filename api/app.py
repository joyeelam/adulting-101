import os, config
from flask import Flask
from models.base_model import db
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager
from flask_cors import CORS, cross_origin
from flask_jwt_extended import JWTManager

from blueprints.users.views import users_api_blueprint
from blueprints.trivias.views import trivias_api_blueprint
from blueprints.recipes.views import recipes_api_blueprint

from models.user import User

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
csrf = CSRFProtect(app)
jwt = JWTManager(app)
login_manager = LoginManager()
login_manager.init_app(app)

csrf.exempt(users_api_blueprint)
app.register_blueprint(users_api_blueprint, url_prefix='/users')

csrf.exempt(trivias_api_blueprint)
app.register_blueprint(trivias_api_blueprint, url_prefix='/trivias')

csrf.exempt(recipes_api_blueprint)
app.register_blueprint(recipes_api_blueprint, url_prefix="/recipe-generator")

if os.getenv('FLASK_ENV') == 'production':
    app.config.from_object('config.ProductionConfig')
else:
    app.config.from_object('config.DevelopmentConfig')

@app.before_request
def before_request():
    db.connect()

@app.teardown_request
def _db_close(exc):
    if not db.is_closed():
        print(db)
        print(db.close())
    return exc

@login_manager.user_loader
def load_user(user_id):
    return User.get_or_none(User.id == user_id)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

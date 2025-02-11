from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token

bcrypt = Bcrypt()
db = SQLAlchemy()
jwt = JWTManager()
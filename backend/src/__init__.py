from flask import Flask

from src.extensions.app_config import initialize_app
from src.extensions.extensions import bcrypt, db, jwt, cors

import json

from src.extensions.initialize_database import initialize_database
from src.routes.routes import users_blueprint, blog_blueprint

if __name__ == '__main__':
    initialize_app()

    app = Flask(__name__)
    app.config.from_file("extensions\\configs.json", load=json.load)
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)

    app.register_blueprint(users_blueprint)
    app.register_blueprint(blog_blueprint)

    with app.app_context():
        initialize_database()

    app.run(debug=True, port=9999)
from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from src.messages.response_message import ResponseMessage
from src.model.blog import Blog
from src.extensions.extensions import db

blog_blueprint = Blueprint("blog_blueprint", __name__, url_prefix="/api/v1/blog")

@blog_blueprint.route("/posts", methods=['GET'])
def get_all_posts():
    blogs = Blog.query.all()

    response_message = ResponseMessage([blog.to_dict() for blog in blogs], 200)
    return response_message.create_response_message()

@blog_blueprint.route("/posts/new", methods=['POST'])
@jwt_required()
def create_post():
    print(request.get_json())
    blog = Blog(request.get_json()['title'], request.get_json()['description'], request.get_json()['post_contents'])
    db.session.add_all([blog])
    db.session.commit()
    return "created", 201
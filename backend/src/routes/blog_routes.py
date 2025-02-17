from flask import Blueprint, request, url_for, send_from_directory
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename

from src.messages.response_message import ResponseMessage
from src.model.blog import Blog
from src.extensions.extensions import db
import os

from src.model.stored_images import StoredImages

blog_blueprint = Blueprint("blog_blueprint", __name__, url_prefix="/api/v1/blog")

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def get_profile_img_link(filename):
    if filename:
        return url_for("blog_blueprint.get_img_url", _external=True, filename=filename)

@blog_blueprint.route('/api/v1/blog/posts/images/<filename>')
def get_img_url(filename):
   return send_from_directory("C://Users//william.fisher//Desktop//app_files//images", filename, as_attachment=False)


@blog_blueprint.route("/posts", methods=['GET'])
def get_all_posts():
    blogs = Blog.query.all()

    response_message = ResponseMessage([blog.to_dict() for blog in blogs], 200)
    return response_message.create_response_message()

@blog_blueprint.route("/posts/search/<search_title>", methods=['GET'])
def search_posts_by_title(search_title):
    if search_title == "-":
        blogs = Blog.query.all()
    else:
        search = "%{}%".format(search_title)
        blogs = Blog.query.filter(Blog.title.like(search)).all()
    response_message = ResponseMessage([blog.to_dict() for blog in blogs], 200)
    return response_message.create_response_message()

@blog_blueprint.route("/posts/new", methods=['POST'])
@jwt_required()
def create_post():
    if 'file' not in request.files:
        response_message = ResponseMessage("File was not found in the request", 400)
        return response_message.create_response_message()

    file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        response_message = ResponseMessage("Improper file name", 400)
        return response_message.create_response_message()

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join("C://Users//william.fisher//Desktop//app_files//images", filename))

        blog = Blog(request.form['title'],
                    request.form['description'],
                    request.form['post_contents'],
                    filename)
        db.session.add_all([blog])
        db.session.commit()

        response_message = ResponseMessage("post created successfully", 201)
        return response_message.create_response_message()

@blog_blueprint.route("/posts/upload", methods=['POST'])
@jwt_required()
def upload_image():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            response_message = ResponseMessage("File was not found in the request", 400)
            return response_message.create_response_message()

        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            response_message = ResponseMessage("Improper file name", 400)
            return response_message.create_response_message()

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join("C://Users//william.fisher//Desktop//app_files//images", filename))

            image = StoredImages(filename, "C://Users//william.fisher//Desktop//app_files//images//" + filename)
            db.session.add(image)
            db.session.commit()

            response_message = ResponseMessage("File uploaded successfully", 200)
            return response_message.create_response_message()

@blog_blueprint.route("/posts/images", methods=['GET'])
@jwt_required()
def get_all_images():
    images = StoredImages.query.all()

    for image in images:
        image.source = get_profile_img_link(image.name)

    response_message = ResponseMessage([image.to_dict() for image in images], 200)
    return response_message.create_response_message()

@blog_blueprint.route("/posts/images/<id>", methods=['DELETE'])
@jwt_required()
def delete_image_by_id(id):
    image = StoredImages.query.filter_by(id=id).first()
    if not image:
        response_message = ResponseMessage("Image was not found", 404)
        return response_message.create_response_message()
    else:
        db.session.delete(image)
        db.session.commit()

        response_message = ResponseMessage("deleted successfully", 200)
        return response_message.create_response_message()

@blog_blueprint.route("/posts/<id>", methods=['GET'])
@jwt_required()
def get_post_by_id(id):
    post = Blog.query.filter_by(id=id).first()
    if not post:
        response_message = ResponseMessage("Post was not found", 404)
        return response_message.create_response_message()
    else:
        post.main_image_source = get_profile_img_link(post.main_image_source)
        response_message = ResponseMessage(post.to_dict(), 200)
        return response_message.create_response_message()

@blog_blueprint.route("/posts/<id>", methods=['DELETE'])
@jwt_required()
def delete_post_by_id(id):
    blog = Blog.query.filter_by(id=id).first()
    if not blog:
        response_message = ResponseMessage("Blog was not found", 404)
        return response_message.create_response_message()
    else:
        db.session.delete(blog)
        db.session.commit()

        response_message = ResponseMessage("deleted successfully", 200)
        return response_message.create_response_message()
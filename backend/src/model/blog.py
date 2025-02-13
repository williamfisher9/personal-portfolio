from src.extensions.extensions import db

class Blog(db.Model):
    def __init__(self, title, description, post_contents):
        self.title = title
        self.description = description
        self.post_contents = post_contents

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    post_contents = db.Column(db.Text(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "post_contents": self.post_contents
        }

    def __repr__(self):
        return f"<Blog {self.title}>"

    def __str__(self):
        return f"Blog {self.id} {self.title}"
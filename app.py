import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/recipes", methods=["GET", "POST"])
def recipes():
    if request.method == "POST":
        recipe = mongo.db.recipes
        recipe_dict = request.form.to_dict()
        recipe_dict["food"] = request.form.getlist("food"),
        recipe_dict["count"] = request.form.getlist("count"),
        recipe_dict["size"] = request.form.getlist("size"),
        recipe_dict["weight"] = request.form.getlist("weight"),
        recipe_dict["volume"] = request.form.getlist("volume"),
        recipe_dict["recipe_method"] = request.form.getlist("recipe_method"),
        recipe_dict["email"] = session["member"]

        recipe.insert_one(recipe_dict)
        flash("Recipe Successfully Added")
        return redirect(url_for("profile"))

    recipes = list(mongo.db.recipes.find())
    return render_template("recipes.html", recipes=recipes)


@app.route("/edit_recipes/<member_recipe_id>", methods=["GET", "POST"])
def edit_recipes(member_recipe_id):
    member_recipe = mongo.db.recipes.find_one({"_id": ObjectId(member_recipe_id)})

    recipes = list(mongo.db.recipes.find())
    return render_template("edit_recipe.html", member_recipe=member_recipe, recipes=recipes)


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if member already exists in database
        existing_member = mongo.db.members.find_one(
            {"email": request.form.get("email").lower()})

        if existing_member:
            flash("Looks like you're already registered with us !")
            return redirect(url_for("register"))

        register = {
            "firstName": request.form.get("firstName").lower(),
            "lastName": request.form.get("lastName").lower(),
            "email": request.form.get("email").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.members.insert_one(register)

        # putting new member into session cookie
        session["member"] = request.form.get("email").lower()
        flash("Registration Successful")
        return redirect(url_for(
            "profile", first_name=session["member"]))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check if member already exists in database
        existing_member = mongo.db.members.find_one(
            {"email": request.form.get("email").lower()})
        if existing_member:
            # ensures password matches user input
            first_name = existing_member["firstName"]
            if check_password_hash(
                    existing_member["password"], request.form.get("password")):
                session["member"] = request.form.get("email").lower()
                flash("Welcome, {}".format(first_name.capitalize()))
                return redirect(url_for(
                    "profile", first_name=session["member"]))
            else:
                # invalid password match
                flash("Incorrect Email and/or Password")
                return redirect(url_for("login"))

        else:
            # a user doesn't exist
            flash("Incorrect Email and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/profile/", methods=["GET", "POST"])
def profile():
    # Obtain members details from the database
    member = mongo.db.members.find_one(
        {"email": session["member"]})
    first_name = member["firstName"]
    last_name = member["lastName"]
    email = member["email"]
    member_recipes = list(mongo.db.recipes.find(
        {"email": session["member"]}))

    if session["member"]:
        return render_template(
            "profile.html", first_name=first_name,
            last_name=last_name, email=email,
            member_recipes=member_recipes)

    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    # remove member from session cookies
    flash("You are now logged out")
    session.pop("member")
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)

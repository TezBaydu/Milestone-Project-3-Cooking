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
        recipe = {
            "recipe_name": request.form.get("recipe_name"),
            "recipe_description": request.form.get("recipe_description"),
            "breakfast": request.form.get("breakfast"),
            "lunch": request.form.get("lunch"),
            "dinner": request.form.get("dinner"),
            "dessert": request.form.get("dessert"),
            "snack": request.form.get("snack"),
            "recipe_image": request.form.get("recipe_image"),
            "serves": request.form.get("serves"),
            "prep_time": request.form.get("prep_time"),
            "cook_time": request.form.get("cook_time"),
            "ready_time": request.form.get("ready_time"),
            "food": request.form.get("food"),
            "count": request.form.get("count"),
            "size": request.form.get("size"),
            "weight": request.form.get("weight"),
            "volume": request.form.get("volume"),
            "food1": request.form.get("food1"),
            "count1": request.form.get("count1"),
            "size1": request.form.get("size1"),
            "weight1": request.form.get("weight1"),
            "volume1": request.form.get("volume1"),
            "recipe_method": request.form.get("recipe_method"),
            "private_switch": request.form.get("private_switch"),
            "email": session["member"]
        }
        mongo.db.recipes.insert_one(recipe)
        flash("Recipe Successfully Added")
        return redirect(url_for("profile"))

    recipes = list(mongo.db.recipes.find())
    return render_template("recipes.html", recipes=recipes)


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

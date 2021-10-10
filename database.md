<h1 align="center" id = "database-introduction">
     Project Eatin Database
</h1>

<h2 align="center">
    <a href=""target="_blank">Eatin Website</a>
</h2>

<div align="center">
*Eatin*, a website to search, log and share to the public home dining ideas. <br>
This section is to help developers understand database utilisation
</div>

[Back to README](README.md)

## Contents
1. [Platform](#Platform)
    - [Access](#Access)
    - [Connecting to gitpod](#Connecting-to-gitpod)
        * [Terminal Test](#Terminal-Test)
        * [Python-Mongo library test](Python-Mongo-library-test)
    - [Flask](#Flask)
    - [Developer](#Developer)
    - [Collections](#collections)


## Platform
The platform used to create, read, update and delete data is [MongoDB](https://www.mongodb.com), the recommended platform as required for the 3rd project of [Code Institutes](https://www.mongodb.com) Full Stack Developer course.

### Access
When registering to MongoDB there are several options to select for various database tool access. This project is utilising the free tier (M0) access which is limited but suitable for this project including storage of only 512MB.
<br>
You can utilise two factor authentication in MongoDB for further secure data access. This can be done via the Account section of MongoDB.

### Connecting to gitpod

#### Terminal Test
- To test if database is connected to gitpod you can do this by using a connection string:
    1. In Databases section of MongoDB select Connect
    2. Select "Connect with the MongoDB Shell"
    3. If you don't have MongoDB Shell, ensure the section "I do not have the MongoDB shell installed" is highlighted
    4. In section 3(Run your connection string in your command line), copy  connection string which holds the cluster name and the username.
    5. Paste the string into the command terminal replacing the Database name (after it states mongodb.net/) in this case eatinDB.
    6. You may also need to replace mongosh with mongo as this refers to shell which you may not have.
    7. At this point it will request the MongoDB users password.(I'm not going to share this here!)
    8. There will be no string appearing when typing password, this is normal, you just need to ensure it's typed correctly.
    9. You should see a long message in the terminal including a line "Welcome to the MongoDB shell". This means you've successfully connected to the database.

[Back to top ⇧](#database-introduction)

### Python-Mongo library test
- To connect Pymongo library
    1. In terminal type "pip3 install dnspython" and press enter
    2. Now to install pymongo by typing "pip3 install pymongo" and press enter
    3. In Databases section of MongoDB select Connect
    4. Select Connect your application
    5. Select "Python" for the driver
    6. Select the appropriate version for the environment, in this case 3.6 or later.
    7. Next copy the URI string and go back to code terminal in gitpod
    8. IMPORTANT - make sure when connecting data secure details are not pushed to GitHub, this is done by ensuring certain files are included in the .gitignore file
    9. File env.py (which is in the .gitignore file) is updated with connection string with the mongoDB user password. hence to ensure this is not shared in GitHub !!

## Flask
- The Flask library is an API of Python used to buiold web applications. 
    1. To set up functionality to import Flask, in terminal type "pip3 install Flask".
    2. Once done ensure details are updated within a python file that is NOT pushed into GitHub, i.e. it is included within the .gitignore file.
    <br>
    In this instance it is the env.py file and will hold a SECRET KEY hence for it to not be pushed to GitHub or it could be manipulated unwantingly.
    3. Within the applications python file (app.py) ensure Flask is imported, i.e. "from Flask import Flask"

[Back to top ⇧](#database-introduction)

### Connect database to Flask
- Required to ensure Flask library communicates effectively to the database. Note when library's are connected ensure requirements.txt file is update so deployment sites know to run the app.
    1. Connect library flask-pymongo via the code terminal
    2. Connect dnspython via the code terminal
    3. Update app.py file to capture associated imports.

### Developer
- Tez Baydu

### Collections
- members
    * Used to store members profile details

- recipes
    * Used to store recipe detail updated by members

- Types
    * All stored as Strings unless otherwise stated

[Back to top ⇧](#database-introduction)

### members
- email
    * Used as the unique username identifier.
    * To also be used for password resets.

- password <-- UPDATE WITH WERKZEUG TECHNOLOGY TO HIDE PASSWORD -->
    * Passwords to not be stored in database but via users local interface.

- firstName
    * Members first name
    * Can be editable

- lastName
    * Members last name
    * Can be editable

### recipes
- date
- recipe_name
- recipe_description
- recipe_image
- breakfast
- lunch
- dinner
- dessert
- snack
- serves
- prep_time
- cook_time
- ready_time
- food (Array)
- count (Array)
- size (Array)
- weight (Array)
- volume (Array)
- recipe_method (Array)
- private_switch
    * null
        * Recipes to be shared with Public and is browseable
    * on
        * Recipes to not be shared and is non browseable but can only be viewed in members profile section.

- email
    * used to associate recipes to members as key




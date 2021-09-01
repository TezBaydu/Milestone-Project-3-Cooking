<h1 align="center" id = "introduction">
     Project Eatin Database
</h1>

<h2 align="center">
    <a href=""target="_blank">Eatin Website</a>
</h2>

<div align="center">
*Eatin*, a website to search, log and share to the public home dining ideas. <br>
This section is to help developers understand database utilisation
</div>

## Contents
1. [Platform](#Platform)
    - [Access](#Access)
    - [Connecting to gitpod](#Connecting-to-gitpod)
    - [Developer](#Developer)
    - [Collections](#collections)


## Platform
The platform used to create, read, update and delete data is [MongoDB](https://www.mongodb.com), the recommended platform as required for the 3rd project of [Code Institutes](https://www.mongodb.com) Full Stack Developer course.

### Access
When registering to MongoDB there are several options to select for various database tool access. This project is utilising the free tier (M0) access which is limited but suitable for this project including storage of only 512MB.
<br>
You can utilise two factor authentication in MongoDB for further secure data access. This can be done via the Account section of MongoDB.

### Connecting to gitpod
- Connecting MongoDB datbase to gitpod by using connection string
    1. In Databases section select Connect
    2. Select "Connect with the MongoDB Shell"
    3. If you don;t have MongoDB Shell, ensure the section "I do not have the MongoDB shell installed" is highlighted
    4. In section 3, copy  connection string which is <-- UPDATE -->


### Developer
- Tez Baydu

### Collections
- members
    * Used to store members profile details

- recipe 
    * Used to store recipe detail updated by members

#### members
- active
    * indicator to show whether user field"active" is "true" and therefore members or non-members and therefore "false"

- email
    * Used as the unique username identifier.
    * To also be used for password resets.

- password <-- UPDATE WITH TECHNOLOGY TO HIDE PASSWORD -->
    * Passwords to not be stored in database but via users local interface.

- firstName
    * Members first name
    * Can be editable

- lastName
    * Members last name
    * Can be editable

#### recipe
- Public
    * Recipes to be shared with Public and is browseable
        * Where field "public" is "true"
- Private
    * Recipes to not be shared and is non browseable but can only be viewed in members profile section.
        * Where field "public" is "false"


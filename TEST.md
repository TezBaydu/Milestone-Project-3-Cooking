<h1 align ="center" id = "top">Eatin Test file
<h1>

<h2 align="center">
    <a href="https://eatin-project.herokuapp.com/" target="_blank">Eatin Website</a>
</h2>

<h3 align="center">
    <a href="https://github.com/TezBaydu/Milestone-Project-3-Cooking#README" target="_blank">Back to README file</a>
</h3>

## Contents
1. [Commits](#Commits)
2. [User Story testing](#User-Story-testing)
    - [Browsers](#Browsers)
    -[Members](#Members)
    - [Web Developer](#Web-Developer)
3. [Code testing](#Code-testing)
    - [HTML5](#HTML5)
    - [CSS3](#CSS3)
    - [JavaScript](#JavaScript)
    -[PEP8](#Python-PEP8)
4. [Element testing](#Element-testing)
    - [Navigation bar](#Navigation-bar)
    - [Scroll Top button](#Scroll-Top-button)
    - [Footer](#Footer)
    - [Locations section](#Locations-section)
        * [Read More](#Read-More)
        * [Map Markers](#Map-Markers)
        * [Interest Cards](#Interest-Cards)
    - [Contact section](#Contact-section)
    - [Email format](#Email-format)
5. [Device testing](#Device-testing)
6. [Colour blindness testing](#Colour-blindness-testing)
    - [Protanopia](#Protanopia)
    - [Deuteranopia](#Deuteranopia)
7. [Browser testing](#Browser-testing)
8. [User testing](#User-testing)
    - [Bugs and Issues](#Bugs-and-Issues)

## Commits
- Over 130 commits
- Commits made in as many instances as possible

[Back to top ⇧](#top)

## User Story testing

### Browsers
The user is wanting to find dining ideas

* This user wants to:
1. Be able to navigate through the website easily.
    - Collapsible fixed nav menu for user to see more of screen and be able to navigate when required.
    - Various links to other pages.
2. Learn about various recipes.
    - Cards clearly showing detail of recipes.
    - Good use of ingredients and method side by side design.
    - Easy filter options for recipe types.
    - Easy to find sepcific foods with search bar.
3. Be able to navigate to relevant social links.
    - Always an option to select from fixed footer.
4. Be able to make contact for queries and newsletter sign up.
    - Easy to gain contact.
    - Immediate contact made through auto notification. 

### Members
The user is wanting to find, store and share dining ideas
*   This user wants to:
1. Be able to navigate through the website easily.
    - Collapsible fixed nav menu for user to see more of screen and be able to navigate when required.
    - Various links to other pages.
    - Able to login from nav bar.
    - Local data can store login details even though password is not passed through to database.
2. Learn about various recipes.
    - Browse options easy to discover various recipes
3. Be able to navigate to relevant social links.
    - Always an option to select from fixed footer.
4. Be able to make contact for queries, technical issues and newsletter sign up.
    - Easy to gain contact.
    - Immediate contact made through auto notification. 
5. Be able to create, read, update and delete their profile and recipe data.
    - Ability to perform CRUD functions from Profile page.
    - Depending on selection these lead user to create their recipe
        * Upon creation, they may not like the look of the recipe and so do not want it made public or shared with other members.
    - Easy editing options allow for changes.
    - Delete function is readily available for each recipe but warning message is displayed prior to acceptance.
    - Delete Account function is readily available too but warning message is displayed prior to acceptance.
        * Recipes are held on database, in case ex-member wishes to return.
        * Details can be removed if requested via contact page
    - Profile is editable aside from email which is main session of use.

### Web Developer
This user is looking for imagery or influence for another project.

* They want to be able to:
1. Have easy navigation.
    - Collapsible fixed nav menu for user to see more of screen and be able to navigate when required.
    - Various links to other pages.

2. Find how the website was created.
    - [README.md](https://github.com/TezBaydu/Milestone-Project-3-cooking#introduction) file created detailing why and how website was created.
    - Contact form can also be used for General enquiries.
3. Be able to make contact with Developer.
    - Contact form can be used for general enquiries.
    - [README.md Deployment](https://github.com/TezBaydu/Milestone-Project-3-cooking#Deployment) has description of cloning and forking and therefore contact can be made via GitHub.
4. Have an opportunity to clone site if wanting to use content.
    - [README.md Cloning](https://github.com/TezBaydu/Milestone-Project-3-cooking#Cloning-a-repository) has description of cloning.

[Back to top ⇧](#top)

## Code Testing

### HTML5
- [HTML code checker](https://validator.w3.org/)
     
    - Test date 09/10/2021
        - HTML5 test
            * Home
                - ![HTML5 test](assets/test-files/html/EatinHomeHTMLerror081021.JPG)
                    * Adjustments:
                        * Created block in base.html to capture image classes in templates and still cover page sources.
                    * Post adjustments
                - ![HTML5 test](assets/test-files/html/EatinHomeHTMLsuccess091021.JPG)
            * Browse
                - ![HTML5 test](assets/test-files/html/EatinBrowseHTMLerror091021.JPG)
                    * Adjustments:
                        * Type=button removed from <a> tags and type=textfrom <textare> tags
                - ![HTML5 test](assets/test-files/html/EatinBrowseHTMLSuccess091021.JPG)
            * Contact
                - ![HTML5 test](assets/test-files/html/EatinContactHTMLerror091021.JPG)
                    * Adjustments:
                        * label and value applied to first option
                - ![HTML5 test](assets/test-files/html/EatinContactHTMLSuccess091021.JPG)
            * Edit Recipe
                - ![HTML5 test](assets/test-files/html/EatinEditRecipeHTMLerror091021.JPG)
                    * Adjustments:
                        * id's not required removed, applied initially with view to styling...
                - ![HTML5 test](assets/test-files/html/EatinEditRecipeHTMLsuccess091021.JPG)
            
            * Profile
                - ![HTML5 test](assets/test-files/html/EatinProfileHTMLerror091021.JPG)
                    * Adjustments:
                        * Attempted to use validation section of validator but did not recognise user. Investigated online too and unable to find appropriate form of testing, however is working in current format.
            * Create Recipe
                - ![HTML5 test](assets/test-files/html/EatinRecipeHTMLerror091021.JPG)
                    * Adjustments:
                        * type=number did not need pattern attribute and adjusted maxlength to max
                - ![HTML5 test](assets/test-files/html/EatinRecipeHTMLsuccess091021.JPG)
            * Show Breakfast, Lunch, Dinner, Dessert and Snack pages
                - ![HTML5 test](assets/test-files/html/EatinShowLunchHTMLError091021.JPG)
                    * Adjustments:
                        * Minor div removals and adjustments
                - ![HTML5 test](assets/test-files/html/EatinShowBreakfastHTMLsuccess091021.JPG)


### CSS3
- [CSS code checker](https://jigsaw.w3.org/css-validator/)
    - Test date 09/10/2021
        - CSS3 code test
            - ![CSS3 code test](assets/test-files/css/EatinCSSerror081021.JPG)
                * Adjustment of typo from ps to px
            - ![CSS3 code test](assets/test-files/css/EatinCSSSuccess091021.JPG)
        - Bootstrap errors not directly code related

                
### JavaScript
- [JS Hint JavaScript validator](https://jshint.com/)

    - Test date 09/10/2021
        * Code issues
        ![JSHint warnings](assets/test-files/js/JSScripttestErrors091021.JPG)
        * Warnings
            * missing semicolon minor errors
        ![JSHint update](assets/test-files/js/JSScripttestunusedvariables091021.JPG)
            * Updated semicolon errors
            * When attempting to update and rmeoval of unused variables various elements of code stop working like the menu feature.
                - After researching online have decided these are to be kept to ensure other functions can be enabled
        ![JSHint Email](assets/test-files/js/JSemailScripttest091021.JPG)
            * 1 Unused and 1 undefined variable but these are accepted with post through to email after online investigation

### PEP8
- [PEP8 requirement check](http://pep8online.com/)

    - Test date 09/10/2021
        * Code issues
        ![PEP8 Test](assets/test-files/PEP8/PEP8app.pyTest091021.JPG)
            * No Errors

[Back to top ⇧](#top)

## Element testing
### Navigation bar
- Test 
    * Responsive hover on click.
    * Links.
![Navbar test](assets/test-files/element-files/nav.gif)

### Scroll Top button
- Test 
    * Button appears on scroll down and when pressed scrolls user to top
![Scroll Top button test](assets/test-files/element-files/scrollTopButton.gif)

### Footer
- Test 
    * Social links change on hover
    * Social links lead to associated sites
![Footer social links test](assets/test-files/element-files/socialLinks.gif)

[Back to top ⇧](#top)

### Page tests
#### Home
- Image
    * Nav links to other pages
    ![Home Page test](assets/test-files/element-files/nav.gif)

[Back to top ⇧](#top)

#### Register
- Image
    * Appealing
- Inputs
    * First Name
    * Last Name
    * Email validation
    * Password hidden
    * Link to login if already registered
    ![Register Page test](assets/test-files/element-files/registerPage.gif)


#### Login
- Image
    * Appealing
- Inputs
    * Email
    * Password hidden
    * Flash to display if incorrect
    * Link to Register if not a member
    ![Login Page test](assets/test-files/element-files/loginPage.gif)

[Back to top ⇧](#top)

#### Login
- Image
    * Appealing
- Inputs
    * Email
    * Password hidden
    * Flash to display if incorrect
    * Link to Register if not a member
    ![Login Page test](assets/test-files/element-files/loginPage.gif)

#### Browse
- Card images and text
    * Button to view recipe cards on each card
    * Search bar with text
    * Filter by recipe category
    ![Browse Page test](assets/test-files/element-files/browsePage.gif)

[Back to top ⇧](#top)

#### Profile
- Profile details
    * First name
    * Last name
    * Email
    * Edit account button
    * Delete Account button - with warning if selected
_ Recipe details
    * Public Recipes
        - View, Edit and Delete Options. Delete to have warning.
    * Private Recipes
        - View, Edit and Delete Options. Delete to have warning.
    ![Profile Page test](assets/test-files/element-files/profilePage.gif)

#### Edit Profile
- Ability to amend profile details
    * Cannot amend email as this is used as a username.
        - This can be deleted however
    ![Edit Profile Page test](assets/test-files/element-files/EditProfilePage.gif)

[Back to top ⇧](#top)

#### Create Recipe
- Recipe fields
    * Name
    * Description
    * Image (url image address)
    * Recipe type
    * Serves
    * Prep time
    * Cook time
    * Ready time (sum of pre and cook times)
    * Ingredients
        - Food
        - Quantity
        - Size
        - Weight (g)
        - Volume (lb)
    * Method steps
    * Public / Privcy switch
    * Save button
    * Cancel button
        - Warning if cancelling updates will be lost
    ![Create Recipe Page test](assets/test-files/element-files/createRecipePage.gif)

#### Edit Recipe
- Recipe fields update with data previously entered
    * Update of info updates relevant fields
    ![Edit Recipe Page test](assets/test-files/element-files/editRecipePage.gif)


[Back to top ⇧](#top)

#### Contact Page
- Image
    * Appealing
- Fields
    * Contact fields are editable
    * All fields are required
    * Email field requires email format
    * Submit button works
    * Pop up appears to show success
    * Contact fields text is removed
    * Position returns to Home after submission
    - ![Contact Page test](assets/test-files/element-files/contactPage.gif)

[Back to top ⇧](#top)

#### Email format
- Test
    * When email is submitted an email is sent to the developer with message from user
    * Auto reply to user stating an email has been received and they will be contacted
    * Email to have a link to the site
    - ![Email format test](assets/test-files/element-files/contactEmailLink.gif)

[Back to top ⇧](#top)

### Device testing
- [amiresponsive](http://ami.responsivedesign.is/)
    * Device styles and responsiveness for Mobile, Tablet and Desktop
    ![Device responsive test](assets/test-files/element-files/responsiveDesignTest.gif)

[Back to top ⇧](#top)

### Colour blindness testing

#### Protanopia
- ![Protanopia test](assets/test-files/element-files/Protanopia.gif)

#### Deuteranopia
- ![Deuteranopia test](assets/test-files/element-files/Deuteranopia.gif)

[Back to top ⇧](#top)

### Browser testing
- Microsoft Edge browser testing
    * ![Microsoft Edge browser test](assets/test-files/element-files/Edge.gif)

- Firefox browser testing
    * ![Firefox browser test](assets/test-files/element-files/Firefox.gif)
    * Nav design circle issue
        - identified d-block was the problem and have isolated in css
        ![Firefox error](assets/test-files/element-files/FirefoxNavError.JPG)
        ![Firefox fix](assets/test-files/element-files/FirefoxNavFix.JPG)

- Safari browser testing
    * Unable to test without making a purchase
    * Have been advised by Friends who own Macs design and interactivity was fine

[Back to top ⇧](#top)

### User testing
- Friends
- Family
- Website Designers

[Back to top ⇧](#top)

## Test log

### Done
- Scroll to top button - Done
- last_name variable to be defined in profile - done
- email variable to be defined in profile - done
- recipe creation to database success but unable to display details in profile - done, did not call the name "member_recipe"
- Profile image card sizing, due to it being a URL as email from Code advised... how to limit or max image size? - done
- Input number in recipe form accepts --9879798798 even when limiting maxlengths...? - done
- Steps section js not activated - should it match table above for ingredients? - No - Updated to self styles row inputs
- Profile UX adjustment, profile card on left, recipes on right - done
- Profile: button to take user to create recipe - done
- Profile: Public and Private recipes to alternaelty show upon selection - done through using accordion collapse
- Recipe: recipe image text box had 1.02 container - Done - had to move end textarea to same line....?!
- Profile: Line 81: {% if member_recipe.private-switch == "off" %} section not recognised?! - Done Python does not like "-" hyphens !!!
- Recipe: Dict applied and Array in MongoDB but is not listing - Done Getlist applied after Slack search
- Menu nav blocking other actions due to it being fixed and extends whole width - Done - Row positoin made absolute and adjusted position of feature
- Profile: Recipe card body to be adjusted so is responsive including image size - Done
- Recipe: repeat field showing but value is null - Done
- Profile: Edit and delete buttons on recipe cards - Done and Edit action working
- Create recipe: change upload to accept URL as source - Almost done but has content within... - Done
- Create recipe: add button underneath - done
- Create recipe: delete on ingredients deleting parent but sibling deletion not working... - done, added container div
- Create recipe: method step adding and deleting but placeholder not showing and unable to resize added fields - done missing closing '"' in JS script
- Browse: Search bar started but needs refining - Done
- Browse: app.py update to pull in public recipes only from all members, currently pulling in recipes from members - Done and pulling in only PUBLIC shared recipes
- Profile: Delete recipe option: Done
- Create recipe: Ready in sum | Event listeners in prep and cook to publish sum in ready time - Done with max time not over 24 hours
- Edit recipe: ready in sum | Event listener not working in ready time - Done, changed from var to let
- View Recipe page created - Done and jinja applied so only associated data applied
- Edit recipe: array values to populate separate divs rows - Done
- Edit recipe: quantity values not populating value, however is an issue with array still - Done
- Ready In Time: this field not pulling into MongoDB - Done, changed from disabled to readonly
- Recipe: current date applied but doesn't apply to MongoDB - Done changed to input and readonly
- Profile: view recipe button applied but link required to recipe card - Done and new template created associated to member so private recipes can be viewed too
- Profile: add logout button in profile card
- Recipe pages: number fields to accept decimals - Done
- background image not showing - Done adjusted images into static folder
- Home page - Done
- Contact page - Done
- Responsive DESIGN !! - Contact page to be created and home page responsiveness(after image cover) - Done
- Col classes have padding right 15px and will not fill page - not an issue anymore
- iphone 5 nav menu items not listed correctly - Done
- Heroku: deployment not coming through - pymongo - 3.12.0 version wasn't saved previously, potentially page wasn't saved when "pip3 freeze --local > requirements.txt" action taken in console - Done
- Open app.py goes to create recipe page - to open on index.html - Done updated app.py and placed @app.route("/") above @app.route("/home")
- Edit profile url not connecting to edit profile page - Done
- Delete profile - Done
- Edit profile - details updated but redirect errors based on line 217 of app.py first_name = member["firstName"] - make email readonly as doesn't recognise email as session member once changed
- Input and textareas patterns still allow some characters? - Done 
- Redirect on error?: first_name = member["firstName"] TypeError: 'NoneType' object is not subscriptable - Done edit email non editable
- Contact - Email sent correctly but redirect method is invalid, Error: "POST /contact HTTP/1.1" 405 - Done needed mthod POST applied to app.route
- Flash: pushes content down - Done Image placed outside of jinja base block
- Recipe: on delete a warning to open to confirm - Done
- Profile: on delete a warning to open to confirm - Done _id call updated
- Ready In Time: issue with calc when adding more than 30 mins - asked in Slack - Done
- Profile: Text to add create in accordion but fails on both when 1 recipe is applied to one or the other - not necessary
- Profile delete but doesn't delete public recipes from view - Done to ensure this data is stored if the user wants to come back at any stage
- Search function on members page only resets to browse - needs to go to browse and also search - Done
- Search on Browse works for name and description, to update for other search features
    * Have tried searches on several sites and tutor support, searches found where all voted down and did not provide the correct concept. Tutor support tried to advise in several scenarios including a $match but after spending 2 days on trying to resolve I've sadly decided to abandon this option for now.
    * If there was enough time I would have created separate buttons atttributed to @app.routes to filter relevant associated recipt type. - Done decided to lose sleep and do this...
- Add row recipes and methods JS: Update with inital html code pattern, etc - Done
- View recipe and View Memner recipe: adjust ingredients to only pick up numbers and measurements - Done
- Create recipe in heroku app doesn't work on mobile - now working ... ?!
- limit adding igredient and method rows but to also change dependent on screen size - Done
- Test JS - Done
- test PEP8 - Done
- Test colour blindness - Done
- Test different UI's - Done
- Figma update - Done
- Update Read Me
- Update Test
- Update Databse.md



### To Do

- Ensure to debug to False



### Notes to consider
- Message in GitPod stating Python extension loading and is constant. Info found in Slack and Gitpod community advising of installing an older version. Had changed from pymongo 3.12.0 to 3.5.1 but the Python extension loading message still appeared and I was unable to run app.py so have changed back to 3.12.0.
    * requirements.txt python pymongo version is 3.5.1 but this had been changed and saved as 3.12.0...unsure what has happened here but could be cause why heroku is not loading.
- Search: "[dict]" elements in app.py removed as mongoDB had applied double Arrays causing confusion between create and Edit - is good now
- ^[a-zA-Z0-9]{1,30}$ changed to ^[a-zA-Z0-9 -]{1,30}$ to accept spaces and dashes
- Login forgot password - This would be a nice to have but is not necessary for this project
- All Recipes: limit of cards but not enough time but is a nice to have
- Heroku maximum slug size is 500MB
    * Removing Gifs and going with images instead
- Input Type = "number" can be an issue with patterns especially with other formats. JS updated with a Jquery logic to help and input types changes to "text"
    * This query encountered it's own issues as it would require updating every elemenet with it's own ID, however this would also need to be done through the javascript when a new row is added and I don't have enough time to investigate this further.
        * By having input as type=number values cannot be saved and error displays on submit

<h2 align="center">
    <a href="https://eatin-project.herokuapp.com/" target="_blank">Eatin Website</a>
</h2>

<h3 align="center">
    <a href="https://github.com/TezBaydu/Milestone-Project-3-cooking#README" target="_blank">Back to README file</a>
</h3>

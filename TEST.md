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
- Over ---!?!--- commits
- Commits made in as many instances as possible

[Back to top ⇧](#top)

## User Story testing

### Browsers
The user is currently in Britain and not wanting to book any trips abroad.

* This user wants to:
1. Be able to navigate through the website easily.
    - Fixed top Nav bar showing sections to navigate to.
    - Fixed site logo on top left of nav bar for user to navigate to home section.
2. Understand what site is providing (at this stage).
    - Synopsis on Home section.
3. To be able to see and be aware of recommended locations and various elements associated with them.
    - Interest recommendations of Activities, Restaurants and Hotels.
    - More Info buttons directing user to associated sites.
4. To be able to navigate and interact with map to get better understanding of location.
    - Map markers showing several recommended locations.
    - Interactive google map which can be zoomed in and expanded for larger devices.
5. Be able to navigate to relevant social links.
    - Footer at bottom with buttons directing to social sites.
6. Be able to contact site company and be part of newsletter/e-mail contact list.
    - Contact section has a form which has required fields to make contact.
    - Notification both on site and direct email to ensure response has been recieved.

### Members
The user is currently in Britain and not wanting to book any trips abroad.

* This user wants to:
1. Be able to navigate through the website easily.
    - Fixed top Nav bar showing sections to navigate to.
    - Fixed site logo on top left of nav bar for user to navigate to home section.
2. Understand what site is providing (at this stage).
    - Synopsis on Home section.
3. To be able to see and be aware of recommended locations and various elements associated with them.
    - Interest recommendations of Activities, Restaurants and Hotels.
    - More Info buttons directing user to associated sites.
4. To be able to navigate and interact with map to get better understanding of location.
    - Map markers showing several recommended locations.
    - Interactive google map which can be zoomed in and expanded for larger devices.
5. Be able to navigate to relevant social links.
    - Footer at bottom with buttons directing to social sites.
6. Be able to contact site company and be part of newsletter/e-mail contact list.
    - Contact section has a form which has required fields to make contact.
    - Notification both on site and direct email to ensure response has been recieved.

### Web Developer
This user is looking for imagery or influence for another project.

* They want to be able to:
1. Have easy navigation.
    - Fixed top Nav bar..
    - Fixed logo on top left of nav bar for user to navigate to home page.
2. Find how the website was created.
    - [README.md](https://github.com/TezBaydu/Milestone-Project-3-cooking#introduction) file created detailing why and how website was created.
    - Contact form can also be used for General enquiries.
3. Be able to make contact with Developer.
    - Contact form can be used for general enquiries.
    - [README.md Deployment](https://github.com/TezBaydu/Milestone-Project-3-cooking#Deploying-via-GitHub-Pages) has description of cloning and forking and therefore contact can be made via GitHub.
4. Have an opportunity to clone site if wanting to use content.
    - [README.md Cloning](https://github.com/TezBaydu/Milestone-Project-3-cooking#Cloning-a-repository) has description of cloning.

[Back to top ⇧](#top)

## Code Testing

### HTML5
- [HTML code checker](https://validator.w3.org/)
     
    - Test date 09/10/2021
        - HTML5 test
            * Home
                - ![HTML5 test](assets/test-files/html/EatinHome HTML error 081021.JPG)
                    * Adjustments:
                        * Created block in base.html to capture image classes in templates and still cover page sources.
                    * Post adjustments
                - ![HTML5 test](assets/test-files/html/EatinHome HTML success 091021.JPG)
            * Browse
                - ![HTML5 test](assets/test-files/html/EatinBrowse HTML error 091021.JPG)
                    * Adjustments:
                        * Type=button removed from <a> tags and type=textfrom <textare> tags
                - ![HTML5 test](assets/test-files/html/EatinBrowse HTML Success 091021.JPG)
            * Contact
                - ![HTML5 test](assets/test-files/html/EatinContact HTML error 091021.JPG)
                    * Adjustments:
                        * label and value applied to first option
                - ![HTML5 test](assets/test-files/html/EatinContact HTML Success 091021.JPG)
            * Edit Recipe
                - ![HTML5 test](assets/test-files/html/EatinEditRecipe HTML error 091021.JPG)
                    * Adjustments:
                        * id's not required removed, applied initially with view to styling...
                - ![HTML5 test](assets/test-files/html/EatinEditRecipe HTML success 091021.JPG)
            
            * Profile
                - ![HTML5 test](assets/test-files/html/EatinProfile HTML error 091021.JPG)
                    * Adjustments:
                        * Attempted to use validation section of validator but did not recognise user. Investigated online too and unable to find appropriate form of testing, however is working in current format.
            * Create Recipe
                - ![HTML5 test](assets/test-files/html/EatinRecipe HTML error 091021.JPG)
                    * Adjustments:
                        * type=number did not need pattern attribute and adjusted maxlength to max
                - ![HTML5 test](assets/test-files/html/EatinRecipe HTML success 091021.JPG)
            * Show Breakfast, Lunch, Dinner, Dessert and Snack pages
                - ![HTML5 test](assets/test-files/html/EatinShowLunch HTML Error 091021.JPG)
                    * Adjustments:
                        * Minor div removals and adjustments
                - ![HTML5 test](assets/test-files/html/EatinShowBreakfast HTML success 091021.JPG)


### CSS3
- [CSS code checker](https://jigsaw.w3.org/css-validator/)
    - Test date 09/10/2021
        - CSS3 code test
            - ![CSS3 code test](assets/test-files/css/Eatin CSS error 081021.JPG)
                * Adjustment of typo from ps to px
            - ![CSS3 code test](assets/test-files/css/Eatin CSS Success 091021.JPG)
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
    * ![Firefox browser test](assets/test-files/browser-files/firefox-browser-test.gif)
    * Nav design circle issue
        - identified d-block was the problem and have isolated in css
        ![Firefox d-block](assets/test-files/element-files/FirefoxNavError.JPG)

- Safari browser testing
    * Unable to test without making a purchase
    * Have been advised by Friends who own Macs design and interactivity was fine

[Back to top ⇧](#top)

### User testing
- Friends
- Family
- Website Designers

#### Bugs and Issues

- Google Fonts
    * @import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * Applied to top of style.css but font not changing.
    * link rel="preconnect" href="https://fonts.gstatic.com"
        link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"
        * Applied to index.html to overwrite font but font not changing.
    * Solution: Body font-family css is to also be updated (...it's late...)
    
    * As a result of finding reason for why font was not showing have decided to use different fonts Source Serif Pro and Dance Script for Hero text and titles.

- Google Maps
    * Applied two google maps to Index.html (Commit 14). When page is re-loaded only one of them is interactive.
        * A potential solution found in stackoverflow to show multiple maps per page: https://stackoverflow.com/questions/4074520/how-to-display-multiple-google-maps-per-page-with-api-v3
            * This has worked but just need to amend location focus for each map, to be done in commit 15
    *Solution: simply creating an additional empty variable :)

- Font awesome 5.15.3 cdn from Bootstrap not working
    * Solution: Found another 5.15.3 version at cdnjs website: https://cdnjs.com/libraries/font-awesome

- Card collapse on load as opposed to pressing the Read more button
    * Solution: Bootstrap has a class = "collapse in" which collapses the div on page load

- Button collapse not working with Bootstrap cdn.com link.
    * Solution: Bootstrap site Get Bootstrap.com has recommended links for javascript and jquery: https://getbootstrap.com/docs/4.4/getting-started/introduction/


- Nav bar to collapse when link is pressed for toggler width versions only.
    * JQuery code written but affected menu also for wider versions
    * Solution: Updated so when scrolling down Nav Bar collapses and scroll up navbar appears

- Alignment to left? 
    * Solution: picture tile margin too large, reduced and alignment works ok now.

- Nav Links to highlight at associated locations
    * Solution: Javascipt updated to highlight at particular sections of page with the help of giving id's to menu links.

- Project published, fixed images missing
    * Solution: style.css images have to be relative '..' replaced '/assets' in url.

- Read More Read Less buttons text updating all buttons when pressed.
    * Solution: Adjusted JavaScript identifying the Card-text and Read more buttons identified by the Div ID and duplicated for each location

- Contact background Teddy as landscape not looking good on less than desktop versions and having to use "contain" style
    * Solution: Changed to beach people and looks much better as is a larger spacious image with smaller elements

- Navbar toggler button for mobile versions making navigation confusing
    * Solution: As there are only 3 selections, toggler button removed and sizes adjusted. Also removed Home button for Mobile as this is selectable by pressing Eatin logo.

- remote: warning: File assets/test-files/element-files/email-send-receipt-test.gif is 64.05 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
    * Email test gif too big
        * Solution: Gif compressed using online compressor https://www.freeconvert.com/gif-compressor
        * Converted from 64.05 MB to 24.30 MB

[Back to top ⇧](#top)

<h2 align="center">
    <a href="https://eatin-project.herokuapp.com/" target="_blank">Eatin Website</a>
</h2>

<h3 align="center">
    <a href="https://github.com/TezBaydu/Milestone-Project-3-cooking#README" target="_blank">Back to README file</a>
</h3>

<h1 align = "center"> Pet Friendly

<h2 align = "center"> Developer : Brittany Lindgren
<br>
<br>

<h3 align = "center"> <u>Description</u>

This app will make it easier for pet owners to travel with their pets. Searching for various pet friendly places in your travel destination can take forever. Here, we collect all of that data for you, to make planning your next vacation a smoother experience. We know you don't want to leave your loved one in a hot car or with thatno further notes at this timee not so responsible friend that you don't really trust. With Pet Friendly at your fingertips, you can stop worrying and start relaxing, with your pet by your side. 
<br>
<br>
<br>

## <p align = "center">  <u>**Project Proposal**</u>
|  |  | 
| ----- | ----- | 
|  Target demographic  |  Pet owners, people who can't leave their pet at home, someone who has their vacation planned and finds out last minute that their friend or pet sitter can't take care of their pet for them, someone who has a family emergency and has to leave quickly with their pet. User ages most likely between 20 and up - old enough to own a pet autonomously  | 
| What problems does this app solve  | Looking for pet friendly places takes a long timee, there are many different hotels or vacation services and some allow pets while others do not, users would have to look at each separate place individually and then use each location's filter to find a pet friendly option, then to compare prices would have to repeat that process. During a vacation, a user may not be sure if a certain shop is pet friendly or not. If a user does not have a friend or partner to stay with their pet, it may be unsafe for them to leave their pet outside, or they may not even have that option depending on the pet. Pet friendly will minimize timee and frustration spent searching for options and allow users to see if there are pet friendly businesses nearby so that they don't have to wonder whether or not they can take their pet inside with them.  |
<br>
<br>

### <p align = "center"> **MVC**
| Minimum Viable Product | What technologies or tools will be needed to achieve this MVP | Notes and Considerations |
| ----- | ----- | ------ |
|  Users should be able to create a 'destination' list on the MyTrips page and add destinations  |  React, Redux, Firestore / Firebase CRUD functionality  |  see stretch goals for further expansion on list capabilities  |
|  Users should be able to search by location and receive results for pet friendly restaurants, shops, hotels, etc.  |  Custom API / Pre-existing API (Google Maps, AirBnB, etc.) / .NET-Core backend to handle fetching from API  |  Integrating several APIs in one project may be complex. May need to begin with a single custom faux-API created as proof of concept and integrate other API as stretch goal.  |
|  Users should be able to add a location search result to a destination | Will need a database - MySQL, Firebase / Firestore or MongoDB  |  see stretch goals for further expansion on list capabilities  |
   
<br>
<br>

### <p align = "center"> **Stretch Goals**
| What additional features will be added | What technologies or tools will be needed | Notes and Considerations |
| ----- | ----- | ------ |
|  User will have full CRUD functionality for their 'trip' lists. Lists will auto populate with categories to which user can add search results  |  Database / Model and Controller in .NET backend  |  no further notes at this time  |
|  Users should be able to leave reviews / read reviews about how pet friendly each location is - this will help take the guesswork out of choosing a place to stay / eat / shop, etc.  |  Register / Login capabilities so that users have full CRUD functionality for their own reviews and read only for other users' reviews. Use React / Redux frontend *NOTE: Full CRUD functionality may be better suited to stretch goals than MVP, will prioritize other MVC items  |  no further notes at this time  | 
|  Map display of a search area  |  Google Maps API / Google Places API  |  limited number of API uses, then charged for each use  |
|  Use IP address to limit number of reviews per day or searches per second  |  ?  |  no further notes at this time  |
|  Infinite scroll or paginations to limit number of search results displayed  |  JavaScript / jQuery for infinite scroll or .NET-Core for pagination  | no further notes at this time  |
|  Email verification for new users  |  Firebase - custom email action handlers  |  no further notes at this time  |
|  Sign in with Google or Facebook account  |  Facebook and Google Authentication  |  no further notes at this time  |
|  Display login / register in a modal  |  CSS or Sass  |  no further notes at this time  |
|  Style the app  |  CSS or Sass  |  no further notes at this time  |
|  Users can add additional search parameters. For example `traveling with dog` and `require wheel chair access` or add more specific information about what type of pet they're traveling with, such as `dog` or `boa-constrictor`  |  Complex search queries  |  Firebase / Firestore may work well for MVP, but has limited query capabilities - need to research which databases work well with React and have complex query capabilities  |
|  Travel section where users can specify `1. Where they're traveling, 2. How they're getting there` and `3. What type of pet they're traveling with.` The user will then be shown or directed to information about what they need to know to successfully travel with their pet  |  will need to reseach options  |  no further notes at this time  |
|  Deploy site  |  will need to reseach options  |  may be able to deploy using Gatsby, but project not initially built with Gatsby, so may need other tools  |
|  Style google map  |  https://snazzymaps.com/explore, custom CSS  |  snazzy maps themes I like: https://snazzymaps.com/style/74/becomeadinosaur, https://snazzymaps.com/style/18/retro, https://snazzymaps.com/style/14889/flat-pale, https://snazzymaps.com/style/17/bright-and-bubbly - add a mapStyles.js file with code for styling map, import into component that holds map |
|  Users can add map icons to pet friendly places that are not yet in the API or database  |  google maps API |  Watch this tutorial from minute 12 to minute 16  |
|  Add animation to markers on map (ex: drop, bounce, etc)  |  google maps API  |  resource: https://developers.google.com/maps/documentation/javascript/markers  |
|    |    |    |
|    |    |    |

### <p align = "center"> **Model**

![PetFriendly Model](./wwroot/images/petfriendly-model.png)

### <p align = "center"> **Other Considerations**
1. What type of license should I use if I want to maintain ownership of this application - look into licensing, re-read MIT license terms

<br>
<br>

### <p align = "center"> **Known Bugs**
| Issue & Message | Solution |
| ----- | ----- | 
| When clicking 'Trip Details' button, page is not re-directed to TripDetails component |  |
|  |  |
|  |  |

## <p align = "center">  <u>**Process and Decision Making**</u>
1. Read Documentation, decide which version of React to use
2. Will use React with Redux + ASP.NET Core 
3. Create new application using `dotnet new reactredux -o Pet-Friendly`
4. Note that documentation states project is initiated with two apps - ASP.NET Core and React. ASP.NET Core app is intended for data access, authorization and server-side concerns while React app (located in ClientApp subdirectory) is intended for all UI concerns.
5.

Timeline
September 25th 2020:
1. 8:00 am - use npx-create-react-app to set up application with gitignore and readme
2. 8:30 am - begin to document in README
3. 9:30 to approx 11:00 - read react documentation, read postresql documentation, watch videos on different databases to use with react, then remembered plan to use react-redux with asp.net
4. 11:00 to noon - read documentation for react with asp.net, research project setup and use of api / authentication / etc. 
5. 1:00 - Look at resources posted in discord. 
6. 1:30 - Create new application (see step 3 in process and decision making) and transfer README content to new application.
7. Read through article on react with ASP.NET Core https://www.red-gate.com/simple-talk/dotnet/asp-net/a-real-world-react-js-setup-for-asp-net-core-and-mvc5/ and then continue to follow along with react-redux with ASP.NET Core setup documentation https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli
8. Successfully build and run project with boilerplate web template
9. 2:00 to 5:00 - Work on wireframe and component design with Figma

October 2nd 2020:
1. 8:00 am - re-assess MVP and Stretch goals, consider structure of website in preparation to complete Figma wireframe.
2. 8:30 am to 11:00 - am complete Figma wireframe for project (includes MVP and some Stretch)
3. 11:00 to 3:02 - Observe and note how auto generated files are set up to understand how project front and back end are connected
4. 3:00 to 5:00 - research CRUD functionality with React + ASP.Net Core Web Application

October 3rd 2020:
1. 11:30 to 12:30 - Set auto populated content on home screen to display: none, add own elements
2. 12:30 to 12:45 - figure out how to set up custom Links, link to MyTripsControl and ProfileControl pages
3. 1:00 to 1:15 - reconsider design to create more user friendly experience
4. 1:15 to 1:50 - add static elements to home, mytrips and profile pages

October 4th 2020: - Get record from Capstone2 pet friendly project

October 5th 2020: 
1. 8:40 - Start new project using simple create-react-app command
2. 8:40 to 10:00 - Set up new project
3. All day - Create project with react, integrate redux, test and add firebase

October 6th 2020: 
1. 9:30 to 11:00 - Add client side routing to project
2. 11:00 to 1:30 - Research use of GoogleSearch and GoogleMap API to implement into project
3. 2:00 to TBD - Follow along with tutorial to integrate google maps api into project


## <p align = "center"> Documentation and Resources used for this project
* **https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli**
* https://reactjs.org/docs/getting-started.html
* https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react-with-redux?view=aspnetcore-2.2
* https://www.youtube.com/watch?v=da7pyc918jo
* https://www.youtube.com/watch?v=lW7DWV2jST0
* https://www.red-gate.com/simple-talk/dotnet/asp-net/a-real-world-react-js-setup-for-asp-net-core-and-mvc5/
* https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli
* https://youtu.be/NjN00cM18Z4
* https://create-react-app.dev/docs/getting-started/
* https://youtu.be/WZcxJGmLbSo 
  - minute 8 to 10 of video: how to add styling to map
  - minute 10: disable select map UI feature, customize map header with icon
  - minute 12: how to add event listener so user click adds icon and saves location to state



## <p align = "center">  <u>**Set Up on Your Local Machine**</u>
1. Clone project from github
2. Open in IDE / Text Editor
3. Open terminal
4. Check that you are in the main directory, file path should end with `Capstone/Pet-Friendly`. If you are not in the main directory, navigate to main directory with `cd Pet-Friendly`
5. Enter the following commands, in order to install, build and run the application :
* `npm install`  (This command is only necessary the first time you open the project on your computer. It may take several minutes for the install to complete - this is normal)
* `dotnet build` 
* `dotnet run`

## <p align = "center">  <u>**Set Up a Database**</u>
1. Sign up for Firebase
2. Create a Firebase project and database 
3. add a .env file to the root of your folder
4. add your credentials to the .env file, see below (replace the value between the " " with your credential values)
```
REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
```
THIS SHOULD BE MORE DETAILED, UPDATE THIS
<br>
<hr>


### Technologies used for this project
* Visual Studio Code IDE
* Git for Version Control
* Markdown for documentation
* Figma - design planning
* React with Redux
* ASP.NET Core
* TypeScript
* 
* 
* 

### Attributes that need to be included
1. For airplane vector icon 
* Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
2. For dog image
* <span>Photo by <a href="https://unsplash.com/@ben_wong_31?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Benjamin Wong</a> on <a href="https://unsplash.com/s/photos/pets-travel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
3. Search icon
* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>


### License
This site is licensed under the MIT license
Copyright (c) 2020 Brittany A Lindgren





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

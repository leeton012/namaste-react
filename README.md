# Basic Stuffs Need to know

////////////------------------------------- Bsic of React
fundamental------------------/////////////////////

// const parent = React.createElement("div", { id: "parent" }, // [ // React.createElement("div", {
id: "child1" }, // [ // React.createElement("h1", {}, "This is Namaste React "), //
React.createElement("h2", {}, "I am from h2 Tag")

// ]), // React.createElement("div", { id: "child2" }, // [ // React.createElement("h1", {}, "I am
from h1 Tag"), // React.createElement("h2", {}, "I am from h2 Tag") // ]) // ])

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent);

//////////////////------------------------- end of Fundamental
---------------------////////////////////////

// JSX ==> is not HTML like JavaScript, It's HTML like Syntax or xml like Syntax // jsx transpiled
before it reaches to the js browser( for js engine understanding) --> Transpiled by PARCEL -->
inside PARCEL, it's transpiled by help of BABEL //jsx code basically converted to
React.createElement

// React Element // const jsxHeading = ( // <h1 className='head' tabIndex='5'> // Namaste React
Element using jsx // </h1> // ); // console.log('🚀 ~ file: App.js:31 ~ jsxHeadibng:', jsxHeading);

// // React Component ==> two wayd to create component // // ===> Class Based Component -- OLD // //
===> Functional Component -- NEW

// // Functional Component // const JSXHeading = () => ( //

<h1 className='head' tabIndex='5'> // Namaste React Functional Componment using
jsx // </h1> // );

// const HeadingComponent = () => ( // <div id='container'> // {/_ call react functional component
_/} // <JSXHeading /> // {/_ call react Element _/} // {jsxHeading} //

<h1 className='heading'>Namaste React from Functional Compoenent</h1> // </div> // );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<HeadingComponent />);

# parcel

- Dev Build
- Local Server
- HMR == Hot Module Replacement
- parcel uses File Watching Algorithm -- written inm c++
- caching - faster Build
- Image Optimization
- Minification of the file
- Bundling
- Compress
- Consistent Hashing
- code splittting
- Differentiate Bundling - SUpport older browser
- Diagnostic
- Better Error Suggestion
- HTTPs features
- Tree Shaking - remove unused code
- Diff Byuild for Dev and prod

# Namaste Food Structure

/\*\*

- Header
- - Logo
- - nav items
- Body
- - Search
- - RestaurantContainer
-     - RestaurantCard
-        - Img
-        - Name of Restaurent, Star Rating, Cuisine, Delivery Time
- Footer
- - Copyrivghts
- - Links
- - Address
- - Contact \*/

# Two types of import and export

- default import/export
- default export component_name
- imoprt component_name from path

- named import/export
- export const component_name
- import {component_name} from path

# RTeact Hooks

(a normal JavaScript Function)

- useState
- useEffect

# 2 types of routing in web apps

- client side Routing --> basicalli we do client siode routing for the single page application.
- Server side Routing

# css file file before start into telwindcss

- .header{
- display: flex;
- justify-content: space-between;
- border: 1px solid black;
- border-radius: 10px;
- }

- .logo{
-     width: 120px;
- }

- .nav-items{
-     padding: 0px 10 px;
- }

.nav-items > ul{ font-size: 24px; display: flex; list-style-type: none; }

.nav-items > ul > li { padding: 10px; margin: 10px; }

.res-container{ display: flex; flex-wrap: wrap; justify-content: center; }

.res-card{ padding: 5px; width: 200px; margin: 8px; border-radius: 10px; }

.res-card:hover{ border: 1px solid black; cursor: pointer; }

.search{ padding: 10px; }

.res-logo{ width: 200px; height:120px; border-radius: 10px; }

.filter-btn{ margin: 10px; cursor: pointer; }

.shimmer-container{ display: flex; flex-wrap: wrap; justify-content: center; }

.shimmer-box{ width: 200px; margin: 10px; border-radius: 10px; height: 300px; background-color:
#f0f0f0; }

.login{ padding: 0 20px; cursor: pointer; }

.search{ display: flex; padding: 10px; }

.filter{ display: flex; }

.user-card{ padding: 10px; border: 1px solid black; border-radius: 10px; }

.func-comp{ text-align: center; }

.cls-comp{ text-align: center; }

.user{ text-align: center; }

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build Our own store
- Connect our store to our app
- Create a cart slice
- Dispatch an action
- Selector

# Types of Testing(Developers)

- Unit Testing
- Integration Testing
- End to End Testing --> e2e Testing

# Setting up testing in our app

- Install React Testing Library
- Install jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel config file to disable default babel Transpilation
- Jest Configuration
- JEST initialize --> npx jest --init
- install jsDom Library
- install @babel/preset-react - to make jsx work in test case
- include @babel/preset-react inside my babel config
- install @testing-library/jest-dom

# ITPS Test
Live At: https://itps-test-sol-garcia.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

## Requirements for test


/\*----------------------------------------------------------------------------------------------------------------

General Notes

- For all exercises, please prefer readability/expressiveness over maximum algorithmic efficiency.

- You may add any other code such as functions, data structures, etc. that you may want in order to better complete
  an exercise, beyond what is explicitly asked for. Feel free to reuse code for multiple exercises as well.
  -----------------------------------------------------------------------------------------------------------------\*/

/\*----------------------------------------------------------------------------------------------------------------

1) Create a function that takes an array of integers as its lone argument and returns an array containing
   the square of each value in the input.

For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 64, 100]`.
-----------------------------------------------------------------------------------------------------------------\*/

/\*---------------------------------------------------------------------------------------------------------------- 

2) Create a function that takes an array of counter objects (see example) as its lone argument and returns
the sum of all of the counters' `count` properties.

For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an output of `6`.
-----------------------------------------------------------------------------------------------------------------\*/

/\*---------------------------------------------------------------------------------------------------------------- 

3) Create a function that takes an object in the general shape of `movies` (see below) as the first argument,
and the name of an actor as the second argument. The function should return an object that is equivalent to
the input, only with the given actor's name included in each movie's `actors` array. If the name is already
present, it should not be added again. The function should not mutate the input object, or any of its sub-structures.

Note: `movies` is just an example, the function should not assume that the movies in the object will be hard-coded.
-----------------------------------------------------------------------------------------------------------------\*/
const movies = {
theGoonies : {
actors: [
"Josh Brolin",
"Corey Feldman",
"Kerri Green",
],
},

momento : {
actors: [
"Guy Pearce",
"Carrie-Anne Moss",
],
},
}

/\*---------------------------------------------------------------------------------------------------------------- 

4) Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends
an unordered list of every actor's name to the DOM's `body` element.

The names in the list should be unique (no actor's name should appear in the list more than once).
If the list element already exists in the DOM, the procedure should replace the existing list with a new one.

Bonus points if the names are alphabetically sorted :)
-----------------------------------------------------------------------------------------------------------------\*/

/_---------------------------------------------------------------------------------------------------------------- 

5) Create a procedure that retrieves the data from the REST API endpoint hosted here: https://jsonplaceholder.typicode.com/posts.
The procedure should then log the id of the first post with a userId of 7 and a title that begins with the letter "e"
(or undefined if it does not exist). It should also log any potential retrieval errors using `console.error`.
-----------------------------------------------------------------------------------------------------------------_/

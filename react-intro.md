# React Intro 7/19/2021

### What is React?
A JavaScript library for building user interfaces

### What is a Library
- Collection of code snippets, node modules
- Package manager - takes the thousands of node modules and puts them together in the correct way
- Yarn - a JavaScript package manager

### React
- Structures the code to be reusable
- Handles interactions from the user really well

### Resuable
- React is made up of components, classes

### User Interactions
- Efficiently - limit the number of page refreshes
- DOM - document object model
- Updates to the DOM are expensive - expensive meaning time/money to move data around the internet
- Limit this interaction by isolating the node where the change happens
- Update only that node
- Virtual DOM - listens for changes


### Working with React
- Component call - `<HelloReact />`
- Component - class that returns markup, be a class, inherit from React.Component, render method (lifecycle methods) that returns markup
- JSX - JavaScript xml, marriage between HMTL and JS
- `<></>` React Fragment

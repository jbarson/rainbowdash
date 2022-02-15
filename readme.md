## Topics

### What is React?
A JavaScript library for building user interfaces
Open source project maintained by Facebook
React is built around the concept of managing data
  - Changes to the underlying data result in changes to the UI
  - In React, state === data

__Component-based__: UI is composed of small pieces

__Declarative__: We describe the final outcome of our code and not the step-by-step process to achieve that result

### JSX
-  JSX is a syntax used by a preprocessor to produce javascript
- It looks like HTML
- A JSX tag converts directly to a javascript function `React.createElement`
- We use Babel to turn our JSX into javascript

### Components

-   Components are the building blocks of a webpage (eg. search input, navigation bar, contact us form)
-   Ideally, components should be reusable (which means that their state should be passed into them via props rather than maintaining their own state)
-   Deciding which DOM elements become components and which don't is a skill that comes with practice and experience
-   We will be building all of our components using functions
-   The functions return value contains a mixture of HTML and JS; React calls this `JSX`

  #### Controlled Component:
    Takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.

  #### Uncontrolled Component:
    Stores it state internally,

### Event Handlers
  - Functions that are executed when an event occurs
  - Must be a function, not a function call
### Props
  - Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

 - `props.children` is available on every component. It contains the content between the opening and closing tags of a component.
### State
  - State is the dynamic data in our app
  - Lives inside a component

## Links

- [React Site](https://reactjs.org/)
- [React from Scratch](https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c)


- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [npx VS. npm](https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm)
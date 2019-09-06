# 1. React ecosystem contain: 
1. Routing. In the navigation click news=> calls route=> Routes(Home, Contact, News)=> Components(Home, Contact, News)=> Pages 
1. Server-side rendering. React Dom Server. In the server code=> renderToString(element)=> renderToStaticMarkup(element) 
1. State management. Managing different points in time or states, for your application. Redux 
1. Mobile, React Native: Apple, Android, Windows. 
1. Reviewing an animation library, React-motion powerful animation, support: spring, transitions, motion. 
1. Testing and debugging. Chrome, for Firefox, or standalone developer tool: React structure, Props, State. JEST: UI tests, Coverage requests, Matchers, Use with Andy frameworks. 
1. Type checking in React. Eliminate a lot of the bugs. Types with: propTypes, Flow.

# 2. React ecosystem demo:
1. [React docs](facebook.github.io/react)  
1. [Redux](redux.js.org) 
1. [Mobile](facebook.github.io/react-native) 
1. [Animation](github.com/chenglou/react-motion)
1. Testing and debugging
    * [Jest](facebook.github.io/jest)
    * [Devtools](github.com/facebook/react-devtools)
1. Types
    * [propTypes](github.com/reactjs/prop-types)
    * [Flow](flow.org)


# create react app and install
npx create-react-app my-app
cd my-app
npm start

[Guide book](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-express-application)
### How to start
1. yarn install
1. yarn start
1. yarn add highlight.js

## React
> React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
> React has a few diferent kinds of components, but we'll start with React.Component subclasses.
> A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.
```javascript
class ShopingList extends React.Component {
   render() {
       return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
            </div>
        )
    }
}
```
#### JSX
> Most React developer use a special syntax called JSX whicth makes it easier to wirte these structures.
```javascript
return React.createElement('div', {className: 'shopping-list'},
            React.createElement('h1', /* ... h1 children ... */),
            React.createElement('ul', /* ... ul children ... */)
        );
```
[React Top-Level API](https://reactjs.org/docs/react-api.html#createelement)

> You can put any JavaScript expression within braces inside JSX. Each React element is a real JavaScript object that you can store in a variable or pass around you program.

#### Passing Data Through Props

#### Problem solved
> Build relative url. package.json `"homepage": "./",`
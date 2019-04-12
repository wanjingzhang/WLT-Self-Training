[Guide book](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-express-application)

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
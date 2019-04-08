[Guide book](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-express-application)

## React
> React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
> React has a few diferent kinds of components, but we'll start with React.Component subclasses.
> A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.
`class ShopingList extends React.Component {
`   render() {
`       return (
`            <div className="shopping-list">
`                <h1>Shopping List for {this.props.name}</h1>
`                <ul>
`                    <li>Instagram</li>
`                    <li>WhatsApp</li>
`                    <li>Oculus</li>
`            </div>
`        )
`    }
`}

#### JSX
> Most React developer use a special syntax called JSX whicth makes it easier to wirte these structures.
`return React.createElement('div', {className: 'shopping-list'},
`            React.createElement('h1', /* ... h1 children ... */),
`            React.createElement('ul', /* ... ul children ... */)
`        );

[React Top-Level API](https://reactjs.org/docs/react-api.html#createelement)

> You can put any JavaScript expression within braces inside JSX. Each React element is a real JavaScript object that you can store in a variable or pass around you program.

#### Passing Data Through Props


Second is Visual Studio Code for Web Developers: 
1.) Basic editing. Find the parentheses and brace's opening and closing symbol. 
	cmd + shift + \

2.) Terminal. Run current selected line. 
	cmd + shift + p
	> run seleceted test

3.) Working with snippets. Custom the keywords when input the keywords the system type the custom function automatically in different language. 
	Code->Preferences->User Snippets->JavaScript.json

4.) Navigating code. Go to define, line. 
	cmd + shift + O , control + G 

5.) The emmet tool. docs.emmet.io
	nav#myNav.ic>ul>(li.myLi)*5

6.) Multiple selection. Select the code as same as the selected code, select the same code, select the previous line.
	cmd + D , cmd + shift + L , cmd + option + UP


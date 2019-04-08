#### Quick start
###### Hello World
>ReactDOM.render(
>   <h1>Hello, world!</h1>,
>   document.getElementById('root')
>);

###### Introducing JSX
> const element = <h1>Hello, world!</h1>
> JSX produces React "elements".

##### Embedding Expressions in JSX
> const name = 'Josh Perez';
> const element = <h1>Hello, {name}</h1>;
> ReactDOM.render(
> element,
> document.getElementById('root')
> );


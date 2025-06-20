# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



previously to create react application without any external framework we will use the command - npx create-react-app

to run it - npm start

but create-react-app - depreceated 

Stable version of react 19 was introduced


-----------------------------------------------------



What is ReactJS ?

ReactJS is a frontend framework which you can use to build complex UI's by the support of virtual DOM, and JSX - you can seamlessly build UI Components.

In Javascript - when you update any part of the DOM the entire DOM will be updated - more no of updatations

Virtual DOM - It will update only one part or the part that needs to be updated no entire updation

the document has other parts - that parts will not affect / updated.

At final phase this virtual dom will create a copy and updates original DOM.

- Diffing algorithm 


JSX - Javascript + xml 

- It supports javascript in the html

you can use .jsx / .js as the extension.

- The files in the react is called as "components".

- It always starts with a function and we have to export that function.

- Why to export ? - We can use re-usable components in the react so that it reduces so much of time for without redesigining the existed component.


function Component() {
    // pure js you have to write
     return (
        // html + js - you can write
     )
}

export default Component;

- Remember always, your component name starts with capitals.

- Whatever the file name is you can give the component name - suggestable

- Fragments - each and every component should be wrapped under single fragment 

  <>             <div>
         or 
  </>            </div>

- Always create your files or components inside the src folder


  Everyday agenda

  1. We learn something - code something in vs code
  2. We push that code into github.
  3. You have to fork my repository and open pull requests and I will also open pull requests you have to merge it.

React Lecture 2 (17th June) - Displaying data, Adding style(2 ways), Conditional Rendering, Rendering lists

 Adding style(2 ways) - by giving classname, inside the tag

       - <div className="someName"> (React)  <div class="someName"> (HTML)

       - <div style={{key: "value"}}> (React) <div style=""> (HTML)

  Conditional Rendering - It acts as a conditional statement if the condition is true it will display the content 

  {condition &&
           <>
                 
           </>
  }


  {condition ? (
    <>
      content1
    </>
  ) : (
    <>
      content2
    </>
  )}


  To know about methods in react like map, forEach -> first practice it on plain JS array methods.


{fruits.map((fruitName, id) => 
            (
                <div className="fruits">
                    {fruitName}
                </div>
            )
        )}

  for(int i = 0; i < fruits.length; i++) {
    fruits[i] -> fruitName 
    i -> id
  }

  for(String fruitName : fruits) {
      fruitName -> fruitName
  }

  for fruitName in fruits:
      fruitName -> fruitName




Lecture 3 - Props, Data passing, State in react (usestate, useffect)

Suggestable Thing : 

1. Always write proper ids, classname for each and every tags 
2. For input fields write every attribute (placeholder, type, id, className)

Testing team -> test your code / functionality (by 2 ways manual and automation).

What makes you good developer is -> writing proper code with all conventions

props - properties 

- We can pass the data from one component to another component via props.

- Props helps us to maintain / to pass consistent data.

- We don't have to import components everywhere if u use props.


How we can pass props ?


So Lecture 4 - States

They syntax of the state is 

1. const -> write const variable

2. const [] -> write list/array symbol

3. const [name, setName] -> write 2 names one is a small/camelcase word, second word starts with setand then write capital word.

4. const  [name, setName] = useState("") write useState() hook and initialize any value.

 -> const  [value, setValue] = useState(0)

   String name = "";       int value = 0;
                            
   name = ""               value = 0

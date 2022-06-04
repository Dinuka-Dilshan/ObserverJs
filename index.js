import Store from "./store.js";
import css from './css.js';

const store = new Store();

const value = document.getElementById("value");

store.subscribe(() => {
  store.getState().map((todo) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(todo.title));
    document.body.insertBefore(div, value);
    div.className = "div";
    css(div,{
        display:'flex',
        fontSize:'1.5rem',
        padding:'0.5rem',
        border:'1px solid gray',
        margin:'0.5rem',
        color:'#1AC110'
    })
  });
});

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => store.setState(json));

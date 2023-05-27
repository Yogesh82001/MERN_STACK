// map component to the HTML 
// VDOM -> DOM 
import ReactDOM from 'react-dom';
import {App} from './App.js';
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);
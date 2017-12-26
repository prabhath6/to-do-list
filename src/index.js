import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';

const reactContainer = document.getElementById("react-container");

ReactDom.render(
    <div>
        <ToDoList />
    </div>, reactContainer);
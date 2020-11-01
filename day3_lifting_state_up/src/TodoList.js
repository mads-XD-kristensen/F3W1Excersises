import React from 'react';
import PropTypes from 'prop-types';


function TodoList(props) {
    const { todos, deletePerson, editPerson } = props;
    return (<React.Fragment>
        <h2>All Persons</h2>
        <table>
            <thead>
                <tr><th>id</th><th>name</th></tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.todoText}</td>
                        <td>
                            <a href="#" onClick={(e) => { e.preventDefault(); editPerson(todo) }}>edit</a>
                        /
                            <a href="#" onClick={(e) => { e.preventDefault(); deletePerson(todo) }}>delete</a>
                        </td>
                    </tr>))}


            </tbody>
        </table>
    </React.Fragment >
    )
};


export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array
}
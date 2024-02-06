import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from 'features/todo';
import { Navigate } from 'react-router-dom';

import "./css/ToDoModal.css";

const ToDoModal = () => {
    const dispatch = useDispatch();
	const { isAuthenticated } = useSelector(state => state.user);
    const { loading, todoList } = useSelector(state => state.user);

	const [formData, setFormData] = useState({
		todo_desc: '',
	});

	const { todo_desc } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		// dispatch(login({ todo_desc })); Make sure to change login once redux
        // is done for entry logic into backend
        // Make sure to pass this as 1 parameter (as an object {})
        dispatch(addNewTask({ todo_desc }));
	};

    const handleKeyDown = e => {
        if (e.key === 'Enter' || e.key === 'NumpadEnter') {
            console.log("enter was pressed down");
            onSubmit(e);
        }
    };

    // Idea: when sending the form, if the response is 401,404,etc
    // do not delete the info in the field and change the color to red

    if (!isAuthenticated) {return <Navigate to='/login' />}

    return (
        <div className="todo-main-box">
            <div className="todo-title">
                <h2 style={{color: 'BLACK'}}>To Do List</h2>
            </div>
            <div className="todo-entry-wrapper">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="+ add an entry"
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                        value={todo_desc}
                        className="input-field"
                    ></input>
                </form>
            </div>
            <div className="todo-list">
                {todoList ? (
                    todoList.data.map((value, index) => (
                            <div className="todo-list-item">
                                <input type="checkbox"></input>
                                <p className="todo-item-text">Learn something</p>
                            </div>
                    ))
                ) : (
                    <p>Data is not available</p> // Placeholder or alternative rendering when data is not present
                )}
                <hr className="todo-item"></hr>
                <div className="todo-list-item">
                    <input type="checkbox"></input>
                    <p className="todo-item-text">Learn something else!</p>
                </div>
                <hr className="todo-item"></hr>
                <div className="todo-list-item">
                    <input type="checkbox"></input>
                    <p className="todo-item-text">Learn to fly.</p>
                </div>
            </div>
            <div className="todo-footer">
                <div className="todo-left-icons">
                    <p>test | test | 3 items remaining</p>
                </div>
                <div className="todo-right-icons">
                    <button className="button-13 ">Active</button>
                    <button className="button-13 ">Pending</button>
                    <button className="button-13 ">Done</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoModal;
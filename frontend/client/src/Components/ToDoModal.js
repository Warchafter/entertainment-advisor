import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./css/ToDoModal.css";

const ToDoModal = () => {
    // const dispatch = useDispatch();
	// const { loading, isAuthenticated, registered } = useSelector(state => state.user);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { newEntry } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		// dispatch(login({ newEntry })); Make sure to change login once redux
        // is done for entry logic into backend
        // Make sure to pass this as 1 parameter (as an object {})
	};

    // Idea: when sending the form, if the response is 401,404,etc
    // do not delete the info in the field and change the color to red

    return (
        <div className="todo-main-box">
            <div className="todo-title">
                <h2 style={{color: 'BLACK'}}>To Do List</h2>
            </div>
            <div className="todo-entry-wrapper">
                <form>
                    <input
                        type="text"
                        placeholder="+ add an entry"
                        onChange={onChange}
                        value={newEntry}
                        className="input-field"
                    ></input>
                    <input
                        type="text"
                        placeholder="+ add an entry"
                        onChange={onChange}
                        value={newEntry}
                        className="focus-only"
                    ></input>
                    <input
                        type="text"
                        placeholder="+ add an entry"
                        onChange={onChange}
                        value=":focus-visible"
                        className="focus-visible-only"
                    ></input>
                    <button class="focus-visible-only">:focus-visible</button>
                </form>
            </div>
            <div className="todo-list">
                <div className="todo-list-item">
                    <input type="checkbox"></input>
                    <p className="todo-item-text">Learn something</p>
                </div>
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
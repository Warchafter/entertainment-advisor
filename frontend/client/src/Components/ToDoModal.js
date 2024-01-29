import "./css/ToDoModal.css";

const ToDoModal = () => {
    return (
        <div className="todo-main-box">
            <div className="todo-title">
                <h2 style={{color: 'BLACK'}}>To Do List</h2>
            </div>
            <div className="todo-entry-wrapper">
                <div className="todo-entry-box">
                    <p>+ add an entry</p>
                </div>
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
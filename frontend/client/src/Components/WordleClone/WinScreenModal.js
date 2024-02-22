import "./css/WinScreenModal.css";
import "../css/ToDoModal.css";

const WinScreenModal = ({gameWord, lineCount, }) => {
    return (
        <div className="wordle-win-wrapper">
            <div className="win-title">
                <h2>
                    You win!
                </h2>
            </div>
            <div className="win-word">
                <h3>
                    You guessed "{gameWord}"
                </h3>
            </div>
            <div className="win-description">It only took: {lineCount-1} tries.</div>
            <div className="win-button-row">
                <button className="button-13 win-continue-btn">Continue</button>
                <button className="button-13 win-tryagain-btn">Try Again!</button>
            </div>
        </div>
    );
};

export default WinScreenModal;
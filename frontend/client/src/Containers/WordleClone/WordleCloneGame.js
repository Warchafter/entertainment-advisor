import { NavLink} from "react-router-dom";
import DefaultLayout from "hoc/Layout/DefaultLayout";

import "./css/WordleCloneGame.css";
import { useState } from "react";

const WordleCloneGame = () => {

    ///    TODO:
    ///     1.- Capture the input of the user, which max has to be a 5 letter word.
    ///     2.- Create an array of 5x6 for the 5 letters and the 6 different attempts.
    ///     3.- Show the letter that the user is typing into the array.
    ///     4.- Validate that the user is typing only the letters allowed.
    ///     5.- Show a keyboard with the allowed keys.
    ///     6.- Show which keys have been used with colors:
    ///             Transparent: not used.
    ///             Grey: used and not found.
    ///             Yellow: used and found, incorrect spot.
    ///             Green: used and found, correct spot.
    ///     7.- Keep a counter of the line in which the user is typing into that
    ///         can only go up by one after the user pressed enter to submit the word.
    ///     8.- User cannot press enter if the word is shorter than the 5 letters.
    ///     9.- A seperate internal word counter needs to be kept in order for the
    ///         validation to work properly on multiple functions.
    ///     10.- No matter where the user clicks, he will be able to type into the
    ///         input text field for the game.

    /// the user types the word --> gets saved in typedWord state
    /// the letters are showed on the screen for current word
    /// only after user presses enter, does the word go into the stored array
    /// that includes the list of checked words for the user

    const [lineCount, setLineCount] = useState(0);
    const [typedWord, setTypedWord] = useState(""); ///Needs to be an array.
    const [typedEntries, setTypedEntries] = useState([])
    const [errorMsg, setErrorMsg] = useState(null);

    const typedWordValidation = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if (e.target.vaule.length < 6) {
            setTypedWord(e.target.value);
        } else {
            setErrorMsg("Word is too long!");
        }
    };

    const onSubmitWordHandler = (e) => {
        e.preventDefault();
        if (typedWord.length === 5) {
            ///check logic for correct word here
        } else {
            setErrorMsg("Word is too short!")
        }
    }

    const CurrentLineWord = () => {
        
    }

    return (
        <DefaultLayout>
            <div className="nav-top-header">
                <NavLink className={"nav-p-bg"} to='/wordle-clone'>Back</NavLink>
            </div>
            <input
                type="text"
                className="hidden-input"
                autoFocus
                value={typedWord}
                onChange={(e) => typedWordValidation(e)}
            >
            </input>
            <div className="wordle-grid-container">
                <div className="wordle-grid-item">
                    <p className="wordle-grid-letter">T</p>
                </div>
                <div className="wordle-grid-item">
                    <p className="wordle-grid-letter">E</p>
                </div>
                <div className="wordle-grid-item">
                    <p className="wordle-grid-letter">S</p>
                </div>
                <div className="wordle-grid-item">
                    <p className="wordle-grid-letter">T</p>
                </div>
                <div className="wordle-grid-item wordle-letter-grey">
                    <p className="wordle-grid-letter">!</p>
                </div>
            </div>
        </DefaultLayout>
    )
};

export default WordleCloneGame;
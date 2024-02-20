import { NavLink} from "react-router-dom";
import DefaultLayout from "hoc/Layout/DefaultLayout";

import { useOnPressedAlphabetKey } from "hooks/onPressedAlphabetKey";

import "./css/WordleCloneGame.css";
import { useState, useRef } from "react";

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
    /// the letters are shown on the screen for current word
    /// only after user presses enter, does the word go into the stored array
    /// that includes the list of checked words for the user
    ///     11.- To handle the keyboard with all the typed letters and their colors
    ///          there can be an array of letters in the order in which they were typed
    ///          that gets checked whenever the keyboard letters are being rendered
    ///          from a preexisting array of all the alphabet letters.

    const [lineCount, setLineCount] = useState(0);
    const [typedWord, setTypedWord] = useState([]); ///Needs to be an array.
    const [typedEntries, setTypedEntries] = useState([])
    const [errorMsg, setErrorMsg] = useState(null);

    const typedWordValidation = (event) => {
        // If the Backspace key is pressed, we remove the last element of the array
        if (event.key === "Backspace"){
            setTypedWord(prevLetters => prevLetters.slice(0, -1));
            return;
        }

        if (typedWord.length < 5) {
            // The State array is destructured to prevent mutation with the limit of
            // 5 letters.
            //! Change this later to be a variable that the user can choose to adjust difficulty
            setTypedWord((prevLetters => [...prevLetters, event.key.toUpperCase()]));
        } else {
            setErrorMsg("Word is too long!");
        }
        return;
    };

    const onSubmitWordHandler = (e) => {
        e.preventDefault();
        if (typedWord.length === 5) {
            // Check logic for correct word here
            //! Change this later to be a variable that the user can choose to adjust difficulty
        } else {
            setErrorMsg("Word is too short!")
        }
    };

    const wordleRef = useRef(null);

    useOnPressedAlphabetKey(wordleRef, typedWordValidation);

    const LetterBoxComponent = ({ letter }) => {
        return (
            <div className="wordle-grid-item">
                <p className="wordle-grid-letter">{letter}</p>
            </div>
        )
    }

    const renderCurrentLineWord = (typedWord) => {
        // Render the first component with values from the array
        const currentWord = typedWord.map((item, index) => (
            <LetterBoxComponent key={index} letter={item} />
            ));

        // Render empty components to reach a total of 5
        //! Change this later to be a variable that the user can choose to adjust difficulty
        const remainingComponentsCount = Math.max(0, 5 - typedWord.length);
        for (let i = 0; i < remainingComponentsCount; i++) {
            currentWord.push(
                <div key={`empty-${i}`} className="wordle-grid-item">
                    <p className="wordle-grid-letter"></p>
                </div>
            );
        }

        return currentWord;
    };

    return (
        <DefaultLayout>
            <div className="nav-top-header">
                <NavLink className={"nav-p-bg"} to='/wordle-clone'>Back</NavLink>
            </div>
            <input
                id="wordle-input"
                ref={wordleRef}
                type="text"
                className="hidden-input"
            >
            </input>
            <div className="wordle-grid-container">
                {renderCurrentLineWord(typedWord)}
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
import { createSlice } from '@reduxjs/toolkit';

export const initializeDeck = () => async (dispatch) => {
    const newDeck = [];
    let counter = 0;
    suits.forEach(suit => {
        ranks.forEach(rank => {
            newDeck.push({ suit, rank, id: counter++ });
        });
    });
    dispatch(setDeck(newDeck));
};

export const shuffleDeck = () => async (dispatch, getState) => {
    const { deck } = getState().caida; // Get the current deck from the Redux state
    const shuffledDeck = [...deck]; // Create a copy of the deck to shuffle
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    dispatch(setDeck(shuffledDeck));
}

const initialState = {
    deck: [],
    playersCards: [],
    tableCards: [],
    startOfRound: true,
};

const suits = ['Coins', 'Cups', 'Swords', 'Clubs'];
const ranks = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];

const caidaSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDeck: (state, action) => {
            state.deck = action.payload
        },
        setTableCards: (state, action) => {
            state.tableCards = action.payload
        },
        toogleStartOfRound: state => {
            state.startOfRound = !state.startOfRound
        },
    },
});

export const { setDeck, setTableCards, toogleStartOfRound } = caidaSlice.actions;
export default caidaSlice.reducer;
import { useDispatch, useSelector } from 'react-redux';
import { setDeck, setTableCards, toogleStartOfRound } from 'features/caidagame';


import "./css/CaidaCardGame.css"

const CaidaTable = () => {
    const dispatch = useDispatch();
    const { deck, tableCards, startOfRound } = useSelector(state => state.caida);

    const serveFirstFourCards = () => {
        const firstFourCards = deck.slice(0, 4); // Get the first four cards from the deck
        dispatch(setTableCards(firstFourCards)); // Set the first four cards to the tableCards state
        dispatch(setDeck(deck.slice(4))); // Remove the first four cards from the deck
        dispatch(toogleStartOfRound());
    }

    const tableRenderer = () => {
        const renderedCards = tableCards.slice(0, 10).map((card, index) => (
            <div key={card.id} className="caida-card-gridtable-item">{card ? card.rank + ' of ' + card.suit : ''}</div>
        ));

        // If the deck has fewer than 10 cards, fill the remaining slots with empty placeholders
        const remainingSlots = Math.max(0, 10 - renderedCards.length);
        for (let i = 0; i < remainingSlots; i++) {
            renderedCards.push(<div key={'empty-' + i} className="caida-card-gridtable-item"></div>);
        }

        return renderedCards;
    }

    return (
        <div>
            <div className="caida-card-gridtable">
                {tableRenderer()}
            </div>
            {startOfRound
            ?<button type='hidden' onClick={serveFirstFourCards}>Serve</button>
            :null}
        </div>
    );
};


export default CaidaTable;
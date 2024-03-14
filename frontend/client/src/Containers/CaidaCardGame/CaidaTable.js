import { useDispatch, useSelector } from 'react-redux';
import { setDeck, setTableCards, toogleStartOfRoundFlag,
    setStartServeNumberOption } from 'features/caidagame';


import "./css/CaidaCardGame.css"

const CaidaTable = () => {
    const dispatch = useDispatch();
    const { deck, tableCards, startOfRoundFlag,
        startServeNumberOption, temporaryPoints } = useSelector(state => state.caida);

    const serveFirstFourCards = (numberServe) => {
        const firstFourCards = deck.slice(0, 4); // Get the first four cards from the deck
        dispatch(setTableCards(firstFourCards)); // Set the first four cards to the tableCards state
        dispatch(setDeck(deck.slice(4))); // Remove the first four cards from the deck
        dispatch(toogleStartOfRoundFlag());
        dispatch(setStartServeNumberOption(numberServe));
        firstRoundServeCheck(firstFourCards, startServeNumberOption);
        console.log("all of this ran");
    }

    const firstRoundServeCheck = (firstFourCards, startServeNumberOption) => {
        let pendingPoints = 0;
        let cardNumberMatchFlag = true;

        switch (startServeNumberOption) {
            case 1:
                for (let i = 0; i < 4; i++) {
                    if (firstFourCards[i].ranks === i+1) {
                        pendingPoints++;
                        cardNumberMatchFlag = false;
                    }
                }
                break;
            case 4:
                for (let i = 0; i < 4; i++) { // 4->0, 3->1, 2->2, 1->3
                    if (firstFourCards[i].ranks === 4-i) {
                        pendingPoints++;
                        cardNumberMatchFlag = false;
                }
            }
            break;
        default:
        }

        if (cardNumberMatchFlag) {

        }
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
            <div>{temporaryPoints}</div>
            {startOfRoundFlag
            ?
                <div>
                    <button onClick={() => serveFirstFourCards(1)}>Serve 1</button>
                    <button onClick={() => serveFirstFourCards(4)}>Serve 4</button>
                </div>
            : null}
            <button onClick={() => dispatch(toogleStartOfRoundFlag())}>restart</button>
            {toogleStartOfRoundFlag}
        </div>
    );
};


export default CaidaTable;
import DefaultLayout from "hoc/Layout/DefaultLayout";
import "./css/CaidaCardGame.css";

import CaidaPlayerIcon from 'Components/CaidaCardGame/CaidaPlayerIcon';

const CaidaCardGame = () => {

    // It has to be something like this, where the middle column belongs to the card grid
    // and item is the player icon with the cards for the player
    // <div class="container">
    //     <div class="item">Column 1</div>
    //     <div class="item middle">Column 2 (Bigger)</div>
    //     <div class="item">Column 3</div>
    // </div>

    return (
        <DefaultLayout>
            <div className="caida-main-wrapper">
                <div className="caida-main-title"><h1>Caida Card Game</h1></div>
                <div className="caida-main-content">
                    <div className="caida-main-gamearea">
                        <div className="caida-player-grid player-item1">
                            <div className="caida-grid-player-item">
                                <CaidaPlayerIcon playerNumber={1}/>
                            </div>
                            <div className="caida-grid-player-item">
                                <CaidaPlayerIcon playerNumber={2}/>
                            </div>
                        </div>
                        <div className="caida-card-grid">
                            <div className="caida-card-grid-item">A1</div>
                            <div className="caida-card-grid-item">A2</div>
                            <div className="caida-card-grid-item">A3</div>
                            <div className="caida-card-grid-item">A4</div>
                            <div className="caida-card-grid-item">B1</div>
                            <div className="caida-card-grid-item">B2</div>
                            <div className="caida-card-grid-item">B3</div>
                            <div className="caida-card-grid-item">B4</div>
                            <div className="caida-card-grid-item">C1</div>
                            <div className="caida-card-grid-item">C2</div>
                            <div className="caida-card-grid-item">C3</div>
                            <div className="caida-card-grid-item">C4</div>
                            <div className="caida-card-grid-item">D1</div>
                            <div className="caida-card-grid-item">D2</div>
                            <div className="caida-card-grid-item">D3</div>
                            <div className="caida-card-grid-item">D4</div>
                        </div>
                        <div className="caida-player-grid player-item1">
                            <div className="caida-grid-player-item">
                                <CaidaPlayerIcon playerNumber={3}/>
                            </div>
                            <div className="caida-grid-player-item">
                                <CaidaPlayerIcon playerNumber={4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default CaidaCardGame;
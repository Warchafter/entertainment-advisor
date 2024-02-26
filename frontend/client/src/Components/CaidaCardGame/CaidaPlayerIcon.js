import "./css/CaidaPlayerIcon.css";

const CaidaPlayerIcon = ({playerNumber}) => {
    return (
        <div className="caida-player-icon-wrapper">
            <div className="caida-player-icon">
                <p>Player {playerNumber}</p>
            </div>
        </div>
    );
};

export default CaidaPlayerIcon;
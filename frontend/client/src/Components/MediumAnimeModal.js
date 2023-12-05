import "./css/MediumAnimeModal.css";

const MediumAnimeModal = ({ data }) => {
    return (
        <div className="mdAnimeModalWrapper">
            <div className="animeModalLayout">
                <div className="animeModalLayoutTop">
                    <div className="mdAnimeModalImgWrapper">
                        <img className="mdAnimeModalImg" src={data.images.jpg.image_url} alt={data.title} />
                    </div>
                </div>
                <div className="animeModalLayoutBottom">
                    <h2 className="mdAnimeModalTitle">{data.title}</h2>
                    <ul>
                        <li>Rank: {data.rank}</li>
                        <li>Duration: {data.duration}</li>
                        <li>Rating: {data.rating}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MediumAnimeModal;
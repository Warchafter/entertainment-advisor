const MediumAnimeModal = ({ data }) => {
    return (
        <div>
            <p>{data.string}</p>
            <img src={data.images.jpg.image_url} alt={data.title} />
            <h2>{data.title}</h2>
            <ul>
                <li>Rank: {data.rank}</li>
                <li>Duration: {data.duration}</li>
                <li>Rating: {data.rating}</li>
            </ul>
        </div>
    );
};

export default MediumAnimeModal;
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from "hoc/Layout/DefaultLayout";
import { getWeeklyAnimeScheduleRelease } from 'features/jikan_anime';
import MediumAnimeModal from 'Components/MediumAnimeModal';


const AnimeTest = () => {
    const dispatch = useDispatch();
    const { weeklyAnimeScheduleData } = useSelector(state => state.jikanAnime);


    const getWeeklyAnimeData = () => {
        dispatch(getWeeklyAnimeScheduleRelease());
    }

    {/* <mdAnimeModal key={index} data={value} id={index} /> */}

    return (
        <DefaultLayout>
        {weeklyAnimeScheduleData ? (
            weeklyAnimeScheduleData.data.map((value, index) => (
                <MediumAnimeModal key={index} data={value} id={index} />
            ))
        ) : (
            <p>Data is not available</p> // Placeholder or alternative rendering when data is not present
        )}
        <button onClick={getWeeklyAnimeData}>Get Data</button>
    </DefaultLayout>
    );
};

export default AnimeTest;
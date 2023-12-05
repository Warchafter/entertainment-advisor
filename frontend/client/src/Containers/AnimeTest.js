import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from "hoc/Layout/DefaultLayout";
import { getWeeklyAnimeScheduleRelease } from 'features/jikan_anime';
import MediumAnimeModal from 'Components/MediumAnimeModal';

import "./css/AnimeTest.css";
import { useState } from 'react';

const AnimeTest = () => {
    const dispatch = useDispatch();
    const { weeklyAnimeScheduleData } = useSelector(state => state.jikanAnime);
    const [scheduleDay, setScheduleDay] = useState();

    const getWeeklyAnimeData = (e) => {
        e.preventDefault()
        setScheduleDay(e.currentTarget.value);
        dispatch(getWeeklyAnimeScheduleRelease({scheduleDay: e.currentTarget.value}));
        // dispatch(getWeeklyAnimeScheduleRelease());
    }

    return (
        <DefaultLayout>
        <div className='dayBarWrapper'>
            <button value="monday" onClick={(e) => getWeeklyAnimeData(e)}>Monday</button>
            <button value="tuesday" onClick={(e) => getWeeklyAnimeData(e)}>Tuesday</button>
            <button value="wednesday" onClick={(e) => getWeeklyAnimeData(e)}>Wednesday</button>
            <button value="thursday" onClick={(e) => getWeeklyAnimeData(e)}>Thursday</button>
            <button value="friday" onClick={(e) => getWeeklyAnimeData(e)}>Friday</button>
            <button value="saturday" onClick={(e) => getWeeklyAnimeData(e)}>Saturday</button>
            <button value="sunday" onClick={(e) => getWeeklyAnimeData(e)}>Sunday</button>
        </div>
        <div className='mdAnimeGridWrapper'>
            {weeklyAnimeScheduleData ? (
                weeklyAnimeScheduleData.data.map((value, index) => (
                    <MediumAnimeModal key={index} data={value} id={index} />
                ))
            ) : (
                <p>Data is not available</p> // Placeholder or alternative rendering when data is not present
            )}
        </div>
        <button onClick={getWeeklyAnimeData}>Get Data</button>
    </DefaultLayout>
    );
};

export default AnimeTest;
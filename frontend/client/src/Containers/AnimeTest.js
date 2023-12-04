import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from "hoc/Layout/DefaultLayout";
import { getWeeklyAnimeScheduleRelease } from 'features/jikan-anime';


const AnimeTest = () => {
    const dispatch = useDispatch();
    const getWeeklyAnimeData = () => {
        dispatch(getWeeklyAnimeScheduleRelease());
    }

    return (
        <DefaultLayout >
            <button onClick={getWeeklyAnimeData}>Get Data</button>
        </DefaultLayout>
    );
};

export default AnimeTest;
import DefaultLayout from "hoc/Layout/DefaultLayout";
import "./css/AnimeWeeklyList.css";

const AnimeWeeklyList = () => {
    return (
        <DefaultLayout>
            <div className="day-range-picker"></div>

            <div className="day-title-wrp">
                <div className="day-title">Test title for the Day</div>
            </div>
            <div className="list-wrp">
                <div className="indv-title-item">1</div>
                <div className="indv-title-item">1</div>
                <div className="indv-title-item">11</div>
                <div className="indv-title-item">1</div>
                <div className="indv-title-item">1</div>
            </div>
        </DefaultLayout>
    )
}

export default AnimeWeeklyList;
import { useSelector, useDispatch } from 'react-redux';
import { themeList } from "shared/themeList";
import { toogleThemePicker, setTheme } from "features/ui";

import './css/ThemePicker.css';

const ThemePicker = () => {
    const dispatch = useDispatch();
    const { themePicked, themePickerToggle } = useSelector(state => state.ui);


    const onClickHandler = (e) => {
        dispatch(setTheme(e.target.getAttribute('value')));
    };

    return (
        <div className="center-wrapper">
            <div className="center-box modal-style1">
                <h3>Theme Picker | Current: {themePicked}</h3>
                {themeList.map((value, index) => {
                    return (
                        <p
                            id={value.themeId}
                            onClick={e => {onClickHandler(e)}}
                            value={value.themeId}>
                            {value.themeName}
                        </p>
                    )
                })}
            </div>
        </div>
    );
};

export default ThemePicker;
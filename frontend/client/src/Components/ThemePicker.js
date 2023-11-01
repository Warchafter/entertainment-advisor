import { useState } from "react";
import { themeList } from "shared/themeList";

const ThemePicker = () => {
    const [themePicked, setThemePicked] = useState();

    const onClickHandler = (e) => {
        setThemePicked(e.target.getAttribute('value'));
    }

    return (
        <>
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
        </>
    );
};

export default ThemePicker;
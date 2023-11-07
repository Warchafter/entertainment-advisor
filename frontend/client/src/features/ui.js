import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // themePicked: 1,
    themePickerToggle: false,
};

const userSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        resetTheme: state => {
            state.themePicked = 1
        },
        setTheme: (state, action) => {
            state.themePicked = action.payload
        },
        toggleThemePicker: state => {
            state.themePickerToggle = !state.themePickerToggle
        },
    },
});

export const { resetTheme, setTheme, toggleThemePicker } = userSlice.actions;
export default userSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getWeeklyAnimeScheduleRelease = createAsyncThunk(
    'jikanAnime',
    async (_, thunkAPI) => {
    try {
        const res = await fetch('/api/jikanAnime/weekly', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }
    } catch(err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});


const initialState = {
    loading: false,
    weeklyAnimeScheduleData: null
};


const jikanAnimeSlice = createSlice({
    name: 'jikanAnime',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeeklyAnimeScheduleRelease.pending, state => {
                state.loading = true;
            })
            .addCase(getWeeklyAnimeScheduleRelease.fulfilled, (state, action) => {
                state.loading = false;
                state.weeklyAnimeScheduleData = action.payload;
            })
            .addCase(getWeeklyAnimeScheduleRelease.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export default jikanAnimeSlice.reducer;
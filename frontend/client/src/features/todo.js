import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const addNewTask = createAsyncThunk(
    'todo/addTask',
    async ({todo_desc}, thunkAPI) => {
        const body = JSON.stringify({todo_desc})
        console.log("body: ",body);

        try {
            const res = await fetch('/api/todo/addTask', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body
            })

            const data = await res.json()

            if (res.status === 201) {
                return data
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    loading: false,
    weeklyAnimeScheduleData: null,
    newTask: null,
    todoList: []
};


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewTask.pending, state => {
                state.loading = true;
            })
            .addCase(addNewTask.fulfilled, (state, action) => {
                state.loading = false;
                state.newFavoriteAnime = action.payload;
            })
            .addCase(addNewTask.rejected, (state, action) => {
                state.loading = false;
            })
    },
});

export default todoSlice.reducer;
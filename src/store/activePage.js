import {createSlice} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const initialPage = {page: 'ContactList'};

const pageSlice = createSlice({
  name: 'page',
  initialState: initialPage,
  reducers: {
    changePage(state, action){
      state.page = action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
  }
});

export default store;
export const pageAction = pageSlice.actions;

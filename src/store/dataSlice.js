import { createSlice } from "@reduxjs/toolkit";
import {findIndexOfUser, getFromLocalStorage, removeDataUtil } from "../util/util";

const data = getFromLocalStorage()|| [];

const dataSlice = createSlice({
  name: 'data',
  initialState: data,
  reducers:{
    addData(state, action){
      state = state.push(action.payload);
    },

    removeData(state,action){
      return removeDataUtil(action.payload,state);
    },

    addToFavourite(state, action){
      const index = findIndexOfUser(action.payload,state);
      state[index].favourite = true;
    },

    removeFromFavourite(state, action){
      const index = findIndexOfUser(action.payload,state);
      state[index].favourite = false
    },

    clearAll(){
      return [];
    }
  }
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;
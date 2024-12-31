import { createSlice } from "@reduxjs/toolkit";

import dataEn from '../data/dataEN.json';
import dataRu from '../data/dataRU.json';

const initialState = {
    language: 'EN',
    data: dataEn
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        isRU: (state) => {
            state.language = 'RU';
            state.data = dataRu;
        }
    }
});

export const {isRU} = languageSlice.actions;
export default languageSlice.reducer;
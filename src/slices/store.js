import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice.js';

export default configureStore({
    reducer: {
      language: languageReducer,
    },
  });
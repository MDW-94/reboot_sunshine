import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Import the reducer

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add the task reducer
  },
});

export default store;

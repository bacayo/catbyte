import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userSlice from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  error: '',
  FeedResponse: [],
};

const DataSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    //product feed list
    fetchFeedRequest(state, action) {
      state.status = action.type;
    },
    fetchFeedSuccess(state, action) {
      state.FeedResponse = action.payload;
      state.status = action.type;
    },
    fetchFeedFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },
  },
});

export const {fetchFeedRequest, fetchFeedSuccess, fetchFeedFailure} =
  DataSlice.actions;

export default DataSlice.reducer;

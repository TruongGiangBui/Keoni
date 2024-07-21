import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
  topic: string;
}

const initialState: BlogState = {
  topic: '',
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setTopic(state, action: PayloadAction<string>) {
      state.topic = action.payload;
    },
  },
});

export const { setTopic } = blogSlice.actions;
export default blogSlice.reducer;

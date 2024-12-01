import { createSlice } from '@reduxjs/toolkit';

const valueSlice = createSlice({
  name: 'value',
  initialState: {
    inputValue: '',
  },
  reducers: {
    setValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setValue } = valueSlice.actions;
export default valueSlice.reducer;

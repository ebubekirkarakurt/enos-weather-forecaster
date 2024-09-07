import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityState {
  value: string;
}

const initialState: CityState = {
  value: '',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getCityName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { getCityName } = citySlice.actions;
export default citySlice.reducer;

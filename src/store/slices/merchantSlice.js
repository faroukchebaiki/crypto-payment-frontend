import { createSlice } from '@reduxjs/toolkit';

const merchantSlice = createSlice({
  name: 'merchant',
  initialState: { wallets: [], apiKey: '' },
  reducers: {
    setWallets(state, action) {
      state.wallets = action.payload;
    },
    setApiKey(state, action) {
      state.apiKey = action.payload;
    },
  },
});

export const { setWallets, setApiKey } = merchantSlice.actions;
export default merchantSlice.reducer;

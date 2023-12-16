import { createAction, createSlice } from "@reduxjs/toolkit";

const initialCustomerState = {
  fullName: "",
  nId: "",
};
const acton = createAction("tester");
console.log("acton-test:", acton(50, 40));
const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    createCustomer: {
      prepare(fullName, nId) {
        return { payload: { fullName, nId } };
      },
      reducer(state, action) {
        console.log("action:888", action);
        state.fullName = action.payload.fullName;
        state.nId = action.payload.nId;
      },
    },
    updateName: function (state, action) {
      state.fullName = action.payload.updatedName;
    },
  },
});
export const { updateName, createCustomer } = customerSlice.actions;
export default customerSlice.reducer;

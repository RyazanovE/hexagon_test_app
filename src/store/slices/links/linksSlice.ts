import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { current } from "@reduxjs/toolkit";

interface IInitialState {
  isCreateLinkModalShown: boolean;
  pagination: {
    offset: number;
    limit: number;
  };
  sortArr: string[];
}

const INITIAL_STATE: IInitialState = {
  isCreateLinkModalShown: false,
  pagination: {
    offset: 0,
    limit: 10,
  },
  sortArr: [],
};

const linksSlice = createSlice({
  name: "linksSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setisCreateLinkModalShown(state, action: PayloadAction<boolean>) {
      state.isCreateLinkModalShown = action.payload;
    },
    setStatisticsPagination(
      state,
      action: PayloadAction<Partial<typeof INITIAL_STATE.pagination>>
    ) {
      for (let key of Object.keys(action.payload)) {
        const newValue = action.payload[key as keyof typeof action.payload];

        Object.assign(
          state.pagination,
          (newValue && { [key]: newValue }) || (newValue === 0 && { [key]: newValue })
        );
      }
    },
    addToSortArr(state, action: PayloadAction<string>) {
      const ind = state.sortArr.indexOf(action.payload);
      const indMin = state.sortArr.indexOf("~" + action.payload);

      if (ind === -1 && indMin === -1) {
        state.sortArr.push(action.payload);
        return;
      }

      indMin !== -1
        ? (state.sortArr[indMin] = state.sortArr[indMin].slice(1))
        : (state.sortArr[ind] = "~" + action.payload);
    },
    resetSortArr(state) {
      state.sortArr = [];
    },
  },
});

//selectors
export const isCreateLinkModalShownSelector = (state: RootState) =>
  state.linksSlice.isCreateLinkModalShown;
export const statisticsPaginationSelector = (state: RootState) => state.linksSlice.pagination;
export const sortArrSelector = (state: RootState) => state.linksSlice.sortArr;

//actions
export const { setisCreateLinkModalShown, setStatisticsPagination, addToSortArr, resetSortArr } =
  linksSlice.actions;

export default linksSlice.reducer;

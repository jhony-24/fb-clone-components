import createAction from "../../../utils/createAction";

export const TYPES = {
  TAB_SEARCH: "TAB_SEARCH",
  TAB_FILTER: "TAB_FILTER",
  FILL_DATA: "FILL_DATA"
};

export default function TabChatReducer(state, action){
  switch (action.type) {
    case TYPES.TAB_SEARCH:
      let { value, filterValue } = action.payload;
      let searching = value.trim().length > 0;
      return {
        ...state,
        searching,
        data: filterValue,
      };
    case TYPES.TAB_FILTER:
      const { selectedFilterOption , data } = action.payload;
      return {
        ...state,
        selectedFilterOption,
        data
      }
    default:
      return state;
  }
};

export const actionSearch = createAction(TYPES.TAB_SEARCH);
export const actionSelectFilter = createAction(TYPES.TAB_FILTER);
export const actionFillData = createAction(TYPES.FILL_DATA);

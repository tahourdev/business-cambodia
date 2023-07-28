export const initialState = {
  isLoading: false,
  data: null,
  isError: null,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

import { request } from "../request";
import { useReducer, useEffect } from "react";

const initialState = {
  isLoading: false,
  data: null,
  isError: null,
};

const reducer = (state, action) => {
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

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const res = await request.get(url);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;

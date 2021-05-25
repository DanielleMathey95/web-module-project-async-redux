// Define initial state
const initialState = {
  picture: {
    message:
      "https://images.dog.ceo/breeds/retriever-golden/n02099601_8429.jpg",
  },
  isFetching: false,
  error: "",
};

// Define reducer with all state management functions

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isFetching: true };
    case "FETCH_SUCCESS":
      return { ...state, dog: action.payload, isFetching: false };
    case "FETCH_FAILURE":
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
};

import CLIENT_ACTION_TYPES from "../actionTypes/Client";

const initialState = {
  client_info: {},
  client_waiting: true
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_ACTION_TYPES.CLIENT_INFO:
      return {
        ...state,
        client_info: action.payload
      };
    default:
      return state;
  }
};

export default clientReducer;

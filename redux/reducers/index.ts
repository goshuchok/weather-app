const initialState = {
  data: {},
};

type ActionType = {
  type: 'SET_WEATHER';
  payload: any;
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_WEATHER': {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

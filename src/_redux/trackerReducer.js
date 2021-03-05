const START_STATE = "START_STATE";

let initialState = {
  itemList: {
    0: {
      id: 0,
      isActive: false,
      name: "Empty",
      time: "11:22:33",
    },
    1: {
      id: 1,
      isActive: false,
      name: "Empty",
      time: "11:22:33",
    },
    2: {
      id: 2,
      isActive: false,
      name: "Empty",
      time: "11:22:33",
    },
  },
};

const trackerReducer = (state = initialState, action) => {
  let newObj = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case START_STATE:
      let ident = action.id;
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [action.id]: {
            ...state.itemList[ident],
            isActive: action.condition,
          },
        },
      };

    default:
      return state;
  }
};

export const setState = (condition, id) => {
  return {
    type: START_STATE,
    condition,
    id,
  };
};

export default trackerReducer;

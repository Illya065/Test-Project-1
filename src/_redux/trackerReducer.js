const START_STATE = "START_STATE";
const ADD_NAME = "ADD_NAME";
const DELETE_ITEM = "DELETE_ITEM";

let initialState = {
  itemList: {
    0: {
      id: 0,
      isActive: false,
      name: "Empty",
      time: "11:22:33",
      delete: false,
    },
  },

  text: null,
};

const trackerReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
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

    case DELETE_ITEM:
      let identificator = action.id;
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [action.id]: {
            ...state.itemList[identificator],
            delete: action.del,
          },
        },
      };

    case ADD_NAME:
      let len = Object.keys(state.itemList).length;
      let block = {
        isActive: false,
        name: action.text,
        time: "00:00:00",
        id: len,
        delete: false,
      };
      stateCopy.itemList[len] = block;
      return stateCopy;

    default:
      return state;
  }
};

export const addName = (text) => {
  return {
    type: ADD_NAME,
    text,
  };
};

export const setState = (condition, id) => {
  return {
    type: START_STATE,
    condition,
    id,
  };
};

export const deleteItem = (del, id) => {
  return {
    type: DELETE_ITEM,
    del,
    id,
  };
};

export default trackerReducer;

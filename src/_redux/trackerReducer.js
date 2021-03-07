const START_STATE = "START_STATE";
const ADD_NAME = "ADD_NAME";
const DELETE_ITEM = "DELETE_ITEM";
const SET_TIME = "SET_TIME";

let initialState = {
  itemList: {},
  data: {},
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
      let block = {
        isActive: true,
        name: action.text,
        sec: 0,
        minute: 0,
        hour: 0,
        id: Object.keys(state.itemList).length,
        delete: false,
      };
      stateCopy.itemList[Object.keys(state.itemList).length] = block;
      return stateCopy;

    case SET_TIME:
      let setTimeId = action.id;
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [action.id]: {
            ...state.itemList[setTimeId],
            sec: action.sec,
            minute: action.min,
            hour: action.hour,
          },
        },
      };

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

export const timeToState = (sec, min, hour, id) => {
  return {
    type: SET_TIME,
    sec,
    min,
    hour,
    id,
  };
};

export default trackerReducer;

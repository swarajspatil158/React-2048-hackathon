const initialBoard = [];

const gameReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case "INC_NUMBER":
      return state + 1;
    default:
      return state;
  }
};

export default gameReducer;

const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("Current State => ", currentState);
  console.log("Action Dispatched => ", action);
  next(action);
  const updatedState = store.getState();
  console.log("Updated State => ", updatedState);
};

export default logger;

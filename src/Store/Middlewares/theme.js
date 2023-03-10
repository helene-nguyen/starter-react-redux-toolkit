export const themeMiddleware = (store) => (next) => (action) => {
  try {
    // console.log('--HERE MIDDLEWARE')
    // action => here, get each action made
    // next => action sent to the reducer
    // store => get current store .getState(), .dispatch (if needed)
    return next(action);
  } catch (err) {
    throw err;
  }
};

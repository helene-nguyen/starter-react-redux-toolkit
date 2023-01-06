export const themeMiddleware = (store) => (next) => (action) => {
  try {
    // action => here, get each action made
    // next => action sent to the reducer
    // store => get current store .getState(), .dispatch (if needed)
    const currentTheme = store.getState().theme;
    console.log('currentTheme: ', currentTheme);

    return next(action);
  } catch (err) {
    throw err;
  }
};

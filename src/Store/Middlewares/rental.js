import { useCreateRentalMutation } from '../../Store/Api/rentolio.js';

export const rentalMiddleware = (store) => (next) => (action) => {
  try {
    // console.log('--HERE MIDDLEWARE')
    // action => here, get each action made
    // next => action sent to the reducer
    // store => get current store .getState(), .dispatch (if needed)
    console.log('-------------- middleware rental', action.payload);

    return next(action);
  } catch (err) {
    throw err.message;
  }
};

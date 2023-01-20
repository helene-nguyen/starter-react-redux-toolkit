//& Import modules
import './Articles.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner.jsx';

import { useGetAllJSONQuery } from '../../Store/Api';
import { useGetAllRentalsQuery, useCreateRentalMutation } from '../../Store/Api/rentolio.js';
import { handleRentalMsg } from '../../Store/Reducers/Rental';

//& Component
const Articles = () => {
  //*-------------YUMI
  const api = useSelector((state) => state.apiTest);
  const [displayMsg, setDisplayMsg] = useState('');
  // console.log('api: ', api);
  const rentals = useGetAllRentalsQuery().data;
  const loading = useGetAllRentalsQuery().isLoading;
  let [createRental] = useCreateRentalMutation();

  const rentalMsg = useSelector((state) => state.rental.message);

  const dispatch = useDispatch();

  const test = async (event) => {
    event.preventDefault();
    console.log('-----------------------------CLICKED SUBMIT');

    //^ VERSION NO CONTROL
    try {
      const data = new FormData(event.target);

      const payload = {
        vehicle_id: data.get('vehicle_id'),
        option: data.get('option'),
      };

      const result = await createRental(payload).unwrap();
      setDisplayMsg(result);
      //unwrap() let you immediately access the result of a mutation, optionnal
      //console.log('fulfilled', payload);
    } catch (err) {
      setDisplayMsg(err.data.message);
    }
  };

  //*-------------FREDO
  const { data, isSuccess: isSuccessA, isLoading, isError, isFetching, isUninitialized } = useGetAllJSONQuery();
  /**
   * @deprecated will be removed in the next version
   * please use the `isLoading`, `isFetching`, `isSuccess`, `isError`
   * and `isUninitialized` flags instead
   */
  // console.log('dataFredo------------------:', data);
  // console.log('isSuccess: ', isSuccess);
  // console.log('isLoading: ', isLoading);
  // console.log('isError: ', isError);
  // console.log('isFetching: ', isFetching);
  // console.log('isUninitialized: ', isUninitialized);

  return (
    <section className="articles">
      <h1>Articles</h1>
      <p>Playground</p>

      <div className="box">
        <section className="yumi box-test">
          <h2>Yumi</h2>

          {/* Render data, if is loading, display Spinner, if no data, display "no data available" */}
          {loading ? (
            <Spinner />
          ) : rentals ? (
            rentals.map((rental) => (
              <article key={rental.id} className="article">
                <h3>Rent at : {rental.rent_at}</h3>
              </article>
            ))
          ) : (
            'No data available...'
          )}

          <form method="post" onSubmit={test}>
            <input type="number" min="1" max="3" defaultValue="1" name="vehicle_id" placeholder="Vehicle Id"></input>
            <input type="number" min="1" max="3" defaultValue="1" name="option" placeholder="option"></input>
            <button type="submit">Submit</button>
          </form>

          <h1>Message : {displayMsg}</h1>
        </section>

        <section className="fredo box-test">
          <h2>Fredo</h2>

          {/* {data &&
            data.map((article) => (
              <article key={article.id} className="article">
                <h3>{article.title}</h3>
              </article>
            ))} */}
        </section>
      </div>
    </section>
  );
};

export default Articles;

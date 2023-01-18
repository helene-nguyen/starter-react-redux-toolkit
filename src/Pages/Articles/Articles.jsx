//& Import modules
import './Articles.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner.jsx';

import { useGetAllRentalsQuery } from '../../Store/Api';
import { useGetAllRentals2Query, useCreateRentalMutation } from '../../Store/Api/rentolio.js';
import { handleRentalMsg } from '../../Store/Reducers/Rental';

//& Component
const Articles = () => {
  //*-------------YUMI
  // const api = useSelector((state)=> state.apiTest)
  const data2 = useGetAllRentals2Query().data;
  const loading = useGetAllRentals2Query().isLoading;
  let [createRental] = useCreateRentalMutation();

  const rentalMsg = useSelector((state) => state.rental.message);
  console.log('rental: ', rentalMsg);

  const dispatch = useDispatch();
  
  const test = (event) => {
    event.preventDefault();
    
    //^ VERSION NO CONTROL
    //   try {
      const data = new FormData(event.target);
      
      const payload = {
        vehicle_id: data.get('vehicle_id'),
        option: data.get('option'),
      };
      
      //     const result = await createRental(payload).unwrap();
      //     console.log('result: ', result);
      //     //unwrap() let you immediately access the result of a mutation, optionnal
      //     //console.log('fulfilled', payload);
      //   } catch (err) {
        //     const errorMsg = err.data.message;
        //     console.error('Rejected :', errorMsg);
        // }
        
        //^ VERSION CONTROLLED
        dispatch(handleRentalMsg(payload));
  };


  //*-------------FREDO
  const { data, isSuccess: isSuccessA, isLoading, isError, isFetching, isUninitialized } = useGetAllRentalsQuery();
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
          {loading ? (
            <Spinner />
          ) : (
            data2 &&
            data2.map((article) => (
              <article key={article.id} className="article">
                <h3>Rent at : {article.rent_at}</h3>
              </article>
            ))
          )}

          <form method="post" onSubmit={test}>
            <input type="number" min="1" max="3" defaultValue="1" name="vehicle_id" placeholder="Vehicle Id"></input>
            <input type="number" min="1" max="3" defaultValue="1" name="option" placeholder="option"></input>
            <button type="submit">Submit</button>
          </form>

          <h1>Message : {rentalMsg}</h1>
        </section>

        <section className="fredo box-test">
          <h2>Fredo</h2>

          {data &&
            data.map((article) => (
              <article key={article.id} className="article">
                <h3>{article.title}</h3>
              </article>
            ))}
        </section>
      </div>
    </section>
  );
};

export default Articles;

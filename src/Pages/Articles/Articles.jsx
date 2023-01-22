//& Import modules
import './Articles.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPayload } from '../../Hooks/useGetPayload';
import { getPayload } from '../../Store/Reducers/Payload';
import Spinner from '../../Components/Spinner/Spinner.jsx';

import { useGetAllJSONQuery } from '../../Store/Api';
import {useGetAllCategoriesQuery,  useSignInMutation, useGetAllRentalsQuery, useCreateRentalMutation } from '../../Store/Api/rentolio.js';

//& Component
const Articles = () => {
  //*-------------YUMI
  // const api = useSelector((state) => state.apiTest);
  const [displayMsg, setDisplayMsg] = useState('');
  const [displayMsgConnexion, setDisplayMsgConnexion] = useState('');

  // Auto refetch data when creating rental, thanks to tagTypes
  const rentals = useGetAllRentalsQuery().data;
  const categories = useGetAllCategoriesQuery().data;
  const loading = useGetAllRentalsQuery().isLoading;
  let [createRental] = useCreateRentalMutation();
  const [signIn] = useSignInMutation();

  //for method 1
  let body1 = {};

  const body3 = useSelector((state) => state.payload.body);

  const dispatch = useDispatch();

  //^REGISTER USER
  const doSignin = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      console.log('data: ', formData);

      //& Method 0 - get payload by key and affect value one by one
      // const payload = {
      //   name: formData.get('name'),
      //   password: formData.get('password'),
      // };

      //& Method 1 - Without custom hook / without redux
      for (const elem of formData.entries()) {
        body1[`${elem[0]}`] = elem[1];
      }
      console.log('METHOD 1', body1);

      //& Method 2 - Custom Hook
      const [body] = useGetPayload(event.target);
      console.log('METHOD 2', body);

      //& Method 3 - Redux
      //cannot put event.target because not serializable =>
      for (const elem of formData.entries()) {
        dispatch(getPayload(elem));
      }

      //~------------------------------ Signin
      const result = await signIn(body).unwrap();
   
      result && setDisplayMsg('User connected');
    } catch (err) {
      setDisplayMsg(err.data.message);
    }
  };
  // console.log('METHOD 3: ', body3);

  //^CREATE RENTAL
  const doCreateRental = async (event) => {
    event.preventDefault();
    //^ VERSION NO CONTROL
    //display all rentals
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
  // const { data, isSuccess: isSuccessA, isLoading, isError, isFetching, isUninitialized } = useGetAllJSONQuery();
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
          <section className="articles__box-test">
            <h2>Display</h2>

            {/* {loading ? (
              <Spinner />
            ) : rentals ? (
              rentals.map((rental) => (
                <article key={rental.id} className="article">
                  <h3>Rent at : {rental.rent_at}</h3>
                </article>
              ))
            ) : (
              'No data available...'
            )} */}
            {loading ? (
              <Spinner />
            ) : categories ? (
              categories.map((category) => (
                <article key={category.id} className="article">
                  <h3>Category : {category.name}</h3>
                </article>
              ))
            ) : (
              'No data available...'
            )}

            <form method="post" onSubmit={doCreateRental}>
              <input type="number" min="1" max="3" defaultValue="1" name="vehicle_id" placeholder="Vehicle Id"></input>
              <input type="number" min="1" max="3" defaultValue="1" name="option" placeholder="option"></input>

              <button type="submit">Submit</button>
            </form>

            <h1>Message : {displayMsg}</h1>
          </section>

          <section className="articles__box-test">
            <h2>Forms connexion</h2>

            <h4>WELCOME {body3.name} !</h4>
            <form method="post" onSubmit={doSignin}>
              <input type="text" name="email" defaultValue='yumedo@survivor.com' placeholder="email" autoComplete="username"></input>
              <input type="password" name="password" defaultValue='N6y$Ozddzt=1aa' placeholder="password" autoComplete="current-password"></input>

              <button type="submit">Submit</button>
            </form>

            <h1>Message : {displayMsgConnexion}</h1>
          </section>

          <section className="articles__box-test">
            <h2>Try to create something</h2>

            <form method="post" onSubmit={doSignin}>
              <input type="text" name="title" placeholder="title" autoComplete="username"></input>
              <input type="text" name="abstract" placeholder="abstract" ></input>
              <input type="text" name="content" placeholder="content" ></input>

              <button type="submit">Submit</button>
            </form>

            <h1>Message : {displayMsgConnexion}</h1>
          </section>
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

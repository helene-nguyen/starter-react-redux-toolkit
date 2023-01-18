//& Imports Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Since React 18, we use  / Import from react-dom/client !
import { Provider } from 'react-redux';
import { store } from './Store';

//& Import ApiProvider
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './Store/Api';

//& Import Component
import { App } from './App/App';

//& Imports SCSS
import './Assets/sass/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);

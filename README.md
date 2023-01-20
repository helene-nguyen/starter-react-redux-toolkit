# React Playground

React - Redux Toolkit - RTK Query

## API Slices : Redux integration

Internally, _createApi_ will call the Redux Toolkit _createSlice_ API to generate a slice reducer and corresponding action creators with the appropriate logic for caching fetched data.

## Folder structure


```sh
├── package.json
├── public
|  ├── index.html
|  ├── manifest.json
|  └── robots.txt
├── README.md
└── src
   ├── App
   |  ├── App.jsx
   |  └── App.scss
   ├── Assets
   |  ├── fonts
   |  └── sass
   |     ├── index.scss
   |     ├── _mixins.scss
   |     ├── _reset.scss
   |     ├── _themes.scss
   |     └── _vars.scss
   ├── Components
   |  ├── index.jsx
   |  ├── Logo
   |  |  ├── Logo.jsx
   |  |  └── Logo.scss
   |  ├── Navbar
   |  |  ├── Navbar.jsx
   |  |  └── Navbar.scss
   |  ├── Spinner
   |  |  ├── Spinner.jsx
   |  |  ├── Spinner.scss
   |  |  └── Spinner.svg
   |  └── ThemeBtn
   |     ├── ThemeBtn.jsx
   |     └── ThemeBtn.scss
   ├── Hooks
   |  ├── useFetch.jsx
   |  ├── usePath.jsx
   |  └── useTheme.jsx
   ├── index.js
   ├── Layout
   |  ├── Footer
   |  |  ├── Footer.jsx
   |  |  └── Footer.scss
   |  ├── Header
   |  |  ├── Header.jsx
   |  |  └── Header.scss
   |  ├── Layout.jsx
   |  └── Layout.scss
   ├── Pages
   |  ├── Article
   |  |  ├── Article.jsx
   |  |  └── Article.scss
   |  ├── Articles
   |  |  ├── Articles.jsx
   |  |  └── Articles.scss
   |  ├── Home
   |  |  ├── Home.jsx
   |  |  └── Home.scss
   |  ├── index.jsx
   |  └── NoPage
   |     ├── NoPage.jsx
   |     └── NoPage.scss
   ├── Routes
   |  ├── ArticlesRoutes.jsx
   |  └── Routes.jsx
   └── Store
      ├── Api
      |  ├── index.js
      |  └── rentolio.js
      ├── index.js
      ├── Middlewares
      |  ├── index.js
      |  ├── rental.js
      |  └── theme.js
      ├── Reducers
      |  ├── index.js
      |  ├── Rental
      |  |  └── index.js
      |  └── Theme
      |     └── index.js
      └── __fake_data__
``` 


```js
//Notes 


/*
---------------
ETAPE 1 - UTILISATION DE CREATEAPI
---------------
ETAPE 2 - EXPORT dans le cas des requêtes use<nomEndpoint>Query - dans le cas des mutations use<nomEndpoint>Mutation

The hooks are automatically named based on a standard convention:

- use, the normal prefix for any React hook
- The name of the endpoint, capitalized
- The type of the endpoint, Query or Mutation

In this case, our endpoint is getPosts and it's a query endpoint, so the generated hook is useGetPostsQuery.


---------------
ETAPE 3 - METTRE EN PLACE L'APIPROVIDER
---------------
ETAPE 4 - IMPORTER DS LE COMPONENT LE USEQUERY
---------------
ETAPE 5 - ADD REDUCERPATH DANS LE STORE ?
Uncaught Error: Warning: Middleware for RTK-Query API at reducerPath "api" has not been added to the store.
exemple: 
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

-- Questions :

- Comment configurer headers + renvoi jwt ?
- Comment gérer avec le middwleware ?

*/

``` 

---

## Sources

https://redux-toolkit.js.org/rtk-query/api/created-api/redux-integration

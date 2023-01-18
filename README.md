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

---

## Sources

https://redux-toolkit.js.org/rtk-query/api/created-api/redux-integration

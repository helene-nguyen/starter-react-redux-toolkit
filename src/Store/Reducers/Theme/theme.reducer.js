const initialState = {
  default: 'dark',
};

const toggleTheme = (state) => {
  state.default === 'dark' ? (state.default = 'light') : (state.default = 'dark');
};

export const themeReducer = {
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme,
  },
};

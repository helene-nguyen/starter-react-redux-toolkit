const initialState = {
  default: 'dark',
};

const toggleTheme = (state) => {
  state.default = state.default === 'dark' ? 'light' : 'dark';
};

export const themeReducer = {
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme,
  },
};

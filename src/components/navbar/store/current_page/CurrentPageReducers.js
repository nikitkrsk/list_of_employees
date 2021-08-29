import * as constants from "./CurrentPageConstants";

const initialState = {
  currentPage: 'Home',
};

export const changeCurrentPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.SET_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};


const initialMenuState = {
  menuOpen: false,
};

export const changeMenuOpen = (state = initialMenuState, action = {}) => {
  switch (action.type) {
    case constants.SET_MENU_OPEN:
      return { ...state, menuOpen: action.payload };
    default:
      return state;
  }
};



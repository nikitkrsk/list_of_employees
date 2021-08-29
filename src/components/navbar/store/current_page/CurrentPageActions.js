import * as constants from "./CurrentPageConstants";

export const setCurrentPage = (string) => ({
  type: constants.SET_PAGE,
  payload: string
});


export const setMenuOpen = (bool) => ({
  type: constants.SET_MENU_OPEN,
  payload: bool
});


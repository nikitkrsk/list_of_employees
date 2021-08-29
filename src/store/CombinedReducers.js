import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

// NAVBAR 
import { changeTheme } from "../components/navbar/store/choose_theme/ChooseThemeReducers";
import { changeCurrentPage, changeMenuOpen } from "../components/navbar/store/current_page/CurrentPageReducers"
// NOTIFICATIONS
import { showNotification } from "../components/notifications/store/notificationReducers"


const persistConfig = {
  key: "list_of_employess",
  whitelist: [
    "changeTheme",
    "changeCurrentPage",
  ],
  storage,
};

const rootReducer = combineReducers({
  changeTheme,
  changeCurrentPage,
  showNotification,
  changeMenuOpen
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };

import React, { useEffect, useCallback } from "react";
import AppHeader from "../Headers/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngridientDetails } from "../IngidientsDetails/IngridientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/ingridients";
import { closeIngridientModal } from "../../services/actions/details";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { closeOrderModal } from "../../services/actions/order";
import Register from "../../pages/Register/Register";
import Forgot from "../../pages/Forgot/Forgot";
import Reset from '../../pages/Reset/Reset'
import Login from "../../pages/Login/Login";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { checkUser } from "../../services/actions/user";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";



function App() {
  const isLoading = useSelector((store) => store.burgerIngridient.isLoading);
  const hasError = useSelector((store) => store.burgerIngridient.hasError);
  const error = useSelector((store) => store.burgerIngridient.error);
  const refreshToken = localStorage.getItem('refreshToken')
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;

  const orderModalOpen = useSelector((store) => store.order.modal);

  useEffect(() => {
    dispatch(getBurgerIngredients());
    if(refreshToken){
    dispatch(checkUser())
    };
  }, [dispatch]);

  const closeDetailsModal = useCallback(() => {
    dispatch(closeIngridientModal());
    history.goBack();
  },[dispatch]);

  const getCloseOrderModal = useCallback(() => {
    dispatch(closeOrderModal());
  },[dispatch]);



  return (
    <div>
      <AppHeader />
      <Switch location={background || location}>
        <Route path='/' exact>
      <main className={appStyle.main}>
        {isLoading && "Загрузка"}
        {hasError && `Упс, что-то пошло не так, произошла ошибка ${error}`}
        {!isLoading && !hasError && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
      </main>
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/forgot" exact>
          <Forgot />
        </Route>
        <Route path="/reset" exact>
          <Reset />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <ProtectedRoute path="/profile" exact>
          <Profile/>
        </ProtectedRoute>
      </Switch>
      <Route path='/ingredients/:id'>
        <DetailsPage/>
      </Route>
      {background &&(
        <Route path='/ingredients/:id'>
        <Modal close={closeDetailsModal} text={'Детали ингридиента'}>
          <IngridientDetails/>
        </Modal>
      </Route>
      )}
      {orderModalOpen && (
        <Modal close={getCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
export { App };

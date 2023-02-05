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
import { Route, Switch } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";

function App() {
  const isLoading = useSelector((store) => store.burgerIngridient.isLoading);
  const hasError = useSelector((store) => store.burgerIngridient.hasError);
  const error = useSelector((store) => store.burgerIngridient.error);
  const dispatch = useDispatch();
  const orderModalOpen = useSelector((store) => store.order.modal);

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const closeDetailsModal = useCallback(() => {
    dispatch(closeIngridientModal());
  },[dispatch]);

  const getCloseOrderModal = useCallback(() => {
    dispatch(closeOrderModal());
  },[dispatch]);

  const openIngridientModal = useSelector((store) => store.details.openModal);

  return (
    <div>
      <AppHeader />
      <Switch>
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
      {openIngridientModal && (
        <Modal text="Детали ингредиента" close={closeDetailsModal}>
          <IngridientDetails data={openIngridientModal} />
        </Modal>
      )}
      {orderModalOpen && (
        <Modal close={getCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
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
        <Route path="/profile" exact>
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}
export { App };

import React, { useEffect, useState } from "react";
import AppHeader from "../Headers/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngridientDetails } from "../IngidientsDetails/IngridientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import {getBurgerIngredients} from '../../services/actions/ingridients'
import {closeIngridientModal} from '../../services/actions/details'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  const [orderModal, setOrderModal] = useState(false);
  const isLoading = useSelector(store=>store.burgerIngridient.isLoading);
  const hasError = useSelector(store=>store.burgerIngridient.hasError);
  const error = useSelector(store=>store.burgerIngridient.error)
  const data = useSelector(store=>store.burgerIngridient.ingridients)
  const dispatch = useDispatch();
  // const [data, setData] = useState({
  //   isLoading: false,
  //   hasError: false,
  //   data: [],
  //   error: ''
  // });

  useEffect(() => {
    // setData({ ...data, hasError: false, isLoading: true, error: "" });
    // getData()
    //   .then((res) => {
    //     setData({ ...data, data: res.data, isLoading: false, error: "" });
    //   })
    //   .catch((err) => {
    //     setData({ ...data, hasError: true, isLoading: false, error: err });

    //   });
      dispatch(getBurgerIngredients())
  },[dispatch]);

  const closePopup = () => {
    // setIngridientModal(false);
    setOrderModal(false);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };

  // const openIngridientModal = () => {
  //   setIngridientModal(true)
  // }

  const closeDetailsModal = () => {
    dispatch(closeIngridientModal())
  }



  const openIngridientModal = useSelector(store=>store.details.openModal)

  return (
    <div>
      <AppHeader />
      <main className={appStyle.main}>
        {isLoading === true && "Загрузка"}
        {hasError && `Упс, что-то пошло не так, произошла ошибка ${error}`}
        {!isLoading && !hasError && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor open={openOrderModal}/>
          </DndProvider>
        )}
      </main>
      {openIngridientModal && (
        <Modal  text="Детали ингредиента" close={closeDetailsModal}>
          <IngridientDetails data={openIngridientModal} />
        </Modal>
      )}
      {orderModal && (
        <Modal open={openOrderModal} close={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
export { App };

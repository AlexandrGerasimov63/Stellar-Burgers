import React, { useEffect, useState } from "react";
import Header from "../Headers/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngridientDetails } from "../IngidientsDetails/IngridientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { getData, error } from "../../utils/api";

function App() {
  const [IngridientModal, setIngridientModal] = useState(false);
  const [OrderModal, setOrderModal] = useState(false);

  const [data, setData] = useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  useEffect(() => {
    setData({ ...data, hasError: false, isLoading: true });
    getData()
      .then((res) => {
        setData({ ...data, data: res.data, isLoading: false });
      })
      .catch((err) => {
        setData({ ...data, hasError: true, isLoading: false });
      });
  },[]);

  const closePopup = () => {
    setIngridientModal(false);
    setOrderModal(false);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };

  const openIngridientModal = () => {
    setIngridientModal(true)
  }

  return (
    <div>
      <Header />
      <main className={appStyle.main}>
        {data.isLoading === true && "Загрузка"}
        {data.hasError && `Упс, что-то пошло не так, произошла ошибка ${error}`}
        {!data.isLoading && !data.hasError && (
          <>
            <BurgerIngredients
              data={data.data}
              open={() => openIngridientModal()}
            />
            <BurgerConstructor open={openOrderModal} />
          </>
        )}
      </main>
      {IngridientModal && (
        <Modal open={openIngridientModal} text="Детали ингредиента" close={closePopup}>
          <IngridientDetails data={data.data[0]} />
        </Modal>
      )}
      {OrderModal && (
        <Modal open={openOrderModal} close={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
export { App };

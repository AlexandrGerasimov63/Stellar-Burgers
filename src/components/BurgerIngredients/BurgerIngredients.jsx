import React from "react";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngridientStyle from "./BurgerIngridienst.module.css";
import cardStyle from "./Card.module.css";
import PropTypes from 'prop-types'


export default function BurgerIngredients(props) {
  function IngredientsSection(props) {
    return <section className={props.sectionStyle}>{props.children}</section>;
  }
  function IngredientsTitle(props) {
    return <h1 className={props.textStyle}>{props.text}</h1>;
  }

  const bunRef = React.useRef(null);
  const mainRef = React.useRef(null);
  const sauceRef = React.useRef(null);

  function IngredientsTabs(props) {
    const [current, setCurrent] = React.useState("bun");
    const scrollTab = (e, tab) => {
      setCurrent(e);
      tab.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className={props.tabStyle}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => scrollTab(e, bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => scrollTab(e, sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => scrollTab(e, mainRef)}
        >
          Начинки
        </Tab>
      </div>
    );
  }

  function IngredientWrapper(props) {
    return (
      <article>
        <h2
          ref={props.tabRef}
          className={`${burgerIngridientStyle.subtitle} text text_type_main-medium pb-2 pt-5`}
        >
          {props.text}
        </h2>
        <ul className={`${burgerIngridientStyle.itemList}`}>
          {props.children}
        </ul>
      </article>
    );
  }

  function CardMap({ data, open }) {
    return data.map((ingr, index) => {
      return (
        <li
          key={ingr._id}
          onClick={open}
          className={burgerIngridientStyle.item}
        >
          <Card image={ingr.image} name={ingr.name} price={ingr.price} />
        </li>
      );
    });
  }
  const getArr = props.data;

  const bunArr = getArr.filter((item) => item.type === "bun");
  const mainArr = getArr.filter((item) => item.type === "main");
  const sauceArr = getArr.filter((item) => item.type === "sauce");

  function Card(props) {
    return (
      <div className={cardStyle.cardWrapper}>
        <img
          src={props.image}
          alt={props.name}
          className={cardStyle.cardImage}
        />
        <div className={`${cardStyle.cardPrice} pt-1 pb-1`}>
          <p className="text text_type_digits-default mr-2">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className={`${cardStyle.cardName} text text_type_main-default pb-10 pt-1`}
        >
          {props.name}
        </p>
        <Counter count={1} size="default" />
      </div>
    );
  }
  return (
    <IngredientsSection sectionStyle={`${burgerIngridientStyle.section} mt-10`}>
      <IngredientsTitle
        text="Соберите бургер"
        textStyle={`${burgerIngridientStyle.title} text text_type_main-large mb-5`}
      />
      <IngredientsTabs tabStyle={`${burgerIngridientStyle.tab} mb-5`} />
      <div className={`${burgerIngridientStyle.ingridientsList}`}>
        <IngredientWrapper text="Булки" tabRef={bunRef}>
          <CardMap data={bunArr} open={props.open} />
        </IngredientWrapper>
        <IngredientWrapper text="Соусы" tabRef={sauceRef}>
          <CardMap data={sauceArr} open={props.open} />
        </IngredientWrapper>
        <IngredientWrapper text="Начинки" tabRef={mainRef}>
          <CardMap data={mainArr} open={props.open} />
        </IngredientWrapper>
      </div>
    </IngredientsSection>
  );
}

BurgerIngredients.propTypes = {
  sectionStyle: PropTypes.string,
  children: PropTypes.node,
  textStyle: PropTypes.string,
  tabStyle: PropTypes.string,
  tabRef : PropTypes.func,
  data: PropTypes.array,
  open: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
}

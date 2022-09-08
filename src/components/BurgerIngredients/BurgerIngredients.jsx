import React, {useEffect} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngridientStyle from "./BurgerIngridienst.module.css";
// import PropTypes from 'prop-types'
// import { ingredientType } from "../../utils/types";
import { IngridientsSection } from "./IngridientSection/IngridientsSection";
import { IngridientsTitle } from "./IngridientsTitle/IngridientsTitle";
import { CardMap } from "./CardMap/CardMap";
import { IngredientWrapper } from "./IngridientWrapper/IngridientWrapper";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export default function BurgerIngredients() {

  const getArr  = useSelector((store) => store.burgerIngridient.ingridients);

  const [current, setCurrent] = React.useState("bun");


  const [bunRef, bunView] = useInView({
    threshold: 1,
  });
  const [sauceRef, sauceView] = useInView({
    threshold: 1,

  });
  const [mainRef, mainView] = useInView({
    threshold: 1,
  });

  const scrollTab = (e) => {
    const section = document.getElementById(e);
		section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleIngredientScroll = () => {
    switch (true) {
      case bunView:
        setCurrent("bun");
        break;
      case sauceView:
        setCurrent("sauce");
        break;
      case mainView:
        setCurrent("main");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
		handleIngredientScroll();
	}, [bunView, sauceView, mainView]);

  function IngredientsTabs(props) {
    return (
      <div className={props.tabStyle}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => scrollTab(e)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => scrollTab(e)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => scrollTab(e)}
        >
          Начинки
        </Tab>
      </div>
    );
  }



  const bunArr = getArr.filter((item) => item.type === "bun");
  const mainArr = getArr.filter((item) => item.type === "main");
  const sauceArr = getArr.filter((item) => item.type === "sauce");

  return (
    <IngridientsSection sectionStyle={`${burgerIngridientStyle.section} mt-10`}>
      <IngridientsTitle
        text="Соберите бургер"
        textStyle={`${burgerIngridientStyle.title} text text_type_main-large mb-5`}
      />
      <IngredientsTabs tabStyle={`${burgerIngridientStyle.tab} mb-5`} />
      <div className={`${burgerIngridientStyle.ingridientsList}`}>
        <IngredientWrapper text="Булки" tabRef={bunRef} type='bun'>
          <CardMap data={bunArr} />
        </IngredientWrapper>
        <IngredientWrapper text="Соусы" tabRef={sauceRef} type='sauce'>
          <CardMap data={sauceArr} />
        </IngredientWrapper>
        <IngredientWrapper text="Начинки" tabRef={mainRef} type='main'>
          <CardMap data={mainArr} />
        </IngredientWrapper>
      </div>
    </IngridientsSection>
  );
}

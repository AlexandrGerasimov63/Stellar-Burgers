import PropTypes from "prop-types";

const ingredientType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string
});




export {ingredientType}

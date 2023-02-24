import PropTypes from "prop-types";

const ingredientType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string
});

const DetailsType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  _id:PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
})


export {ingredientType, DetailsType}

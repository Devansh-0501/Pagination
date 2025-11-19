const ProductComponent = ({ image, title }) => {
  return (
    <div className="container">
      <img src={image} alt="image" />
      <span>{title}</span>
    </div>
  );
};

export default ProductComponent;

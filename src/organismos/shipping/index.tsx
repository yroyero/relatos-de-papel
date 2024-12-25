const ShippingForm: React.FC = () => {
  return (
    <div className="shipping-form">
      <h2>Dirección de Envío</h2>
      <div className="form-group">
        <label htmlFor="address">Dirección:</label>
        <input type="text" name="address" />
      </div>
      <div className="form-group">
        <label htmlFor="city">Ciudad:</label>
        <input type="text" name="city" />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Código Postal:</label>
        <input type="text" name="postalCode" />
      </div>
      <button type="button">Enviar</button>
    </div>
  );
};

export default ShippingForm;

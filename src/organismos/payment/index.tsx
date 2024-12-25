const PaymentForm: React.FC = () => {
  return (
    <div className="payment-form">
      <h2>Formulario de Pago</h2>
      <div className="form-group">
        <label htmlFor="cardNumber">Número de Tarjeta:</label>
        <input type="text" name="cardNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Fecha de Expiración:</label>
        <input type="text" name="expiryDate" />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV:</label>
        <input type="text" name="cvv" />
      </div>
      <button type="submit">Pagar</button>
    </div>
  );
};

export default PaymentForm; 

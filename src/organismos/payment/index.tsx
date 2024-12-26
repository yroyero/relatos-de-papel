import { Dispatch, SetStateAction, useState } from "react";
import { PaymentData } from '../../@types/index';

interface PaymentDataProps {
  paymentData: PaymentData;
  setPaymentData: Dispatch<SetStateAction<PaymentData>>;
}

const PaymentForm: React.FC<PaymentDataProps> = ({paymentData, setPaymentData}) => {
  const validarCardNumber = /^(?:4\d{12}(?:\d{3})?|5[1-5]\d{14}|6011\d{12})$/;
  const validarExpiryDate = /^(0[1-9]|1[0-2])\/?(\d{4}|\d{2})$/;
  const validarCvv = /^\d{3,4}$/;
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateName = (value: string): string => {
    return !value ? 'Nombre es requerido' : '';
  }

  const validateCardNumber = (value: string): string => {
    if (!value) return 'Correo Electrónico es requerido';
    if (value && !validarCardNumber.test(value)) return 'Tarjeta no válida';
    return '';
  }

  const validateExpiryDate = (value: string): string => {
    if (!value) return 'Fecha de Expiración es requerida';
    if (value && !validarExpiryDate.test(value)) return 'Fecha de Expiración no válida';
    return '';
  }

  const validateCvv = (value: string): string => {
    if (!value) return 'CVV es requerido';
    if (value && !validarCvv.test(value)) return 'CVV no válido';
    return '';
  }

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        return validateName(value);
      case 'cardNumber':
        return validateCardNumber(value);
      case 'expiryDate':
        return validateExpiryDate(value);
      case 'cvv':
        return validateCvv(value);
      default:
        return '';
    }
  }

  const handleChangeValue = (field: string, value: string) => {   
    setPaymentData({...paymentData, [field]: value});
    const errorText = validateField(field, value);
    setErrors({...errors, [field]: errorText});
  }  

  return (
    <div className="payment-form">
      <h2>Formulario de Pago</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre y apellidos</label>
        <input type="text" name="name" value={paymentData?.name} onChange={e => handleChangeValue(e.target.name, e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber">Número de Tarjeta:</label>
        <input type="text" name="cardNumber" value={paymentData?.cardNumber} onChange={e => handleChangeValue(e.target.name, e.target.value)} />
        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Fecha de Expiración:</label>
        <input type="text" name="expiryDate" value={paymentData?.expiryDate} onChange={e => handleChangeValue(e.target.name, e.target.value)} />
        {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV:</label>
        <input type="text" name="cvv" value={paymentData?.cvv} onChange={e => handleChangeValue(e.target.name, e.target.value)} />
        {errors.cvv && <span className="error">{errors.cvv}</span>}
      </div>
    </div>
  );
};

export default PaymentForm; 

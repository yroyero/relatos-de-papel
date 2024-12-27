import React, { Dispatch, SetStateAction, useState } from 'react';
import './style.css';
import { Shipping } from '../../@types';

interface ShippingFormProps {
    data: Shipping;
    setData: Dispatch<SetStateAction<Shipping>>;
    }


const ShippingForm: React.FC<ShippingFormProps> = ({data,setData}) => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  
  const validateField = (field: string, value: string): string => {
    switch(field) {
        case 'name':    
            return !value ? 'Nombre es requerido' : '';          
        case 'email':
            if (!value) return 'Correo Electrónico es requerido';
            if(value && !validateEmail.test(value)) return 'Correo Electrónico no es válido';
            return '';
        case 'phone':
            return !value ? 'Teléfono es requerido' : '';
        case 'address':
            return !value ? 'Dirección es requerida' : '';
        case 'city':
            return !value ? 'Ciudad es requerida' : '';
        case 'postalCode':
            return !value ? 'Código Postal es requerido' : '';
        default:
            return '';
    }
  }

  const handleChangeValue = (field: string, value: string) => {    
    setData({...data, [field]: value});
    const errorText = validateField(field, value);
    setErrors({...errors, [field]: errorText});
  }  

  return (
    <div className="shipping-form">
      <h2>Dirección de Envío</h2>
      <div className="shipping-form-content">
        <div className="shipping-form-fields">
          <div className="form-group">
            <label htmlFor="name">Nombre y apellidos:</label>
            <input
              type="text"
              name="name"
            value={data?.name}            
              onChange={(e) => handleChangeValue(e.target.name,e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={data?.email}
              onChange={(e) => handleChangeValue(e.target.name,e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={data?.phone}
              onChange={(e) => handleChangeValue(e.target.name,e.target.value)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="shipping-form-fields">
          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              name="address"
              value={data?.address}
              onChange={(e) => handleChangeValue(e.target.name,e.target.value)}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad:</label>
            <input
              type="text"
              name="city"
              value={data?.city}
              onChange={(e) => handleChangeValue(e.target.name,e.target.value)}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Código Postal:</label>
            <input
              type="text"
              name="postalCode"
              value={data?.postalCode}
              onChange={(e) => handleChangeValue(e.target.name,e.target.value)}
            />
            {errors.postalCode && <span className="error">{errors.postalCode}</span>}
          </div>
        </div>        
      </div>
    </div>
  );
};

export default ShippingForm;

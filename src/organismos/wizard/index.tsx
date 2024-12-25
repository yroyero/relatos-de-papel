import { useState } from "react";
import CartItems from "../../moleculas/cartItems";
import ShippingForm from "../shipping";
import PaymentForm from "../payment";
import "./style.css";

const ItemWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="item-wizard">
      <div className="item-wizard-steps">
        <div className={currentStep === 1 ? "step active" : "step"}>
          <span>1. Carrito</span>
        </div>
        <div className={currentStep === 2 ? "step active" : "step"}>
          <span>2. Envío</span>
        </div>
        <div className={currentStep === 3 ? "step active" : "step"}>
          <span>3. Pago</span>
        </div>
      </div>
      <div className="item-wizard-content">
        {currentStep === 1 && <CartItems />}
        {currentStep === 2 && <ShippingForm />}
        {currentStep === 3 && <PaymentForm />}
      </div>
      <div className="item-wizard-buttons">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Anterior
        </button>
        <button onClick={nextStep} disabled={currentStep === 3}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ItemWizard;

import { useState } from "react";
import CartItems from "../../moleculas/cartItems";
import PaymentForm from "../../moleculas/payment";
import "./style.css";
import ShippingForm from "../../moleculas/shipping";
import { PaymentData, Shipping } from "../../@types";
import { useShop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const ItemWizard: React.FC = () => {
  const { clearCart, addNotification } = useShop();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingData, setShippingData] = useState<Shipping>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentData, setPaymentData] = useState<PaymentData>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const finalStep = (msg:string) => {
    addNotification(msg);  
    clearCart();
    navigate("/home");
  }

  const nextStep = () => {
    if (currentStep === 2) {
      if (
        !shippingData.name ||
        !shippingData.email ||
        !shippingData.phone ||
        !shippingData.address ||
        !shippingData.city ||
        !shippingData.postalCode
      ) {
        alert("Todos los campos son requeridos");
        return;
      }
    }
    if (currentStep === 3) {
      alert("Gracias por su compra");
      finalStep("Compra realizada con éxito");
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const clearShoppingCart = () => {
    finalStep("Compra cancelada");
  };  

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
        {currentStep === 2 && (
          <ShippingForm data={shippingData} setData={setShippingData} />
        )}
        {currentStep === 3 && <PaymentForm paymentData={paymentData} setPaymentData={setPaymentData} />}
      </div>
      <div className="item-wizard-buttons">
        <button onClick={clearShoppingCart} className="cancel">
          Cancelar
        </button>
        <button onClick={nextStep} >
          {currentStep === 3 ? "Pagar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};

export default ItemWizard;

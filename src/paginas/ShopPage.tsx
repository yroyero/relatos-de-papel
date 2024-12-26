
import { useShop } from '../context/ShopContext';
import ItemWizard from '../organismos/wizard';

const ShopPage: React.FC = () => {
    const { cart } = useShop();
    return (
        <div>
            {cart.length > 0 && <ItemWizard />}
            {cart.length === 0 && <h1>No hay productos en el carrito</h1>}
        </div>
    );
};

export default ShopPage;
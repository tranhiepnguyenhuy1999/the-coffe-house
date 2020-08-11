import{configureStore} from '@reduxjs/toolkit';
import product from '../feature/product/productSlide'
const rootReducers={
    product
};
const store= configureStore({
    reducer: rootReducers
}
);

export default store;
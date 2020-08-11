import {createSlice} from '@reduxjs/toolkit';

const product= createSlice(
    {
        name: 'product',
        initialState: [
            {
                id: 1,
                name: 'Trà oolong bưởi mật ông',
                price: 50000,
                src:"//product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg"
            },
            {
                id: 2,
                name: 'Trà sữa mắc ca trân chân trắng',
                price: 45000,
                src:'//product.hstatic.net/1000075078/product/macca_d56d5ab8dde4455aa7f19d29b5fff763_large.jpg'
            },
            {
                id: 3,
                name: 'Trà đào cam sả',
                price: 45000,
                src:"//product.hstatic.net/1000075078/product/tra_dao_5f3925d9bfca4d0abc17f95b05fff5f7_large.jpg"
            },
            {
                id: 4,
                name: 'Mocha',
                price: 49000,
                src:"https://product.hstatic.net/1000075078/product/mocha_da_a2913936f9d84d07b63ac1ddf5dd2d0f_large.jpg"
            },
            {
                id: 5,
                name: 'Americano',
                price: 39000,
                src:"https://product.hstatic.net/1000075078/product/americano_copy_92414ac8e0634fb48ea72b21bc496b43_large.jpg"
            },
            {
                id: 6,
                name: 'CARAMEL MACCHIATO',
                price: 55000,
                src:"https://product.hstatic.net/1000075078/product/caramel_macchiato_24ff98b746e84b7aba702c01a60b1a52_large.jpg"
            }

    ],
    }
);
const {reducer}= product;
// export const {
//     }=actions;
export default reducer;
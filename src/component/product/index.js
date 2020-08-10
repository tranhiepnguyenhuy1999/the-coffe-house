import React from 'react'
import './productItem.scss'
function ProductItem() {
    return (
        <div className='productItem'>
            <div className='productItem__image'>
            <img src='//product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg' alt='product'></img>
            </div>
            <div className='productItem__name'>NAME</div>
            <div className='productItem__price'>Price</div>
            <div className='productItem__btnDiv'>
                <button className='productItem__btn btn-active' onClick={()=>{console.log('hey')}}>MUA NGAY</button>
                <button className='productItem__btn btn-none'>TÌM HIỂU THÊM</button>
            </div>
        </div>
    )
}

export default ProductItem

import React from 'react'
import './productItem.scss'
function ProductItem({id, name, price, src}) {
    return (
        <div className='productItem'>
            <div className='productItem__image'>
            <img src={src}alt='product'></img>
            </div>
            <div className='productItem__name'>{name}</div>
            <div className='productItem__price'>{price} Đ</div>
            <div className='productItem__btnDiv'>
                <button className='productItem__btn btn-active' onClick={()=>{console.log(id)}}>MUA NGAY</button>
                <button className='productItem__btn btn-none'>TÌM HIỂU THÊM</button>
            </div>
        </div>
    )
}

export default ProductItem

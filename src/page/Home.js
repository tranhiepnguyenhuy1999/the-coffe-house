import React from 'react';
import './Home.scss';
import ProductItem from '../component/product';
import {useSelector} from 'react-redux'
function Home() {
    const product = useSelector(state => state.product)
    return (
        <div className='home'>  
            <div className='home__slide'>
                <div className='home__slide__image'>
                <img src="//file.hstatic.net/1000075078/file/banner_a1b69b9de3ff493a880545358fbdb99a_master.jpg" alt='slide'></img>
                </div>
            </div>
            <div className='home__menu'>
                <div className='home__menu__title'>
                <span>MENU</span>
                  
                <div className='home__menu__btn'>
                Xem thêm tất cả sản phẩm 
                </div>
                
                </div>
                <div className='home__menu__list'>
                {product.map(i=><ProductItem {...i}></ProductItem>)}

            </div>
            </div>
           
        </div>
    )
}

export default Home

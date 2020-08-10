import React from 'react'
import './header.scss'
function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                THE COFFEE HOUSE
            </div>
            <div className="header__list">
                <ul className="header__list">
                    <li className="header__list__li">CÂU CHUYỆN THƯƠNG HIỆU
                    <ul className="header__list__li__list">
                        <li>VỀ THE COFFEE HOUSE</li>
                        <li>TRÁCH NHIỆM CỘNG ĐỒNG</li>
                        <li>THÔNG BÁO BÁO CHÍ</li>
                    </ul>
                    </li>
                    <li className="header__list__li">CHUYỆN CÀ PHÊ</li>
                    <li className="header__list__li">SẢN PHẨM</li>
                    <li className="header__list__li">ƯU ĐÃI THÀNH VIÊN</li>
                    <li className="header__list__li">TIN TỨC</li>
                    <li className="header__list__li">TUYỂN DỤNG</li>
                    <li className="header__list__li">CỬA HÀNG</li>
                    <li><i className="fas fa-search"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Header

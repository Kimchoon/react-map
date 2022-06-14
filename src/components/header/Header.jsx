import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={require('../../assets/bike-logo.webp')} alt='' />
            <input type='text'></input>
            <div className="right-div">
                <Link to='#'>Trang chủ</Link>
                <Link to='#'>Đăng nhập</Link>
                <Link to='#'>Liên hệ</Link>
                <Link to='/'>Bản đồ</Link>
            </div>
        </div>
    )
}

export default Header
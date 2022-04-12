import React from 'react';
import Item from '../../components/item/Item';
import { Button } from 'bootstrap';

const Home = ({ data, categor }) => {
    console.log(categor)
    return (
        <>
            <h1 style={{ textAlign: 'center', margin: '100px', fontSize: '50px', fontWeight: 'bold', color: 'rgba(45, 209, 41)' }}>{categor}</h1>
            <div className='product-box container'>
                {data.map((elem, index) => {
                    return (
                        <div key={index} className='product'>
                            {elem.discount === null ? ''
                                : <div className='discount'>
                                    <h4>{elem.discount}%</h4>
                                </div>}
                            <div className='product-item'>
                                <div
                                    className='item-img'
                                    style={{
                                        backgroundImage: `url(https://api.office.promarket.besoft.kg/${elem.main_image. path.original})`,
                                        backgroundPositionX: 'center',
                                        backgroundPositionY: 'center',
                                        height: '230px',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'contain',
                                    }}>
                                </div>
                                <div className="price-box">
                                    <p className='title'>{elem.title}</p>
                                    {elem.discount === null ?
                                        <p className='price'>{elem.price} сом</p>
                                        : <div className='discount-prise'>
                                            <p className='old-price'>{elem.price} сом</p>
                                            <p className='discount-price'>{Math.floor(elem.price - (elem.price * elem.discount) / 100)} сом</p>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div ></>
    );
};

export default Home;
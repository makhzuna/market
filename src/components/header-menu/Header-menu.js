import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const Header_menu = ({ data, filter, discount, handleSub, home}) => {
    const loader = <Spinner size='sm' animation="border" variant="light" />
    const { handleSubmit, register, formState: { errors }, reset } = useForm({})
    const [loading, setLoading] = useState(false)

    // const handleSub = (state) => {
    //     console.log(state)
    // }



    console.log(data)
    return (
        <div className='header-menu d-flex '>
            <div className='col-9'>
                <ul className='menu w-100 '>
                    <li className='item'><span>logo</span></li>
                    <li onClick={home} className='item'><span>home</span></li>
                    <li
                        onClick={discount}
                        className='item'><span>discount</span></li>
                    <li className='item'><span>categoria</span>
                        <ul className='menu-item'>
                            {data.map((elem, index) => {
                                return (
                                    <>
                                        <li  onClick={() => filter(elem.id)}>
                                            <p>{elem.short_title}</p>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </li>
                    <li className='item'><span>basket</span></li>
                </ul>
            </div>
            <form className='search-box' onSubmit={handleSubmit(handleSub)}>
                <div>
                    <input
                        {
                        ...register('value', {
                            required: true,
                            minLength: {
                                value: 5,
                                message: "Минимум 8 символ"
                            }
                        })
                        }
                        type='text'
                        className="form-control"
                        placeholder="search" />
                    {errors?.parol && <span>{errors.parol.message = 'поле обьзятельно к заполнению'}</span>}

                </div>

                <button type='submit' className="btn btn-primary">{loading ? loader : 'sign in'}</button>
            </form>
        </div>
    );
};

export default Header_menu;
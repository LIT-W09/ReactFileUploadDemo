import React, { useRef, useEffect, useState } from 'react';

const Home = () => {

    const [value, setValue] = useState('');
    const countRef = useRef(0);
    const textboxRef = useRef(null);

    useEffect(() => {
        countRef.current++;
    });

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <input type='text' className='form-control'
                        placeholder='Textbox 1' value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <div className='col-md-3'>
                    <h2>Current Ref: {countRef.current}</h2>
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-primary' onClick={() => countRef.current += 10}>Click me!</button>
                </div>
            </div>
            <div className='row card card-body bg-light mt-5'>
                <div className='col-md-4'>
                    <button className='btn btn-danger btn-block' onClick={() =>{
                        //textboxRef.current.focus()
                        textboxRef.current.scrollIntoView({behavior: 'smooth'});
                    }}>Focus Text 2</button>
                </div>
                <div className='row card card-body bg-light mt-5'>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                    <h1>Hello world</h1>
                </div>
                <div className='col-md-4'>
                    <input ref={textboxRef} type='text' className='form-control'
                        placeholder='Textbox 2' />
                </div>


            </div>
        </div>

    )
}

export default Home;
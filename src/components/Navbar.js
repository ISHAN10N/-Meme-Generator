import React from 'react'
export default function Navbar(props) {
    return (
        <header className='first--container'>

            <img src={props.img} alt='logo is here' className='head--image' />
            <h3 className='head--h2'>Meme Generator</h3>
            <h4 className='head--h4'>React Course - Project 3</h4>

        </header>
    )
}
import React from 'react'
import '../components/Site.css'
import logo from '../assets/tide.png'

function Site() {
    const list = [
        {
            name: 'Tide Powder',

            image: logo,
        },
        {
            name: 'Tide Powder',
            image: logo,
        }
    ];

    return (
        <div className="container">
            
            <h1 className='title'>E commerce</h1>
            <div className="body">
             <ul className="product-1">
                    {list.map(content => (
                        <li key={content.name}> 
                            <div className="product">
                                <div className="product-image">
                                    <img src={content.image} alt={content.name} />
                                </div>
                                <div className="product-2">
                                    <h4>{content.name}</h4>
                                    <div className="span">
                                        <span>Washing powder tide is an american brand of laundry</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default Site
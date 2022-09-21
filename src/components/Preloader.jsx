import React, { useEffect, useState } from 'react';
import "./Preloader.css"
import Travelcard from './Travelcard';



const Preloader = ({locations, onDelete}) => {

    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setCompleted(true);
        }, 3000);
    }, [])


    return (
        <div className='container'>
            {!completed ? (
                <div className='contain'>
                    {!loading ? (
                        <div className='loader'>
                            <span>Loading...</span>                          
                        </div>
                        
                    ) : (
                        <div className='completed'>
                            loaded
                        </div>
                    )}
                </div>
            ) : (
                    <div className='travel'>
                        <h1>Our Tours</h1>
                        <div className='line'></div>
                        {locations.map((location) => (
                            <Travelcard key={location.id} location={location} setLoading={setLoading} onDelete={onDelete} />
                        ))}
                </div>
            )
            }
        </div>
    )
}

export default Preloader
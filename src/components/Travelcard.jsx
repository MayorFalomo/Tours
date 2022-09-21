import React, {useState} from 'react'
import "./Travelcard.css"



const Travelcard = ({ location, onDelete }) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <div className='card'>
            <img className='images' src={location.image} alt="img" />

            <div className='text'>

            <div className='flexItem'>
            <h4>{location.city}</h4>
                <h4 className='price'>{location.price}</h4>
                </div>
                <p>{readMore ? location.text : `${location.text.slice(0, 200)}...`}
                    <button className="readBtn" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</button></p>
                

                 <div className='interest'><button type="button" onClick={() => onDelete(location.id)} className='btn'>Not Interested</button></div>
                </div>
        </div>
  )
}

export default Travelcard


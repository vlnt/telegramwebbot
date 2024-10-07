import React, {useState} from 'react'
import Button from './Button'
import './Card.css'

function Card({food, onAdd, onRemove}) {
    console.log(food)
    const [count, setCount] = useState(0)
    
    const { title, Image, price, id } = food;

    // const Img = food.food.Image;   
    // const price = food.food.price
    // const title = food.food.title    
    console.log(title)
    const handleIncrement = () => {
        setCount(count + 1)
        onAdd(food)
    }

    const handleDecrement = () => {
        setCount(count - 1)
        onRemove(food   )
    }

  return (
    <div className='card'>
      <span className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}>{count}</span>
    <div className="image__container">
        <img src={Image} alt={title} />
    </div>
    <h4 className="card__title">
        {title}. <div className="card__price">{price}</div>
    </h4>
    <div className="btn__container">
        <Button title={'+'} type={'add'} onClick={handleIncrement} />
        {count !== 0 ? (
            <Button title={'-'} type={'remove'} onClick={handleDecrement} />
        ) : ("")
        }
    </div>
    </div>
  )
}

export default Card

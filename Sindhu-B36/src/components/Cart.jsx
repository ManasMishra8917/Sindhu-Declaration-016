import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
    const handleChange = (item, d) => {
        const index = cart.findIndex((data) => data.id === item.id)
        if (index !== -1) {
          cart[index].amount += d
          if (cart[index].amount === 0) cart[index].amount = 1
          setCart([...cart])
        }
      }
    
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    },[cart])

    const handleClick=(msg)=>{
        alert(msg)
    }

  return (
    <div style={{marginTop:"80px"}}>
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.image} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                    <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span> ${price}</span>
        </div>
        {cart.length>0? (<button onClick={()=>handleClick("Your Order was Placed! Thankyou visit again")} style={{backgroundColor:"#fb641b",color:"white",fontSize:"30px",fontWeight:"bold",letterSpacing:"2px" }}>Order</button>):""}
    </article>
    
    </div>
  )
}
export default Cart
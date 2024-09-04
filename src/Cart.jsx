import React from 'react';
import { useCart } from 'react-use-cart';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <p className='text-center'>Your cart is empty</p>;
    return (
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            <div className='col-12'>
            <h5> Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
            <table className='table table-light table-hover m-0'>
                {items.map((item, index)=>{
                    <tr key={index}>

                    </tr>
                })}
            </table>
            </div>
           </div>
            </section>
      
    );
};

export default Cart;
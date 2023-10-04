'use client'
import React, { useState } from 'react';
import './styles/Cart.css'
import { AiOutlineDelete } from 'react-icons/ai';
import PriceFormatter from '@/component/javascripts/PriceFormatter';
import { BiArrowBack } from 'react-icons/bi';

const products = [
    {
        id: 34,
        name: 'Mens Fashion Hoodie',
        stock: 8,
        description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
        features: [
            'Comfortable and Cozy',
            'Versatile Style',
            'New Teens Fashion',
        ],
        price: 2850,
        images: ['/editHoodie.png'],
        designable: true,
        colors: ['Red', 'Blue', 'Black'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: ['Cotton', 'Wool Lining'],
        quantity: 1, // Add the "quantity" field here
    },
    {
        id: 39,
        name: `Luffy Hoodie`,
        stock: 10,
        description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
        features: [
            'Soft and Warm Material',
            'Classic Design',
            'Available in Multiple Colors',
        ],
        price: 3200,
        images: ['/luffyHoodie.png'],
        designable: false,
        colors: ['Black', 'Gray', 'White'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: ['Cotton', 'Polyester Blend'],
        quantity: 9, // Add the "quantity" field here
    },
    {
        id: 84,
        name: 'Akatsuki Itachi Hoodie',
        stock: 6,
        description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
        features: [
            'Premium Quality Fabric',
            'Modern Fit',
            'Ideal for All Seasons',
        ],
        price: 2700,
        images: ['/akatsukiHoodie.png', '/itachiHoodie.png'],
        designable: false,
        colors: ['black'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: ['Cotton', 'Polyester Blend'],
        quantity: 2, // Add the "quantity" field here
    },
    {
        id: 384,
        name: 'Onepiece Trio Hoodie(ASL)',
        stock: 15,
        description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
        features: [
            'Cute and Adorable Design',
            'Durable Fabric',
            'Perfect for Playtime',
        ],
        price: 2200,
        images: ['/luffyAceSaboHoodie.png'],
        designable: false,
        colors: ['Black'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: ['Cotton', 'Polyester Blend'],
        quantity: 4, // Add the "quantity" field here
    },
];


const Cart = () => {
    const [cartItems, setCartItems] = useState(products);

    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    const increaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId && item.quantity < 10) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };
    const decreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    // Function to handle the back button click
    const handleBackButtonClick = () => {
        window.history.back();
    };

    return (
        <>
            <section className='cartSection'>
                <div className='cartProducts'>
                    <div className='cartProductsTop'>
                        <button className='cartProductsBackButton' onClick={handleBackButtonClick}>
                            <BiArrowBack />
                        </button>
                        <p className='cartProductsTopHeader'>YOUR CART</p>
                     </div>
                        <div className='cartProductsBody'>
                            <div className='cartHeader' style={{borderBottom:'1px solid black'}}>
                                <div className='cartHeaderText'>PRODUCT</div>
                                <div className='cartHeaderText'>PRICE</div>
                                <div className='cartHeaderText'>QUANTITY</div>
                                <div className='cartHeaderText'>SUBTOTAL</div>
                                <div className='cartHeaderText'>REMOVE</div>
                            </div>
                            {cartItems.map((item) => (
                                <div className='cartProductRow' key={item.id}>
                                    <div className='cartProductImage'>
                                        <img src={item.images[0]} alt='Product' />
                                        <p className='cartProductName'> {item.name} </p>
                                        <p className='cartProductColor'>Color: Black + Size: M</p>
                                    </div>
                                    <div className='cartPrice'>Rs <PriceFormatter price={item.price} /></div>
                                    <div className='cartProductQuantity'>
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                    <div className='cartSubTotal'>Rs <PriceFormatter price={item.quantity * item.price} /></div>
                                    <div className='cartDeleteButton'><AiOutlineDelete /></div>
                                </div>
                            ))}
                        </div>

                </div>

                <div className='cartCheckout'>
                    <p className='cartCheckOutHeading'>NEPHARA</p>
                    <div className='cartCheckOutAmount'>
                        <div className='cartCheckoutSubTotal'>
                            <p > Subtotal: </p>
                            <p>Rs <PriceFormatter price={total} /> </p>
                        </div>
                        <div className='cartCheckoutDeliveryFee'>
                            <p> Delivery:</p>
                            <p> Rs 0 </p>
                        </div>
                        <div className='cartCheckoutTotal'>
                            <p > Order Total:</p>
                            <p> Rs <PriceFormatter price={total} /></p>
                        </div>

                    </div>
                    <p className='cartCheckoutTax'>Taxes are already included.</p>
                    <div className='cartCheckoutButtonSection'>
                        <button className='cartCheckoutButton'>Guest Checkout</button>
                        <button className='cartCheckoutButton'>Member Checkout</button>
                    </div>
                </div>
            </section>
        </>
    )
}




export default Cart;
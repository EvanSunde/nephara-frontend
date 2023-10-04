import React from 'react'
import '../styles/ProductCard.css'
const ProductCard = ({ name, stock, price, image }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength - 3) + '...';
        }
        return text;
    };
    const productName = "Men’s Hoodie Trend "; // Replace this with your actual product name
    const truncatedProductName = truncateText(productName, 23);
    console.log(price)
    return (
        <>
            <section className='productCard' >
                <img src={image[0]} alt='Tshirt' />
                <article className='productCardContent'>
                    <div className='productCardContentTop'>
                        <div className='productCardContentHeader'>
                            <h5>{truncatedProductName}</h5>
                            <p>In Stock({stock})</p>
                        </div>
                    </div>
                    <div className='productCardContentButtons'>
                        <button className='productCardContentButtonDesign'>Buy now</button>
                        <button className='productCardContentButtonSize'>Add to Cart</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ProductCard
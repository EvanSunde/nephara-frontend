import React from 'react';
import '../styles/ProductsSectionProductCard.css';
import Link from 'next/link';
const products = [
  {
    id: 34,
    name: 'Mens Fashion Hoodie',
    stock: 'In stock(8)',
    description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
    features: [
      'Comfortable and Cozy',
      'Versatile Style',
      'New Teens Fashion',
    ],
    price: 'Rs 2850',
    images: [
      '/editHoodie.png',
    ],
    designable: true,
    colors: ['Red', 'Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  // {
  //   id: 32,
  //   name: 'Mens Tshirt',
  //   stock: 2,
  //   description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
  //   features: [
  //     'Comfortable and Fashoinable',
  //     'Versatile Style',
  //     'New Fabric top quality',
  //   ],
  //   price: 2850,
  //   images: [
  //     '/FrontTshirt-removebg.png',
  //     '/BackTshirt.png',
  //   ],
  //   designable: true,
  //   colors: ['Red', 'Green', 'Black'],
  //   sizes: ['S', 'M', 'L', 'XL'],
  //   fabric: ['Cotton', 'Wool Lining'],
  // },
  {
    id: 39,
    name: `Luffy Hoodie`,
    stock: 'In stock(12)',
    description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
    features: [
      'Soft and Warm Material',
      'Classic Design',
      'Available in Multiple Colors',
    ],
    price: 'Rs 3200',
    images: [
      '/luffyHoodie.png',
    ],
    designable: false,
    colors: ['Pink', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 84,
    name: 'Akatsuki Itachi Hoodie',
    stock: 'In stock(6)',
    description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
    features: [
      'Premium Quality Fabric',
      'Modern Fit',
      'Ideal for All Seasons',
    ],
    price: 'Rs 2700',
    images: [
      '/akatsukiHoodie.png',
      '/itachiHoodie.png',
    ],
    designable: false,
    colors: ['Green', 'Gray', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 384,
    name: 'Onepiece Trio Hoodie(ASL)',
    stock: 'In stock(15)',
    description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
    features: [
      'Cute and Adorable Design',
      'Durable Fabric',
      'Perfect for Playtime',
    ],
    price: 'Rs 2200',
    images: [
      '/luffyAceSaboHoodie.png',
    ],
    designable: false,
    colors: ['Blue', 'Pink', 'Yellow'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];


const ProductsSectionProductCard = () => {
  return (
    <>
      {products.map((product, index) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          style={{ textDecoration: 'none' }}>
          <div className='productsSectionProductCardContainer' key={index}>
            <img src={product.images[0]} alt={product.name} />
            <div className='productsSectionProductCardContainerContents'>
              <article className='productsSectionProductCardContainerContentsTexts'>
                <h2>{product.name}</h2>

                <p className='productsSectionProductCardContainerContentsStock'>
                  {product.stock}
                </p>
                <ul className='productsSectionProductCardContainerContentsFeatures'>
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </article>
              <p className='productsSectionProductCardContainerContentsPrice'>
                {product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductsSectionProductCard;
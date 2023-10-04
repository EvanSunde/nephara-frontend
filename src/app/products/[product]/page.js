'use client'
import React, { useEffect, useState } from 'react';
import ProductsNavbar from '../javascripts/ProductsNavbar';
import './ProductPage.css';
import SizeChart from '@/component/javascripts/SizeChart';
import PriceFormatter from '@/component/javascripts/PriceFormatter';
import Link from 'next/link';

export const products = [
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
    images: [
      '/editHoodie.png',
    ],
    designable: true,
    colors: ['Red', 'Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: ['Cotton', 'Wool Lining'],
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
    stock: 10,
    description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
    features: [
      'Soft and Warm Material',
      'Classic Design',
      'Available in Multiple Colors',
    ],
    price: 3200,
    images: [
      '/luffyHoodie.png',
    ],
    designable: false,
    colors: ['Black', 'Gray', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: ['Cotton', 'Polyester Blend'],
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
    images: [
      '/akatsukiHoodie.png',
      '/itachiHoodie.png',
    ],
    designable: false,
    colors: ['black'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: ['Cotton', 'Polyester Blend'],
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
    images: [
      '/luffyAceSaboHoodie.png',
    ],
    designable: false,
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: ['Cotton', 'Polyester Blend'],
  },
];


const ProductPage = ({ params }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const productId = params.product;
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = product.images; // Use product-specific images

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // const handleDesignButtonClick=(id)=>{

  // }
  useEffect(() => {
    // Function to update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <ProductsNavbar />
      {windowWidth > 900 ?
        <section className='productPage'>
          <div className='productPageImageSection'>
            {/* Display the selected image */}
            <img
              src={images[selectedImage]}
              alt={`Image ${selectedImage}`}
              style={{ width: '100%', maxWidth: '500px' }} // Adjust the width as needed
            />
            <div className='productPageSmallerImages'>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  style={{

                    border: index === selectedImage ? '2px solid gray' : 'none', // Highlight the selected image
                  }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className='productPageContentSection'>
            <h2>{product.name}</h2>
            {/*  <p className='productPageContentSectionStock'>In Stock : {product.stock} </p>
         <p className='productPageContentSectionFabric'>
           Fabric: {product.fabric.map((fabric, index) => (
             <span key={index}>
               {index > 0 && ', '} {/* Add a comma and space for all elements except the first */}
            {/* {fabric} */}
            {/* </span> */}
            {/* ))}
         </p> */}
            <p className='productPageContentSectionDescription'><span style={{ fontSize: '1rem', color: 'black' }}> Description:</span><br />{product.description}</p>
            <ul className='productPageContentSectionFeatures'>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className='productPageColorAndQuantity'>
              {
                product.colors ?
                  <div className='productPageContentSectionColors'>
                    <p>Available Colours:</p>
                    <div className='productPageContentSectionColorsContainer'>
                      {product.colors.map((color, index) => (
                        <div className='productPageContentSectionColorsColor'
                          key={index}
                          style={{ backgroundColor: color }}>
                        </div>
                      ))}
                    </div>
                  </div> : ''
              }
              <div className='productPageSectionQuantity'>
                <label> Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  min={1}
                  max={10}
                  step={1}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className='productPageSectionSizes'>
              <div className='productPageSectionSizesLabels'>
                <p>Sizes</p>
                <p onClick={openModal}>See size chart</p>
              </div>
              <div className='productPageSectionSizesButtons'>
                {
                  ['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      className={`productPageSectionSizesButton ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>))
                }
              </div>
            </div>
            <p className='productPageContentSectionPrice'>Price: Rs <PriceFormatter price={product.price} /></p>
            {
              isModalOpen ?
                <SizeChart openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
                : ''
            }
            <div className='productPageContentSectionButtonContainer'>
              {product.designable ?
                <button className='productPageContentSectionButton' >
                  <Link href={`/edit/${product.id}`} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                    Design Now
                  </Link>

                </button>
                :
                <button className='productPageContentSectionButton'> Add to cart </button>
              }
            </div>
          </div>
        </section>
        :
        <section className='productPage'>
          <div className='productPageImageSection'>
            {/* Display the selected image */}
            <img
              src={images[selectedImage]}
              alt={`Image ${selectedImage}`}
              style={{ width: '100%', maxWidth: '500px' }} // Adjust the width as needed
            />
            <div className='productPageSmallerImages'>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  style={{

                    border: index === selectedImage ? '2px solid gray' : 'none', // Highlight the selected image
                  }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className='productPageContentSection'>
            <h2>{product.name}</h2>
            {/*  <p className='productPageContentSectionStock'>In Stock : {product.stock} </p>
  <p className='productPageContentSectionFabric'>
    Fabric: {product.fabric.map((fabric, index) => (
      <span key={index}>
        {index > 0 && ', '} {/* Add a comma and space for all elements except the first */}
            {/* {fabric} */}
            {/* </span> */}
            {/* ))}
  </p> */}

            <div className='productPageColorAndQuantity'>
              {
                product.colors ?
                  <div className='productPageContentSectionColors'>
                    <p>Available Colours:</p>
                    <div className='productPageContentSectionColorsContainer'>
                      {product.colors.map((color, index) => (
                        <div className='productPageContentSectionColorsColor'
                          key={index}
                          style={{ backgroundColor: color }}>
                        </div>
                      ))}
                    </div>
                  </div> : ''
              }
              <div className='productPageSectionQuantity'>
                <label> Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  min={1}
                  max={10}
                  step={1}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className='productPageSectionSizes'>
              <div className='productPageSectionSizesLabels'>
                <p>Sizes</p>
                <p onClick={openModal}>(See size chart)</p>
              </div>
              <div className='productPageSectionSizesButtons'>
                {
                  ['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      className={`productPageSectionSizesButton ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>))
                }
              </div>
            </div>
            <p className='productPageContentSectionPrice'>Price: Rs <PriceFormatter price={product.price} /></p>
            {
              isModalOpen ?
                <SizeChart openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
                : ''
            }
            <p className='productPageContentSectionDescription'><span style={{ fontSize: '1rem', color: 'black' }}> Description:</span><br />{product.description}</p>
            <ul className='productPageContentSectionFeatures'>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className='productPageContentSectionButtonContainer'>
              {product.designable ?

                <button className='productPageContentSectionButton'>
                  <Link href={`/edit/${product.id}`} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                    Design Now
                  </Link> </button>
                :
                <button className='productPageContentSectionButton'> Add to cart </button>
              }
            </div>
          </div>
        </section>
      }

    </>
  );
};

export default ProductPage;

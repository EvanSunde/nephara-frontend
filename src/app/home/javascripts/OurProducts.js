'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/OurProducts.css';
import Link from 'next/link';
import Loading from '@/component/javascripts/Loading';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

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
        images: [
            '/editHoodie.png',
        ],
        designable: true,
        colors: ['Red', 'Blue', 'Black'],
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 39,
        name: `Luffy Hoodie`,
        stock: 12,
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
        colors: ['Pink', 'Gray', 'Navy'],
        sizes: ['S', 'M', 'L', 'XL'],
    },
    // {
    //     id: 32,
    //     name: 'Mens Tshirt',
    //     stock: 2,
    //     description: `The cotton premium hoodie is a must-have addition to your wardrobe. Crafted from top-quality, soft cotton fabric, it provides unparalleled comfort that you'll love wearing all day. With its classic design, complete with a front kangaroo pocket and a snug hood, it's not only cozy but also stylish.`,
    //     features: [
    //         'Comfortable and Fashoinable',
    //         'Versatile Style',
    //         'New Fabric top quality',
    //     ],
    //     price: 2850,
    //     images: [
    //         '/FrontTshirt-removebg.png',
    //         '/BackTshirt.png',
    //     ],
    //     designable: true,
    //     colors: ['Red', 'Green', 'Black'],
    //     sizes: ['S', 'M', 'L', 'XL'],
    //     fabric: ['Cotton', 'Wool Lining'],
    // },
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
        colors: ['Green', 'Gray', 'Burgundy'],
        sizes: ['S', 'M', 'L', 'XL'],
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
        colors: ['Blue', 'Pink', 'Yellow'],
        sizes: ['S', 'M', 'L', 'XL'],
    },
];
const OurProducts = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };
        handleResize();
        setIsLoading(false)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {isLoading ?
                <Loading />
                :
                <section className='ourProductsSection'>
                    <h6>TRENDING NOW</h6>
                    <div className='ourProductsSectionProductCards'>
                        {isMobile ?
                            (<div className='ourProductsSectionProductCardContainer' >
                                {/* <Swiper
                                    effect={"coverflow"}
                                    centeredSlides={true}
                                    slidesPerView={3}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: false,
                                    }}
                                    pagination={true}
                                > */}
                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={4}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: false,
                                    }}
                                    pagination={true}
                                    className="mySwiper"
                                >
                                    {/* <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                > */}
                                    {products.slice(0, 4).map((item, index) => (
                                        <SwiperSlide key={index}>

                                            <ProductCard
                                                key={index} name={item.name} stock={item.stock} price={item.price} image={item.images}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper> </div>) :
                            (
                                <>
                                    {
                                        products.slice(0, 4).map((item, index) => (
                                            <ProductCard key={index} name={item.name} stock={item.stock} price={item.price} image={item.images} />
                                        ))
                                    }
                                </>)
                        }
                    </div>
                    <Link href="/products" style={{ textDecoration: 'none' }}>
                        <button className='ourProductsSectionButton'>
                            See More
                        </button>
                    </Link>
                </section>
            }
        </>
    )
};

export default OurProducts;
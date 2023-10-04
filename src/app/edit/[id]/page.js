'use client'
import React, { useEffect, useState } from 'react';
import '../designComponents/editCanvas/styles/edit.css';
import { IoPricetagsOutline } from "react-icons/io5";
import { RxCross1 } from 'react-icons/rx';
import { products } from '@/app/products/[product]/page';
import Loading from '@/component/javascripts/Loading';
import EditSidebar from '../designComponents/editSidebar/javascripts/EditSidebar';
import EditCanvas from '../designComponents/editCanvas/javascripts/editCanvas';
import EditSidebarBottom from '../designComponents/editSidebar/javascripts/EditSidebarBottom';

const Edit = ({ params }) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const productId=params.id;
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }
  const images = product.images[0]; // Use product-specific images


  useEffect(() => {
    updateScreenWidth();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  return (
    <>
 {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className='headerOfEditPage'>
            <div className='headerOfEditPageProductName'>
              <h2>Trending Hoodie Cotton-Fabric</h2>
            </div>
            <div className='headerOfEditPageButtons'>
              <button>
                <i>
                  <RxCross1 />
                </i>
              </button>
            </div>
          </header>
          {screenWidth && screenWidth > 900 ? (
            <section className='bodyOfEditPage'>
              <EditSidebar />
              <EditCanvas images={images} />
            </section>
          ) : (
            <section className='bodyOfEditPageForSmallScreen'>
              <EditCanvas images={images}/>
              <EditSidebarBottom />
            </section>
          )}

          {screenWidth && screenWidth > 900 ? (
            <footer className='footerOfEditPage'>
              <section className='footerOfEditPageContent'>
                <p>
                  <i>
                    <IoPricetagsOutline />
                  </i>
                  Rs 1850
                </p>
                <button>Add to cart</button>
              </section>
            </footer>
          ) : null}
        </>
      )}
    </>
  );
}

export default Edit;
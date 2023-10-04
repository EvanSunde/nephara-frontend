import React from 'react'
import ProductsNavbar from '../products/javascripts/ProductsNavbar';
import AccountSidebar from './components/javascripts/AccountSidebar';
import AccountPageContents from './components/javascripts/AccountPageContents';
// import './components/styles/AccountPage.css';
const MyAccount = () => {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <ProductsNavbar />
        <main 
          style={{
            display: 'flex',
            width: '100%',
            height: '45.5rem',
          }}>
          <AccountSidebar />
          <AccountPageContents />
        </main>
      </div>

    </>
  )
}

export default MyAccount;
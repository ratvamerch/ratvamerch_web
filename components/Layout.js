import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className="flex flex-col justify-center items-center overflow-hidden">
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout;
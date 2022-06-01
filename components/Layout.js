import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {useState, useEffect} from 'react';

const Layout = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full overflow-hidden box-border">
        <Navbar />
        <main className="w-screen flex flex-col justify-center items-center px-6 box-border overflow-hidden">
            {children}
        </main>
        {!mounted ? 
          null
          :
          <MessengerCustomerChat
            pageId="102905002386688"
            appId="706654517205490"
          />
        }
        <Footer />
    </div>
  )
}

export default Layout;
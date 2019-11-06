import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import Footer from '../layout/Footer';
const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='grid-2 containerPro'>
        <div className='content-wrap'>
          <ContactForm />
        </div>
        <div className='content-wrap'>
          <ContactFilter />
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

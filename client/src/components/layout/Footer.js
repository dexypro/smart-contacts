import React from 'react';

const Footer = () => {
  return (
    <footer className='footer bg-footer'>
      <div className='bg-footer'>
        <ul className='text-center my-1 '>
          <li>
            <span className='text-white'>made by</span>
          </li>
          <a href='https://www.linkedin.com/in/dejanbajovic/'>
            <li>
              <h4 className='text-light'>
                Dejan Bajović <i className='fab fa-linkedin' />
              </h4>
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

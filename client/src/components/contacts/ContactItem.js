import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const {
    _id,
    name,
    email,
    phone,
    instagram,
    facebook,
    twitter,
    youtube,
    linkedin,
    reddit,
    github,
    type
  } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase(0) + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'> {email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'> {phone}</i>
          </li>
        )}
        {instagram && (
          <li>
            <i className='fab fa-instagram'>
              {' '}
              <a
                href={`https://www.instagram.com/${instagram}`}
                alt='instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </i>
          </li>
        )}
        {facebook && (
          <li>
            <i className='fab fa-facebook-square'>
              {' '}
              <a
                href={`${facebook}`}
                alt='facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </i>
          </li>
        )}
        {twitter && (
          <li>
            <i className='fab fa-twitter-square'>
              {' '}
              <a
                href={`${twitter}`}
                alt='twitter'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </i>
          </li>
        )}
        {youtube && (
          <li>
            <i className='fab fa-youtube'>
              {' '}
              <a
                href={`${youtube}`}
                alt='youtube'
                target='_blank'
                rel='noopener noreferrer'
              >
                Youtube
              </a>
            </i>
          </li>
        )}
        {linkedin && (
          <li>
            <i className='fab fa-linkedin'>
              {' '}
              <a
                href={`${linkedin}`}
                alt='linkedin'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin
              </a>
            </i>
          </li>
        )}
        {reddit && (
          <li>
            <i className='fab fa-reddit-square'>
              {' '}
              <a
                href={`${reddit}`}
                alt='reddit'
                target='_blank'
                rel='noopener noreferrer'
              >
                Reddit
              </a>
            </i>
          </li>
        )}
        {github && (
          <li>
            <i className='fab fa-github-square'>
              {' '}
              <a
                href={`https://github.com/${github}`}
                alt='github'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </i>
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;

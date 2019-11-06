import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        instagram: '',
        facebook: '',
        twitter: '',
        youtube: '',
        linkedin: '',
        reddit: '',
        github: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    youtube: '',
    linkedin: '',
    reddit: '',
    github: '',
    type: 'personal'
  });

  const {
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

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <input
        id='instagramInput'
        type='text'
        placeholder='Instagram username'
        name='instagram'
        value={instagram}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Facebook profile link'
        name='facebook'
        value={facebook}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Twitter profile link'
        name='twitter'
        value={twitter}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Youtube profile link'
        name='youtube'
        value={youtube}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Linkedin profile link'
        name='linkedin'
        value={linkedin}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Reddit profile link'
        name='reddit'
        value={reddit}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Github username'
        name='github'
        value={github}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-add btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

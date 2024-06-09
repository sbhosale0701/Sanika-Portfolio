import React, { useState } from 'react';
import { db } from '../firebase';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        alert('Message has been submitted👍🏻');
      })
      .catch((error) => {
        alert(error.message);
      });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div name='contact' className='w-full h-screen bg-[#1a3256] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Send me a message</p>
          </div>
          <input
            className='bg-[#ccd6f6] p-2'
            type="text"
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='my-4 p-2 bg-[#ccd6f6]'
            type="email"
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='bg-[#ccd6f6] p-2'
            name="message"
            rows="5"
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;

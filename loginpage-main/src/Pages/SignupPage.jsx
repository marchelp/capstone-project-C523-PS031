import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { SignupValidation } from '../ValidatePages';
import axios from 'axios';

import logo from '../logo.png';

const initialValues = { username: '', email: '', password: '' };

const SignupPage = () => {
  const { values, errors, handleBlur, handleChange, touched } = useFormik({
    validationSchema: SignupValidation,
    initialValues: initialValues,
  });

  const signupHandle = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/register', {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      if (response.data.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white p-8 rounded-md shadow-lg flex w-full md:w-3/4 lg:w-1/2'>
        <div className='w-1/2 pr-8 flex flex-col items-center justify-center'>
          <img src={logo} alt='Logo' className='w-42 h-42 mb-2' />
          <p className='text-gray-600 text-sm text-center'>Lestari Bumi, Kurangi Plastik</p>
        </div>
        <div className='w-1/2'>
          <h4 className='font-bold text-center text-2xl mb-4'>Sign Up</h4>
          <div className='mb-4'>
            <div className='flex items-center bg-white rounded-full shadow-lg px-4'>
              <FaUserCircle className='w-6 h-6 text-violet-800 mr-2' />
              <input
                type='text'
                placeholder='Username'
                name='username'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className='flex-1 outline-none py-2'
              />
            </div>
            {errors.username && touched.username && (
              <p className='text-red-800 text-sm mt-1'>{errors.username}</p>
            )}
          </div>
          <div className='mb-4'>
            <div className='flex items-center bg-white rounded-full shadow-lg px-4'>
              <MdEmail className='w-6 h-6 text-violet-800 mr-2' />
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className='flex-1 outline-none py-2'
              />
            </div>
            {errors.email && touched.email && (
              <p className='text-red-800 text-sm mt-1'>{errors.email}</p>
            )}
          </div>
          <div className='mb-4'>
            <div className='flex items-center bg-white rounded-full shadow-lg px-4'>
              <RiLockPasswordFill className='w-6 h-6 text-violet-800 mr-2' />
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className='flex-1 outline-none py-2'
              />
            </div>
            {errors.password && touched.password && (
              <p className='text-red-800 text-sm mt-1'>{errors.password}</p>
            )}
          </div>
          <div className='flex justify-center'>
            <button
              onClick={signupHandle}
              className='bg-violet-800 px-4 py-2 text-white text-xl rounded-md'
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

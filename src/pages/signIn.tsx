// Import necessary modules and components
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../auth/AuthContext';
import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import Button from '../components/Button';
import CardBox from '../components/CardBox';
import SectionFullScreen from '../components/Section/FullScreen';
import LayoutGuest from '../layouts/Guest';
import FormField from '../components/Form/Field';
import Divider from '../components/Divider';
import Buttons from '../components/Buttons';
import { getPageTitle } from '../config';

// Define the initial form values
const initialValues = {
  email: '',
  password: '',
  remember: false,
};

const LoginPage = () => {
  const router = useRouter();
  const { adminLogin } = useAuth();
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (formValues) => {
    try {
      // Send a POST request to your backend for user authentication
      const response = await fetch('http://localhost:4000/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log('Token:', token);
        
        // Simpan token di local storage
        localStorage.setItem('adminToken', token);

        // Jika Anda memiliki data admin yang perlu disimpan, Anda dapat menyimpannya di local storage juga
        // const adminData = await response.json();
        // localStorage.setItem('adminData', JSON.stringify(adminData.admin));

        // Lakukan login dengan token
        adminLogin();

        // If authentication is successful, redirect to the dashboard
        router.push('/dashboard');
      } else {
        // If authentication fails, display an error message
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Email" help="Please enter your email">
                <Field type="email" name="email" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field type="password" name="password" />
              </FormField>

              {error && <p className="text-red-500">{error}</p>}

              <a href="./signUp" className="text-blue-500">
                Belum punya akun? buat disini
              </a>
              <Divider />

              <Buttons>
                <Button type="submit" label="Login" color="info" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <LayoutGuest>{page}</LayoutGuest>;
};

export default LoginPage;

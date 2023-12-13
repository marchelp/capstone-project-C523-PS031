// SignupPage.js
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import FormField from '../components/Form/Field'
import Divider from '../components/Divider'
import Buttons from '../components/Buttons'
import { getPageTitle } from '../config'

// Define the initial form values
const initialValues = {
  name: '',
  email: '',
  password: '',
}

const SignupPage = () => {
  const router = useRouter()
  const [error, setError] = useState(null)

  // Handle form submission
  const handleSubmit = async (formValues) => {
    try {
      // Send a POST request to your backend for admin registration
      const response = await fetch('http://localhost:4000/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        alert('akun berhasil dibuat')
        // If registration is successful, redirect to the login page
        router.push('/signIn')
      } else {
        // If registration fails, display an error message
        const data = await response.json()
        setError(data.error)
      }
    } catch (error) {
      console.error('Error during admin registration:', error)
    }
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Admin Signup')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Name" help="Please enter your name">
                <Field type="text" name="name" required/>
              </FormField>

              <FormField label="Email" help="Please enter your email">
                <Field type="email" name="email" required/>
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field type="password" name="password" required/>
              </FormField>

              {error && <p className="text-red-500">{error}</p>}

              <a href="./signIn" className="text-blue-500">
                Sudah punya akun? Masuk disini
              </a>
              <Divider />

              <Buttons>
                <Button type="submit" label="Signup" color="info" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

SignupPage.getLayout = function getLayout(page) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default SignupPage

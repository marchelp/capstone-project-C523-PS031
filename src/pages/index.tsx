import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../stores/hooks';
import { setDarkMode } from '../stores/darkModeSlice';
import LayoutGuest from '../layouts/Guest';
import { appTitle } from '../config';

const IndexPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    // Set dark mode to false when the component mounts
    dispatch(setDarkMode(false));

    // Redirect to /login
    router.push('/signIn');
  }, [dispatch, router]);

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};

export default IndexPage;

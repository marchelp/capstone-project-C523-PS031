// withAdminAuth.js
import { useAuth } from './AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAdminAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isAdminAuthenticated, adminLogin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      // Cek apakah ada token di local storage
      const adminToken = localStorage.getItem('adminToken');

      if (!isAdminAuthenticated && !adminToken) {
        router.push('/signIn'); // Redirect to login page if not authenticated and no token
      } else if (!isAdminAuthenticated && adminToken) {
        // Jika ada token, lakukan login dengan token
        adminLogin();
      }
    }, [isAdminAuthenticated, adminLogin, router]);

    if (!isAdminAuthenticated) {
      // You can also show a loading spinner here while checking authentication
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAdminAuth;

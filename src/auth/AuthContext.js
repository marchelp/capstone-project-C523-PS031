// AuthContext.js
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    isAdminAuthenticated: false,
    admin: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADMIN_LOGIN':
        return {
          ...state,
          isAdminAuthenticated: true,
          admin: action.payload,
        };
      case 'ADMIN_LOGOUT':
        // Clear tokens and other relevant data when logging out
        localStorage.removeItem('isAdminAuthenticated');
        localStorage.removeItem('admin');
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const adminLogin = (admin) => {
    dispatch({ type: 'ADMIN_LOGIN', payload: admin });
  };

  const adminLogout = () => {
    dispatch({ type: 'ADMIN_LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

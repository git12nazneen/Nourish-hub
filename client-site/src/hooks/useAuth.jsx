import{ useContext } from 'react';
import { AuthContext } from '../routes/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;
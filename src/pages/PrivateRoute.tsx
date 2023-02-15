import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
// will remove later
import { useUserContext } from '../context/user_context';
import { InputProviderProps } from '../types/globaltypes.types';

const PrivateRoute = ({ children }: InputProviderProps) => {
    const { currentUser } = useUserContext()
    const navigate = useNavigate()
    if (!currentUser) {
        return <Navigate to="/" />
    }
    return children;
};
export default PrivateRoute;

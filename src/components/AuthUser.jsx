import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const AuthUser = () => {
    const context = useContext(AuthContext)
    return context.users?.token ? (
        <Outlet />
    ) : (
        <Navigate to={'/login'} replace />
    )
}

export default AuthUser

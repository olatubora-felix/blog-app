import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const AuthUser = () => {
    const context = useContext(AuthContext)
    console.log(context.users)
    return context.users?.token ? (
        <Outlet />
    ) : (
        <Navigate to={'/posts'} replace />
    )
}

export default AuthUser

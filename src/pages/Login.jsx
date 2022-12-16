import { Button } from '@material-tailwind/react'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../components/Login/CustomInput'
import AuthContext from '../context/auth/authContext'

const Login = () => {
    const context = useContext(AuthContext)
    const Navigate = useNavigate()
    const {
        username,
        password,
        handleUsername,
        handlePassword,
        handleSubmit,
        users,
        loading,
        error,
    } = context

    useEffect(() => {
        if (users?.token) {
            return Navigate('/dashboard')
        }

        return
    }, [Navigate, users])

    return (
        <main className="py-6">
            <form
                className="mx-auto w-full md:w-[50%]  py-2 px-4 md:py-0 md:px-0 flex justify-center items-center flex-col"
                onSubmit={handleSubmit}
            >
                {error ? (
                    <div className="text-center bg-red-500 w-full text-white p-2 my-2 rounded-md">
                        <h1>{error}</h1>
                    </div>
                ) : null}
                <CustomInput
                    label="Enter Username"
                    type="text"
                    onChange={handleUsername}
                    value={username}
                />

                <CustomInput
                    label="Enter Password"
                    openEyes={'bi bi-eye'}
                    closeEyes={'bi bi-eye-slash'}
                    type="password"
                    onChange={handlePassword}
                    value={password}
                />
                <Button type="submit" fullWidth className="cursor-pointer">
                    {loading ? 'Loading...' : 'Sign Up'}
                </Button>
            </form>
        </main>
    )
}

export default Login

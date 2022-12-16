import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthUser from './components/AuthUser'
import MenuBar from './components/layouts/MenuBar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Posts from './pages/Posts'
import Profile from './pages/Profile'
import { QueryClient, QueryClientProvider } from 'react-query'

import SinglePost from './pages/SinglePost'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <MenuBar />
                <Routes>
                    <Route path="/" element={<AuthUser />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:postId" element={<SinglePost />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App

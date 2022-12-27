import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

import AuthContext from '../auth/authContext'
const BASE_URL = 'https://dummyjson.com'

const PostContext = createContext({
    fetchUserPost: () => {},
    fetchPostCommentById: () => {},
    onSearchChange: () => {},
    search: '',
    posts: [],
    status: '',
    isError: '',
    handleSearch: () => {},
    fetchPost: () => {},
})

export const PostContextProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState('')
    const [posts, setPosts] = useState([])
    const [status, setStatus] = useState('idle')
    const [isError, setIsError] = useState('')
    const usersContext = useContext(AuthContext)
    const { users } = usersContext

    const fetchUserPost = async () => {
        const { data } = await axios.get(`${BASE_URL}/posts/user/${users?.id}`)
        return data
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const getPost = async () => {
            setStatus('loading')
            try {
                //res.data
                const { data } = await axios.get(
                    result
                        ? `${BASE_URL}/posts/search?q=${result}`
                        : `${BASE_URL}/posts`
                )
                if (data) {
                    setPosts(data.posts)
                    setStatus('success')
                }
            } catch (error) {
                setIsError(error.message)
                setStatus(false)
                setStatus('failed')
            }
        }
        getPost()
    }, [result])

    setTimeout(() => {
        if (posts.length === 0) {
            setResult('')
        }
    }, 5000)

    const handleSearch = () => {
        if (search && search !== '') {
            setResult(search)
            setSearch('')
        }
    }

    // Get Single User
    const fetchPost = async (postId) => {
        const { data } = await axios.get(`${BASE_URL}/posts/${postId}`)
        return data
    }

    // Get Comment
    const fetchPostCommentById = async (postId) => {
        const { data } = await axios.get(`${BASE_URL}/comments/post/${postId}`)
        return data
    }

    return (
        <PostContext.Provider
            value={{
                fetchUserPost,
                fetchPostCommentById,
                onSearchChange,
                search,
                posts,
                status,
                isError,
                handleSearch,
                fetchPost,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export default PostContext

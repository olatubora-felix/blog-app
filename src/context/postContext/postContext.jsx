import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

import AuthContext from '../auth/authContext'
const BSAE_URL = 'https://dummyjson.com'

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
    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const fetchUserPost = async () => {
        const { data } = await axios.get(`${BSAE_URL}/posts/user/${users?.id}`)
        return data
    }

    useEffect(() => {
        const getPost = async () => {
            setStatus('loading')
            try {
                const { data } = await axios.get(
                    result
                        ? `${BSAE_URL}/posts/search?q=${result}`
                        : `${BSAE_URL}/posts`
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
        const { data } = await axios.get(`${BSAE_URL}/posts/${postId}`)
        return data
    }

    // Get Comment
    const fetchPostCommentById = async (postId) => {
        const { data } = await axios.get(`${BSAE_URL}/comments/post/${postId}`)
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

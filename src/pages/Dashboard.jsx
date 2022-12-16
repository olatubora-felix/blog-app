import { useContext } from 'react'
import PostItems from '../components/posts/PostItems'
import PostContext from '../context/postContext/postContext'
import { useQuery } from 'react-query'
import Loading from '../components/loading/Loading'
import AuthContext from '../context/auth/authContext'

const Dashboard = () => {
    const postContext = useContext(PostContext)
    const { fetchUserPost } = postContext
    const usersContext = useContext(AuthContext)
    const { users } = usersContext

    const { status, data, isError } = useQuery(['usersPost'], () =>
        fetchUserPost()
    )
    let content

    if (status === 'loading') {
        return <Loading />
    } else if (status === 'success') {
        content = (
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
                {data &&
                    data.posts?.map((post) => (
                        <PostItems key={post.id} post={post} />
                    ))}
            </div>
        )
    } else if (status === 'error') {
        content = <h2>{isError}</h2>
    }
    return (
        <main className="mx-auto container py-6  px-4">
            <h2 className=" text-right text-3xl my-4 text-blue-500 font-semibold">
                {users?.username}
            </h2>
            {content}
        </main>
    )
}

export default Dashboard

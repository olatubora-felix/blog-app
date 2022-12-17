import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PostContext from '../context/postContext/postContext'
import { useQuery } from 'react-query'
import Loading from '../components/loading/Loading'
import AuthContext from '../context/auth/authContext'
import Comments from '../components/posts/Comments'
import { Button } from '@material-tailwind/react'

const SinglePost = () => {
    const { postId } = useParams()
    const context = useContext(PostContext)
    const auth = useContext(AuthContext)

    const Navigate = useNavigate()

    const { users } = auth
    const { fetchPost } = context
    const { status, data, isError } = useQuery(['comments'], () =>
        fetchPost(postId)
    )
    // console.log(data)

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'error') {
        return <h2>{isError.message}</h2>
    }
    return (
        <main className="mx-auto container py-6 px-4">
            <div className="flex justify-between items-center mb-3">
                <Button onClick={() => Navigate(-1)} variant="text">
                    Back
                </Button>
                {users.id === data?.userId ? (
                    <h2 className="font-bold text-2xl text-blue-600">
                        <span className="mr-2 text-xs md:text-lg">
                            {users.firstName}
                        </span>
                        <span className="text-xs md:text-lg">
                            {users.lastName}
                        </span>
                    </h2>
                ) : null}
            </div>

            <h2 className="my-4 font-bold md:text-2xl text-sm">
                {data?.title}
            </h2>
            <p>{data?.body}</p>
            <div className="my-4">
                Tags:
                {data?.tags.map((tag) => (
                    <span className="font-normal mx-3 text-blue-500" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>

            {users.token ? (
                <Comments postId={data?.id} />
            ) : (
                <Link
                    to={'/login'}
                    className="font-bold text-2xl text-blue-700 flex justify-end"
                >
                    Login to see comments
                </Link>
            )}
        </main>
    )
}

export default SinglePost

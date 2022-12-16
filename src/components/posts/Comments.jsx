import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import PostContext from '../../context/postContext/postContext'
import Loading from '../loading/Loading'

const Comments = ({ postId }) => {
    const postContext = useContext(PostContext)
    const { fetchPostCommentById } = postContext
    const { status, data, isError } = useQuery(['usersPost'], () =>
        fetchPostCommentById(postId)
    )

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'error') {
        return <h2>{isError.message}</h2>
    }

    return (
        <section>
            <div>
                {data.comments?.map((comment) => (
                    <div
                        className="border border-gray-700 w-full md:w-[50%] p-4 my-4"
                        key={comment.id}
                    >
                        <h2>{comment.body}</h2>
                        <div className="flex justify-end">
                            <h2 className="my-2 text-sm opacity-60 text-gray-700">
                                Comment By{' '}
                                <span className="font-bold text-blue-400">
                                    {comment.user?.username}
                                </span>
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comments

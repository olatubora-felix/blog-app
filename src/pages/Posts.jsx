import React, { useContext } from 'react'
import PostItems from '../components/posts/PostItems'
import PostContext from '../context/postContext/postContext'

import Search from '../components/search/Search'
import Loading from '../components/loading/Loading'

const Posts = () => {
    const postsContext = useContext(PostContext)
    const { posts, isError, status } = postsContext
    if (status === 'loading') {
        return <Loading />
    }
    if (isError) {
        return <h1>{isError.message}</h1>
    }

    return (
        <main className="mx-auto container p-4">
            <Search />
            {posts.length > 0 ? (
                <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                    {posts?.map((post) => (
                        <PostItems key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <h2 className="font-bold text-3xl text-blue-500">
                    No Post Found
                </h2>
            )}
        </main>
    )
}

export default Posts

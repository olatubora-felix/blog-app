import React from 'react'
import { Link } from 'react-router-dom'

const PostItems = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                        {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        {post.body}
                    </p>
                    <div className="">
                        <div className="text-blue-600 my-2">
                            Tags:{' '}
                            {post.tags?.map((tag, i) => (
                                <span
                                    key={i}
                                    className="mx-1 text-blue-400 opacity-70 text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default PostItems

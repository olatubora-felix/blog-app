import React from 'react'
import { Link } from 'react-router-dom'

const PostItems = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
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

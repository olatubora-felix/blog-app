import React, { useContext } from 'react'
import { Input } from '@material-tailwind/react'
import PostContext from '../../context/postContext/postContext'

const Search = () => {
    const searchContext = useContext(PostContext)
    const { search, onSearchChange, handleSearch } = searchContext

    return (
        <div className="w-full md:w-[300px] py-6">
            <Input
                label="Search Posts..."
                icon={
                    <i
                        className="bi bi-search cursor-pointer"
                        onClick={handleSearch}
                    />
                }
                value={search}
                onChange={onSearchChange}
                type="search"
            />
        </div>
    )
}

export default Search

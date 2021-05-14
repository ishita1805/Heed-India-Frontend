import React from 'react'
import Posts from '../../../components/post/Posts'
import './viewBlogs.css'

const ViewBlogs = () => {
    return (
        <div className="in-body padding-t-12 arrange-center-blogs">
            <h1>All Blogs by Heed India</h1>
            <Posts mode='edit' color='white'/>
        </div>
    )
}

export default ViewBlogs

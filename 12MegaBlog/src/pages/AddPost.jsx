import React from 'react'
import PostForm from '../components/post-form/PostForm'
import { useSelector } from 'react-redux'

function AddPost() {
    const userData = useSelector((state) => state.auth.userData);

    if (!userData) {
        return <div className="text-center mt-10">Loading user data...</div>;
    }

    return (
        <div className="py-8">
            <PostForm />
        </div>
    );
}

export default AddPost;

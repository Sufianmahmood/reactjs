import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null); // ✅ Renamed to singular 'setPost'
    const { slug } = useParams();
    const navigate = useNavigate();

    // ✅ useEffect instead of useNavigate for side effects
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((fetchedPost) => {
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    navigate('/');
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8'>
            <Container>
                <h1 className="text-2xl font-bold mb-4 text-center">Edit Post</h1>
                <PostForm post={post} />
            </Container>
        </div>
    ) : (
        <div className='py-8 text-center text-lg font-semibold'>Loading post...</div>
    );
}

export default EditPost;

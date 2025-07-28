import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        appwriteService.getPosts().then((result) => {
            if (result && Array.isArray(result.documents)) {
                setPosts(result.documents);
            } else {
                setPosts([]);
            }
        }).catch((error) => {
            console.error("Error fetching posts:", error);
            setPosts([]);
        });
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className='w-full text-center'>
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {authStatus ? 'No posts available' : 'Login to read posts'}
                            </h1>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Home;

import React,  {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import  appwriteService  from "../appwrite/config.js"

function AllPosts() {
 
      const [posts, setPosts] = useState([])
       useEffect(() => {}, [])
       appwriteService.getPosts([]).then((posts) =>  {
        if(posts) {
          setPosts(posts.documents)
        }
       })
      
      
      return (
       <div className='w-full py-8'>
        <Container> 
            {posts.map((post) => (
              <div key ={post.$id} className='p-2 w-1'>
              <PostCard post={post} />
              </div>
            ))}
        </Container>
       </div>
      )


  
}

export default AllPosts

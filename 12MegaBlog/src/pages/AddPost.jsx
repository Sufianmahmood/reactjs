import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components' 
import appwriteService from "../appwrite/config"


function AddPost() {
  return (
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost

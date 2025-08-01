import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, feauturedImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl p-4 shadow hover:shadow-md transition">
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={appwriteService.getFilePreview(feauturedImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard

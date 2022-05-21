// TODO: answer here
import React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import { getSession, auth } from "../api/auth"
import P_API from "../api/post"

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  const [data, setData] = useState({
    content: "",
    image: "",
  })

  const handleEventonChange = (event) => {
    setData({...data, content: event.target.value});
  }

  const handleEventonChangeImage = (event) => {
    setData({...data, image: event.target.files[0]});
    // console.log(event.target.files[0])
  }

  const postUploadForm = async (e) => {
    e.preventDefault();
    try {
      const dataForm = new FormData();
      dataForm.append("content", data.content);
      dataForm.append("image", data.image);
      const POST_UPLOAD_API_URL = await axios.post(`${P_API.POST_URL}`, dataForm, {"withCredentials" : true});
      console.log(POST_UPLOAD_API_URL)
      const POST_UPLOAD_RESULT = POST_UPLOAD_API_URL.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Upload Form" aria-label="Upload Form">
      <form onSubmit={postUploadForm}>
        <input type="text" name="caption" placeholder="caption" aria-label="Caption Input" onChange={handleEventonChange} />
        <input type="file" name="image" placeholder="Image" aria-label="Image Input" accept="image/png, image/jpg, image/gif" onChange={handleEventonChangeImage}/>
        <button type="submit" aria-label="Submit Button">Upload</button>
      </form>
    </div>
  );
}
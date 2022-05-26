// TODO: answer here
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSession, auth } from "../api/auth";
import P_API from "../api/post";

import {
  Input,
  FormControl,
  FormLabel,
  Container,
  Button,
} from "@chakra-ui/react";

export default function UploadForm() {
  // TODO: answer here
  const [data, setData] = useState({
    content: "",
    image: "",
  });

  const handleEventonChange = (event) => {
    setData({ ...data, content: event.target.value });
  };

  const handleEventonChangeImage = (event) => {
    setData({ ...data, image: event.target.files[0] });
    // console.log(event.target.files[0])
  };

  const postUploadForm = async (e) => {
    e.preventDefault();
    try {
      const dataForm = new FormData();
      dataForm.append("content", data.content);
      dataForm.append("image", data.image);
      const POST_UPLOAD_API_URL = await axios.post(
        `${P_API.POST_URL}`,
        dataForm,
        { withCredentials: true }
      );
      console.log(POST_UPLOAD_API_URL);
      const POST_UPLOAD_RESULT = POST_UPLOAD_API_URL.data;
      console.log(POST_UPLOAD_RESULT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxW="container.md" my={8}>
        <FormControl
          as="form"
          aria-label="Upload Form"
          onSubmit={postUploadForm}
        >
          <FormLabel color="white">Caption</FormLabel>
          <Input
            aria-label="Caption Input"
            id="caption"
            name="caption"
            onChange={handleEventonChange}
            type="text"
            color="white"
            placeholder="Write a caption to your post"
          />

          <FormLabel mt={8}></FormLabel>
          <Input
            aria-label="Image Input"
            id="image"
            name="image"
            onChange={handleEventonChangeImage}
            type="file"
            accept="image/png, image/jpg, image/gif"
            pt={1}
            color="white"
          />

          <Button
            type="submit"
            aria-label="Submit Button"
            colorScheme="blue"
            mt={8}
          >
            Upload
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

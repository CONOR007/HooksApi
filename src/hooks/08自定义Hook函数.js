import { useState, useEffect} from "react";
import axios from "axios";

function useGetPost () {
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      setPost(response.data)
    })
  }, [])
  return [post, setPost]
}

export default function App () {
  const [post, setPost] = useGetPost()
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  )
}

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

function Post({ post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API_URL}/comments?post=${post._id}`);
      setComments(res.data.data);
    } catch (error) {
      alert("Could not fetch comments");
      console.log(error);
    }
  }

  const { author } = post;

  return (
    <Card className="mt-2">
      <Card.Header as="h5">
        @{author.username} ({author.fullName})
      </Card.Header>
      <Card.Body className="m-3 p-2">
        <Card.Text>{post.content}</Card.Text>
        <Button variant="primary" size="sm" className="me-2 mb-2">
          Like 👍
        </Button>
        <Button variant="secondary" size="sm" className="mb-2">
          Comment 💬
        </Button>
        <ListGroup variant="flush">
          {comments.map((c) => (
            <ListGroup.Item key={c._id}>
              @{c.author.username}: {c.content}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Post;

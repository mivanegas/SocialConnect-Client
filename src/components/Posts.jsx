import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post({ currentUser }) {
  return (
    <Card className="mb-3">
      <Card.Header>{currentUser.username} · just now</Card.Header>
      <Card.Body>
        <Card.Text>
          Loving the sunny weather today! ☀️ Perfect day for a walk in the park.
        </Card.Text>
        <Button variant="outline-primary" size="sm" className="me-2">
          👍 Like
        </Button>
        <Button variant="outline-secondary" size="sm">
          💬 Comment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;

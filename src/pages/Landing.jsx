import Post from "../components/Posts";

function Landing({ currentUser }) {
  return (
    <div>
      <h1 className="display-4">Posts</h1>
      <Post currentUser={currentUser} />
    </div>
  );
}

export default Landing;

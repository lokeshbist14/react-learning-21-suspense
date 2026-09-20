import { use } from "react";

const userPromise = fetch(
  "https://jsonplaceholder.typicode.com/users/1"
).then((response) => response.json());

const postsPromise = fetch(
  "https://jsonplaceholder.typicode.com/posts?userId=1"
).then((response) => response.json());

function UserDashboard() {
  const user = use(userPromise);
  const posts = use(postsPromise);

  return (
    <div>
      <h3>User Dashboard</h3>

      <h4>User Information</h4>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <hr />

      <h4>Posts</h4>

      {posts.slice(0, 3).map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserDashboard;
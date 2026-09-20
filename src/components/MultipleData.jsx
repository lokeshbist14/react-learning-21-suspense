import { use } from "react";

const userPromise = fetch(
  "https://jsonplaceholder.typicode.com/users/1"
).then((response) => response.json());

const postPromise = fetch(
  "https://jsonplaceholder.typicode.com/posts/1"
).then((response) => response.json());

function MultipleData() {
  const user = use(userPromise);
  const post = use(postPromise);

  return (
    <div>
      <h3>User</h3>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <hr />

      <h3>Post</h3>

      <p>Title: {post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default MultipleData;
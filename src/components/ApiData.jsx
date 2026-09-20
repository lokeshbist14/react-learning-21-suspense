import { use } from "react";

const userPromise = fetch(
  "https://jsonplaceholder.typicode.com/users/1"
).then((response) => response.json());

function ApiData() {
  const user = use(userPromise);

  return (
    <div>
      <h3>API User</h3>

      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ApiData;
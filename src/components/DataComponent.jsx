import { use } from "react";

const userPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      name: "Lokesh",
      role: "React Learner",
    });
  }, 3000);
});

function DataComponent() {
  const user = use(userPromise);

  return (
    <div>
      <h3>👤 User Data</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default DataComponent;
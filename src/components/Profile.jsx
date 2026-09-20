import { lazy, Suspense } from "react";

const UserComponent = lazy(() =>
  import("./UserComponent")
);

const ProductComponent = lazy(() =>
  import("./ProductComponent")
);

function Profile() {
  return (
    <div>
      <h3>Profile</h3>

      <Suspense fallback={<p>⏳ Loading user...</p>}>
        <UserComponent />
      </Suspense>

      <Suspense fallback={<p>⏳ Loading product...</p>}>
        <ProductComponent />
      </Suspense>
    </div>
  );
}

export default Profile;
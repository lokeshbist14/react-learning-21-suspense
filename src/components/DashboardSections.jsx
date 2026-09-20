import { lazy, Suspense } from "react";

const UserSection = lazy(() =>
  import("./UserSection")
);

const ProductSection = lazy(() =>
  import("./ProductSection")
);

function DashboardSections() {
  return (
    <div>
      <h3>Dashboard</h3>

      <Suspense fallback={<p>⏳ Loading Users...</p>}>
        <UserSection />
      </Suspense>

      <hr />

      <Suspense fallback={<p>⏳ Loading Products...</p>}>
        <ProductSection />
      </Suspense>
    </div>
  );
}

export default DashboardSections;
import { useState, lazy, Suspense } from "react";

const ToggleComponent = lazy(() =>
  import("./ToggleComponent")
);

function ToggleExample() {
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow((previous) => !previous);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && (
        <Suspense fallback={<p>⏳ Loading...</p>}>
          <ToggleComponent />
        </Suspense>
      )}
    </div>
  );
}

export default ToggleExample;
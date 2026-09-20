import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const AboutPage = lazy(() => import("./AboutPage"));

function RouterExample() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>
        </nav>

        <hr />

        <Suspense fallback={<h3>⏳ Loading Page...</h3>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default RouterExample;
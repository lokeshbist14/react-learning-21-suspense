import React from 'react'
import { Suspense } from 'react'
import LazyComponent from './components/LazyComponent'
import UserComponent from './components/UserComponent';
import ProductComponent from './components/ProductComponent';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import Profile from './components/Profile';
import ToggleExample from './components/ToggleExample';
import SimpleErrorBoundary from './components/SimpleErrorBoundary';
import ErrorComponent from './components/ErrorComponent';
import DataComponent from './components/DataComponent';
import RouterExample from './components/RouterExample';
import DashboardSections from './components/DashboardSections';
import ApiData from './components/ApiData';
import MultipleData from './components/MultipleData';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div>
      <h1>21 - React Suspense</h1>

      <h2>Example 1 - Basic Suspense</h2>

      <Suspense fallback={<p>Loading component...</p>}>
      <LazyComponent />
      </Suspense>
      <hr />

      <h2>Example 2 - Lazy Loading</h2>

      <Suspense fallback={<h3>Please wait...</h3>}>
      <LazyComponent />
      </Suspense>
      <hr />

      <h2>Example 3 - Multiple Component</h2>

      <Suspense fallback={<p>Loading Component...</p>}>
      <LazyComponent />
      <UserComponent />
      </Suspense>
      <hr />

      <h2>Example 4 - Separate Suspense</h2>

      <Suspense fallback={<p>Loading User...</p>}>
      <UserComponent />
      </Suspense>

      <Suspense fallback={<p>Loading Product...</p>}>
      <ProductComponent />
      </Suspense>
      <hr />
      
      <h2>Example 5 - Lazy Dashboard</h2>

      <Suspense fallback={<h3>Loading Dashboard...</h3>}>
      <Dashboard />
      </Suspense>
      <hr />

      <h2>Example 6 - Loading Component</h2>

      <Suspense fallback={<Loading />}>
      <Dashboard />
      </Suspense>
      <hr />

      <h2>Example 7 - Nested Suspense</h2>

      <Profile />
      <hr />

      <h2>Example 8 - Suspense + useState</h2>

      <ToggleExample />
      <hr />

      <h2>Example 9 - Suspense + Error Boundary</h2>

      <SimpleErrorBoundary >
        <Suspense fallback={<p>Loading...</p>}>
        <ErrorComponent />
        </Suspense>
      </SimpleErrorBoundary>
      <hr />

      <h2>Example 10 - Suspense + Data Loading</h2>

      <Suspense fallback={<h3>Loading user data...</h3>}>
      <DataComponent />
      </Suspense>
      <hr />

      <h2>Example 11 - Suspense + React Router</h2>

      <RouterExample />
      <hr />

      <h2>Example 12 - Nested Loading UI</h2>

      <DashboardSections />
      <hr />

      <h2>Example 13 - Suspense + React API</h2>

      <Suspense fallback={<h3>Loading API data...</h3>}>
      <ApiData />
      </Suspense>
      <hr />

      <h2>Example 14 - Suspense + Multiple Data</h2>

      <Suspense fallback={<h3>Loading user and post...</h3>}>
      <MultipleData />
      </Suspense>
      <hr />

      <h2>Example 15 - Complete Suspense Project</h2>

      <Suspense fallback={<h3>Loading User Dashboard...</h3>}>
      <UserDashboard />
      </Suspense>
    </div>
  );
}

export default App;

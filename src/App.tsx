import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";
import ResultsPage from "./pages/ResultsPage/ResultsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/resultsSearch",
    element: <ResultsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

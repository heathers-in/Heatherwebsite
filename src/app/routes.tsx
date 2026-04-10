import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { InteractiveCV } from "./pages/InteractiveCV";
import { CV } from "./pages/CV";
import { Personal } from "./pages/Personal";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "interactive-cv", Component: InteractiveCV },
      { path: "projects", element: <Navigate to="/work" replace /> },
      { path: "cv", Component: CV },
      { path: "personal", Component: Personal },
      { path: "*", Component: NotFound },
    ],
  },
]);

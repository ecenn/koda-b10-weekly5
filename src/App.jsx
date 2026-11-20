import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Track from "./pages/Track";
import Help from "./pages/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />
  },
  {
    path: "/feed",
    element:  <Feed />
  },
  {
    path: "/track",
    element:  <Track />
  },
  {
    path: "/help",
    element:  <Help />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

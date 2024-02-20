import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import VideoPlayer from "./VideoPlayer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: <VideoPlayer />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </div>
  );
};

export default Body;

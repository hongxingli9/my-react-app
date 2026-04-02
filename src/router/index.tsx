import { createBrowserRouter } from "react-router";
// import { RouterProvider } from 'react-router/dom';
import { Button } from "@/components/ui/button";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello World <Button>Click me</Button>
      </div>
    ),
  },
]);

export default router;

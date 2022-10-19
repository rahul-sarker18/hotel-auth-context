import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/minrout";

function App() {
  return (
    <div className="w-4/5 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

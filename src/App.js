import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import './styles.scss'

const Layout = () => {

  return (
    <>
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

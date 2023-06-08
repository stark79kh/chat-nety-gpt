import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Login from "./page/Login";
import Chat from "./page/Chat";
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
    path: "/chat",
    element: <Layout/>,
    children: [
      {
        path: "/chat",
        element: <Chat/>,
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

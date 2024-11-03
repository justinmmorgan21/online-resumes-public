import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios';
import { Header } from "./Header";
import { StudentsPage } from "./StudentsPage";
import { Footer } from "./Footer";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <StudentsPage />,
        loader: ()=> 
          [
            {
              //dummy data goes here
              first_name: "bob"
            }
          ]
          // axios.get("http://localhost:3000/students.json").then(response => response.data)
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
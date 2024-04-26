import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Produtos from "./pages/produtos";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Produtos/>
    }
])

export default function App() {
    return <RouterProvider router={router}/>
}
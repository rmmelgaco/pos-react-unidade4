import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Produtos from "./pages/produtos";
import Index from "./pages/detalheproduto";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Produtos/>
    },
    {
        path: '/produto/:idProduto',
        element: <Index/>
    }
])

export default function App() {
    return <RouterProvider router={router}/>
}
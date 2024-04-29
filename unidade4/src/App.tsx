import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Produtos from "./pages/produtos";
import DetalheProduto from "./pages/detalheproduto";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Produtos/>
    },
    {
        path: '/produto/:idProduto',
        element: <DetalheProduto/>
    },
    {
        path: '/produtos-categoria/:categoria',
        element: <Produtos/>
    }
])

export default function App() {
    return <RouterProvider router={router}/>
}
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Produtos from "./pages/produtos";
import DetalheProduto from "./pages/detalheproduto/detalheProduto.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Produtos/>
    },
    {
        path: '/produto/:idProduto',
        element: <DetalheProduto/>
    }
])

export default function App() {
    return <RouterProvider router={router}/>
}
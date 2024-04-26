import IProduct from "../../interfaces/iProduct.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function DetalheProduto() {

    const {idProduto} = useParams();
    const [product, setProduct] = useState<IProduct>({} as IProduct)

    function recuperaProduto() {
        axios.get(`https://dummyjson.com/products/${idProduto}`).then(
            (response) => {
                console.log(response.data)
                setProduct(response.data)
            }
        ).catch(error => {
            alert(`Erro ao carregar produtos: ${error}`)
        })
    }

    useEffect(() => {
        recuperaProduto()
    }, [])

    return <h1>{product.title}</h1>
}
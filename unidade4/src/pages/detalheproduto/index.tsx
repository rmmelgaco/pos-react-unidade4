import IProduct from "../../interfaces/iProduct.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import './index.css'

export default function Index() {

    const {idProduto} = useParams();
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const navigate = useNavigate()

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

    return (
        <div className='container_detalhe_produto'>
            <h2>{product.category}</h2>
            <h1>{product.title} - {product.brand} </h1>
            <h3>{product.description}</h3>
            <p>R${product.price} ({product.discountPercentage}% de desconto)</p>
            <p>{product.stock} itens em estoque</p>
            <img src={product.thumbnail}/>
            <button onClick={() => navigate('/')}>Voltar</button>
        </div>
    )
}
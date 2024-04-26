import axios from "axios";
import {useEffect, useState} from "react";
import Produto from "../../interfaces/iProduct.tsx";

export default function Produtos() {

    const [products, setProducts] = useState<Produto[]>([])

    function recuperaProdutos() {
        axios.get('https://dummyjson.com/products').then(
            (response) => {
                setProducts(response.data.products)
            }
        ).catch(error => {
            alert(`Erro ao carregar produtos: ${error}`)
        })
    }

    useEffect(() => {
        recuperaProdutos()
    }, [])

    return (<div>
        <h3>Produtos</h3>
        {products.map(produto => {
            return (<div>
                <p>{produto.title}</p>
            </div>)
        })}
    </div>)
}
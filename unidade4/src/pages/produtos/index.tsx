import axios from "axios";
import {useEffect, useState} from "react";
import iProduct from "../../interfaces/iProduct.tsx";
import Produto from "../../components/produto";
import './style.css'

export default function Produtos() {

    const [products, setProducts] = useState<iProduct[]>([])

    function recuperaProdutos() {
        axios.get('https://dummyjson.com/products').then(
            (response) => {
                console.log(response.data.products)
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
        <div className='listaProdutos'>{products.map(product => {
            return (<Produto key={product.id} product={product}/>)
        })}
        </div>
    </div>)
}
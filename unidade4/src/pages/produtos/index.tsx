import axios from "axios";
import {useEffect, useState} from "react";
import iProduct from "../../interfaces/iProduct.tsx";
import Produto from "../../components/produto";
import './style.css'
import MenuCategoriasProdutos from "../../components/menucategoriasprodutos";
import {useParams} from "react-router-dom";

export default function Produtos() {

    const {categoria} = useParams();
    const [products, setProducts] = useState<iProduct[]>([])

    function recuperaProdutos() {
        let url = 'https://dummyjson.com/products';
        if (categoria && categoria !== 'TODAS') {
            url += `/category/${categoria}`
        }
        axios.get(url).then(
            (response) => {
                setProducts(response.data.products)
            }
        ).catch(error => {
            alert(`Erro ao carregar produtos: ${error}`)
        })
    }

    useEffect(() => {
        recuperaProdutos()
    }, [categoria])

    return (<div>
        <MenuCategoriasProdutos/>
        <h1 className='tituloPaginaProdutos'>Produtos {categoria && categoria !== 'TODAS' ? " - " + categoria : ""}</h1>
        <div className='listaProdutos'>{products.map(product => {
            return (<Produto key={product.id} product={product}/>)
        })}
        </div>
    </div>)
}
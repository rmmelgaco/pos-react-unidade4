import iProduct from '../../interfaces/iProduct'
import './style.css'
import {Link} from "react-router-dom";

interface ProdutoProps {
    product: iProduct
}

export default function Produto({product}: ProdutoProps) {
    return (
        <Link to={`/produto/${product.id}`}>
            <div className='container_produto_card'>
                <p>{product.title}</p>
                <img src={product.thumbnail} width="300"/>
            </div>
        </Link>
    )
}
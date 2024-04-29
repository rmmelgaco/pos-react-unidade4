import iProduct from '../../interfaces/iProduct'
import './style.css'
import {Link} from "react-router-dom";

interface ProdutoProps {
    product: iProduct
}

export default function Produto({product}: ProdutoProps) {
    return (
        <div className='container_produto_card'>
            <Link to={`/produto/${product.id}`}>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} width="300"/>
                <p>R$ {product.price}</p>
                <p>Desconto: {product.discountPercentage}%</p>
            </Link>
        </div>
    )
}
import iProduct from '../../interfaces/iProduct'
import './style.css'

interface ProdutoProps {
    product: iProduct
}

export default function Produto({product}: ProdutoProps) {
    return (
        <div className='container_produto_card'>
            <p>{product.title}</p>
            <img src={product.thumbnail} width="300" />
        </div>
    )
}
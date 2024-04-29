import './index.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function MenuCategoriasProdutos() {

    const [categorias, setCategorias] = useState<string[]>([])

    function recuperaCategorias() {
        axios.get('https://dummyjson.com/products/categories').then(
            (response) => {
                setCategorias(['TODAS', ...response.data.sort()])
            }
        ).catch(error => {
            alert(`Erro ao carregar categorias: ${error}`)
        })
    }

    useEffect(() => {
        recuperaCategorias()
    }, [])

    return (
            <div id="menu">
                <h3>Categorias</h3>
                <ul>
                    {categorias.map(categoria => <li><Link to={`/produtos-categoria/${categoria}`}>{categoria}</Link></li>)}
                </ul>
            </div>
    )
}
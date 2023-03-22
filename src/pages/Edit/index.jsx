import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
    const [productName, setproductName] = useState([])
    const [price, setPrice] = useState([])
    const [stock, setStock] = useState([])
    const history = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/v3/catalogs/${id}`, {
            mode:'cors'
        })
        .then(response => response.json())
        .then(data => {
            setproductName(data.productName)
        });
    }, [id])

    const updateProduct = async (e) => {
        e.preventDefault();
        await fetch(`http://127.0.0.1:3000/api/v3/catalogs/${id}`, {
            mode:'cors'
        })
        .then(response => response.json())
        .then(history('/'))
    }

    return (
        <div className="main">
            <div className="card">
                <h2>Edit Product</h2>
                <br />
                <form onSubmit={ updateProduct() }>
                    <Input name="name" type="text" label="Nama" value={ productName } onChange={ (e) => setproductName(e.response.productName) } />
                    {/* <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value="20000000"/>
                    <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value="10"/> */}
                    <button type="submit" className="btn btn-primary">Simpan</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;
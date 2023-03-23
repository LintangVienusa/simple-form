import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
    const [name, setproductName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    // const history = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/v3/catalogs/${id}`, {
            mode:'cors'
        })
        .then(response => response.json())
        .then(data => {
            setproductName(data.productName || data.name)
            setPrice(data.price)
            setStock(data.stock)
        });
    }, [id])

    const updateProduct = async (e) => {
        // e.preventDefault()
        await fetch(`http://127.0.0.1:3000/api/v3/catalogs/${id}`, {
            method: 'PUT',
            mode:'cors',
            body: {
                productName: setproductName(e.target.value),
                price: setPrice(e.target.value),
                stock: setStock(e.target.value)
            }
        })
        console.log(setPrice())
        .catch(err => console.log(err))
        // .then(response => response.json())
        // .then(history('/'))
        // console.log(response);
    }
    

    return (
        <div className="main">
            <div className="card">
                <h2>Edit Product</h2>
                <br />
                <form onSubmit={ updateProduct }>
                    <Input name="name" type="text" label="Product Name" value={ name } onChange={ e => setproductName(e.target.value) } />
                    <Input name="price" type="number" label="Price" value={ price } onChange={ (e) => setPrice(e.target.value) } />
                    <Input name="stock" type="number" label="In Stock" value={ stock } onChange={ (e) => setStock(e.target.value) } />
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;
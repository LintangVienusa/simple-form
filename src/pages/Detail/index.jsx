import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './index.scss';

const Detail = () => {    
    const [detailData, setData] = useState([])
    const { id }  = useParams()

    useEffect( () =>{
        fetch(`http://127.0.0.1:3000/api/v3/catalogs/${id}`, {
            mode:'cors'
        })
        .then(response => response.json())
        .then(data => {
            setData(data)
        });
    }, [id])

    console.log(detailData);

    return (
        <div className="main">
            <Link to="/" className="btn btn-primary">Back</Link>
            <table className="table">
                <tbody>
                    <tr>
                        <td>ID </td>
                        <td>: {id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>: { detailData.productName || detailData.name }</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>: { detailData.price }</td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td>: { detailData.stock }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail;
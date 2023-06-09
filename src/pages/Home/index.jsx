import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    const [getProducts, setProducts] = useState([]);

    useEffect ( () => {
        var url = 'http://localhost:3000/api/v3/catalogs';
        // var req = new Request(url);
        fetch(url, {
            mode:'cors'
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            // console.log(getProducts)
        });
    }, [])

    console.log(getProducts)
    
    return(
        <div className="main">
            <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
            <div className="search">
                <input type="text" placeholder="Masukan kata kunci..."/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Price (IDR)</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getProducts.map(e => {
                            
                            return(
                                <tr key={e._id}>
                                    <td> {e.productName || e.name} </td>
                                    <td> {e.price} </td>
                                    <td style={{"textAlign": "center"}}> 
                                        <Link to={`/detail/${e._id}`} className="btn btn-sm btn-info">Detail</Link>
                                        <Link to={`/edit/${e._id}`} className="btn btn-sm btn-warning">Edit</Link>
                                        <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            )
                            
                        }) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;
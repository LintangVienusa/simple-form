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
            // setProducts(data)
            // console.log(getProducts)
        });
    }, [getProducts])

    // console.log(getProducts)

    // const makeAPICall = async () => {
    //     try {
    //         const response = await fetch(' http://localhost:3000/api/v3/catalogs', {mode:'cors'});
    //         let data = await response.json();
    //         // setProducts(data)
    //         // console.log(setProducts)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }
    // useEffect(() => {
    //     makeAPICall();
    // }, [getProducts])
    
    // console.log(getProducts)
    
    return(
        <div className="main">
            <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
            <div className="search">
                <input type="text" placeholder="Masukan kata kunci..."/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th className="text-right">Price</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // console.log(getProducts.map())
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;
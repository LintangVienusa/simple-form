import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    const [dataTables, setdataTables] = useState([])
    
    useEffect (() => {
        var url = 'http://localhost:3000/api/v3/catalogs';
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(data => {
            // const datas = data;
            // setdataTables(datas)
            console.log(data);
        });
    })
    
    



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
                    
                </tbody>
            </table>
        </div>
    )
}

export default Home;
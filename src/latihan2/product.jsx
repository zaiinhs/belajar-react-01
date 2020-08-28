import React from 'react';

class product extends React.Component {
    render() {
        return (
            <div className="box-stock">
                <h2>Nama Product</h2>
                <img src="" />
                <p>Harga</p>
                <p>Stock</p>
                <button className="btn-click">Beli</button>
                <p>Status</p>
            </div>
        );
    }
}

export default product;
import React, {useEffect, useState} from 'react';
import * as productService from "../service/productService";

function ListProduct() {
    const [listProduct, setListProduct] = useState()
    useEffect(() => {
        const list = async () => {
            let rs = await productService.findByAll();
            setListProduct(rs.data)
        }
        list()
    }, [])
    return (
        <div>
            <table className='table table-primary'>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
            </table>
        </div>
    );
}

export default ListProduct;
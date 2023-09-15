import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSuperDetail } from '../api/getList';


export const MarketDetail = (props) => {
    const initialState = {
        id: '',
        original_price: '',
        food_name: '',
        price_after_discount: '',
        discount_rate: '',
        last_updated: '',
        supermarket: '',
    };

    const [detail, setDetail] = useState(initialState)
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        getSuperDetail(id)
        .then(d => {
            setDetail(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[id])

    const navigate = useNavigate(); // historyを用意する

    const onClickButton = () => {
        navigate(-1); // 画面遷移を書く
    };
    
    return(
        <div>
            <center>
                <h1>{id}</h1>
                <button onClick={onClickButton}>Back</button>
                <h1> </h1>
                {loading ?
                    <h1>Loading....</h1>
                    :
                    <table className="table" border="1" width="300">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col-2">Last Update</th>
                                    <th scope="col-2">Food Name</th>
                                    <th scope="col-4">Price (after discount)</th>
                                    <th scope="col-6">Discount Rate</th>
                                    <th scope="col-6">Original Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(detail).map((value) =>
                                    <tr>
                                        <td><center>{value.last_updated}</center></td>
                                        <th scope="row"><center>{value.food_name}</center></th>
                                        <td><center>¥{value.price_after_discount}</center></td>
                                        <td><center>{value.discount_rate} %</center></td>
                                        <td><center>¥{value.original_price}</center></td>
                                    </tr>
                                )}
                    
                                {/* {data.map((value) =>
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{{value} ? "🚩" : " "}</td>
                                        <td>{value.name}</td>
                                        <td>{value.pv}</td>
                                    </tr>
                                )} */}
                            </tbody>
                        </table>          
                }
                <h1> </h1>
                <Link to={`/supermarket/${id}/edit`}><button>Edit</button></ Link>
            </center>
        </div>
    )
    
}
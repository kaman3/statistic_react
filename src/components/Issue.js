import React, { Component } from "react";
import { useParams } from "react-router-dom";

let Issue = (props) => {
    const { issue } = props.listIssue;
    let { id } = useParams();
    console.log(id);
    return (
        <div className = "row">
            <div className = "col-md-12">
                <div className = "content issue">
                    <table className = 'table table-striped'>
                        <thead>
                            <tr>
                            <th>Номер купона</th>
                            <th>Номер заказа</th>
                            <th>Стоимость</th>
                            <th>Дата выдачи</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            issue != undefined ? (
                            issue.map((value,index) => {
                                return <tr key = {index}>
                                    <td>{value.cupon}</td>
                                    <td>{value.order_id}</td>
                                    <td>{value.sum} ₽</td>
                                    <td>{value.create_date}</td>
                                    <td>{value.email}</td>
                                </tr>
                            })
                            ):(
                                <tr>
                                    <td>Нет данных</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Issue;

// class Issue extends Component{
//     render(){

//        const { issue } = this.props.listIssue;
//         return(
//             <div className = "row">
//                 <div className = "col-md-12">
//                      <div className = "content issue">
//                           <table className = 'table table-striped'>
//                               <thead>
//                                   <tr>
//                                   <th>Номер купона</th>
//                                   <th>Номер заказа</th>
//                                   <th>Стоимость</th>
//                                   <th>Дата выдачи</th>
//                                   <th>Email</th>
//                                   </tr>
//                               </thead>
//                               <tbody>
//                               {
//                                   issue != undefined ? (
//                                   issue.map((value,index) => {
//                                       return <tr key = {index}>
//                                           <td>{value.cupon}</td>
//                                           <td>{value.order_id}</td>
//                                           <td>{value.sum} ₽</td>
//                                           <td>{value.create_date}</td>
//                                           <td>{value.email}</td>
//                                       </tr>
//                                   })
//                                   ):(
//                                       <tr>
//                                           <td>Нет данных</td>
//                                       </tr>
//                                   )
//                               }
//                               </tbody>
//                           </table>
//                      </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Issue;
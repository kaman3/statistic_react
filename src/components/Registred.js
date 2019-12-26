import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

class Registred extends Component{

    render(){
       
        return(
            <div className = 'row'>
                <div className = "col-md-12">
                    <div className = "content">
                        <table className = "table table-striped">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>ФИО покупателя</th>
                                    <th>Номер купона</th>
                                    <th>Номер телефона</th>
                                    <th>Email</th>
                                    <th>Дата регистрации</th>
                                </tr>
                            </thead>
                            <tbody>
                            { this.props.listRegistred.array != undefined ? (
                                this.props.listRegistred.array.map((value, index) => {
                                    return <tr key={index}>
                                           <td>{index+1}</td>
                                           <td>{value.fio}</td>
                                           <td>{value.cupon}</td>
                                           <td>{value.phone}</td>
                                           <td>{value.email}</td>
                                           <td>{value.create_date}</td>  
                                    </tr>
                                })
                            ) : (
                                <tr>
                                    <td>Информация загружается...</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registred;
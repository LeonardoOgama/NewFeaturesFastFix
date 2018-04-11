import React, {Component} from 'react';
import {connect} from 'react-redux';

// import {RegisterList} from './RegisterService';

const Registered = ({name}) => <div>Nome: {name}</div>;

class ListEmployee extends Component {
    render() {
        return (
            <div>{
                this.props.employees.map(
                    (employee, index) => {
                        if (!employee.services)
                            employee.services = [];
                        return (
                            <div key={index}>
                                <Registered {...employee}/>
                                <br/>
                                <button>Adicionar novo Serviço</button>
                                {/*<RegisterList  onSavePressed={this.addEmployee} services = {employee.services}/>*/}
                            </div>
                        )
                    })
            }
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
    employees: store.employees
});

export default connect(mapStoreToProps)(ListEmployee);
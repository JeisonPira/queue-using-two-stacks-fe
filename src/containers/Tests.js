import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchCustomers} from '../actions/fetchCustomers';
import AppFrame from "../components/AppFrame";
import TestList from "../components/TestList";
import Actions from "../components/Actions";
import {getTests} from "../selectors/tests";

class Tests extends Component {

    componentDidMount() {
            this.props.fetchCustomers(0, 10);
    }

    handleAddNew = () => {
        this.props.history.push('/test/new');
    }

    renderBody = tests => (
        <div>
            <TestList
                tests={tests}>
            </TestList>
            <Actions>
                <button onClick={this.handleAddNew}>Nueva Prueba</button>
            </Actions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header="Listado de Pruebas Realizadas"
                    body={this.renderBody(this.props.tests)}/>
            </div>
        );
    }
}


Tests.defaultProps = {tests: [], limit: 10, skip: 0};

const mapDispatchToProps = {fetchCustomers};
const mapStateToProps = state => ({
    tests: getTests(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tests));

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import AppFrame from "../components/AppFrame";
import NewTest from "../components/NewTest";
import {SubmissionError} from "redux-form";
import {insertTest} from "../actions/insertTest";

class NewTests extends Component {

    handleOnBack = () => {
        this.props.history.push('/tests');
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        values.operations = values instanceof Array ? values.operations : values.operations.split(",");
        return this.props.insertCustomer(values).then(r => {
                if (r.error) {
                    throw new SubmissionError(r.payload);
                }
            }
        );
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return (
            <NewTest onBack={this.handleOnBack}
                     onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess}>
            </NewTest>
        )
    }

    render() {
        return (
            <div>
                <AppFrame
                    header="Adición de Cliente"
                    body={this.renderBody()}>
                </AppFrame>

            </div>
        );
    }
}

const mapDispatchToProps = {insertCustomer: insertTest};


export default withRouter(connect(null, mapDispatchToProps)(NewTests));

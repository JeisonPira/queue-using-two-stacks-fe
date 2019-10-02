import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Prompt} from 'react-router-dom';
import Actions from "./Actions";

const isRequired = value => (
    !value && "Este campo es requerido"
);
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);
const validate = values => {
    const error = {};
    if (!values.name) {
        error.name = "El campo nombre es requerido"
    }
    return error;
};

class NewTest extends Component {

    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    myField = ({input, meta, type, name, label, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={!type ? "text" : type} ref={withFocus && (txt => {
                this.txt = txt;
            })}/>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );

    render() {
        const {handleSubmit, submitting, onBack, pristine, submitSucceeded} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="numberOperations" component={this.myField} type="number" validate={isRequired} label="Numero de Operaciones"/>
                    <Field withFocus name="operations" component={this.myField} type="text" label="Operaciones" />
                    <div>Example: 1 2,3,1 4,3,2</div>
                    <Actions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </Actions>
                    <Prompt when={!pristine && !submitSucceeded} message="Se perderán los datos si continúa"></Prompt>
                </form>
            </div>
        )
    }
};

const customerEditForm = reduxForm({
    form: 'customerEdit',
    validate
})(NewTest);

export default customerEditForm;

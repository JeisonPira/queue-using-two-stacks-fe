import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import Actions from "../components/Actions";

class Home extends Component {

    handleOnClick = () => {
        this.props.history.push('/tests');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <Actions>
                                <button onClick={this.handleOnClick}>Listado de Pruebas Realizadas</button>
                            </Actions>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default withRouter(Home);

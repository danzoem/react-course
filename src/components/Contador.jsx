import React, {Component} from "react";


export default class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial
    }

    adiciona = () => {
        this.incrementa(1);
    }

    subtrai = () => {
        this.incrementa(-1);
    }

    incrementa = inc => {
        this.setState({ numero: this.state.numero + inc })
    }

    render() {
        return (
            <div> 
                <div>Número: {this.state.numero}</div>
                <button onClick={this.adiciona}>Incrementar</button>
                <button onClick={this.subtrai}>Decrementar</button>
            </div>
        )
    }
}
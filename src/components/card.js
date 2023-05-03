import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <div className="row p-0 m-0">
                        <div className="col-6">
                            <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
                                Aggiungi
                            </button>
                        </div>
                        <div className="col-6">
                            <button onClick={() => this.props.onDecrement(this.props.card)} className="btn btn-primary">
                                Togli
                            </button>
                        </div>
                    </div>
                    <hr className='m-0'></hr>
                    <div className='p-2'><span class="badge bg-warning">{this.props.card.quantità}</span></div>
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll</h5>
                        <p className="card-text">{this.props.card.prezzo}€</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
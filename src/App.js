import React from "react";


const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">{props.title}</h4>
            </div>
            <div className="card-body">
                {props.description}
            </div>
            <div className="card-footer">
                <a href={props.link} className="btn btn-primary">Read</a>
                <button onClick={props.mostrar}>{props.show ? 'Hide' : 'Show'}</button>
            </div>
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Sussan Smith',
            users: [
                { id: 1, name: 'Jonn Doe' }
            ],
            show: false,
            posts: null
        }
    }

    cambiarNombre = (e) => {
        console.log(e.target)
        this.setState({
            name: 'Debora Doe'
        })
    }

    mostrar = (e) => {
        console.log(e.target)
        this.setState({
            show: !this.state.show
        })
    }



    render() {
        return (
            <>
                <h1>App React {this.props.name}</h1>
                <h3>{this.state.name}</h3>
                <button onClick={this.cambiarNombre}>Cambiar Nombre</button>

                <button onClick={(evento) => this.mostrar(evento)}>{this.state.show ? 'Hide' : 'Show'}</button>
                <button onClick={(evento) => {
                    this.mostrar(evento)
                    this.setState({
                        name: 'Jane Doe'
                    })

                }}>{this.state.show ? 'Hide' : 'Show'}</button>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Card
                                title={"Title 1"}
                                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur assumenda quasi debitis dolore illo! Deleniti non illo voluptatem ad facilis dolores asperiores, maxime quis amet modi dolor iste qui."}
                                link={"https://google.com/?search=lorem"}
                                mostrar={this.mostrar}
                                show={this.state.show}
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                title={"Title 1"}
                                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur assumenda quasi debitis dolore illo! Deleniti non illo voluptatem ad facilis dolores asperiores, maxime quis amet modi dolor iste qui."}
                                link={"https://google.com/?search=lorem"}
                                mostrar={this.mostrar}
                                show={this.state.show}
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                title={"Title 1"}
                                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur assumenda quasi debitis dolore illo! Deleniti non illo voluptatem ad facilis dolores asperiores, maxime quis amet modi dolor iste qui."}
                                link={"https://google.com/?search=lorem"}
                                mostrar={this.mostrar}
                                show={this.state.show}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
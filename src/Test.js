import React from 'react';
import Navbar from './components/Navbar';


class Test extends React.Component {

    constructor() {
        super();

        this.state = {
            name: 'Anonimous',
            posts: [
                { id: 1, title: 'Title 1'},
                { id: 2, title: 'Title 2'},
                { id: 3, title: 'Title 3'},
                { id: 4, title: 'Title 4'},
            ]
        }
    }

    login = () => {
        this.setState({
            name: 'Luis Javier'
        })
    }

    logout = () => {
        this.setState({
            name: 'Anonimous'
        })
    }


    componentDidMount(){
        console.log("Componente Cargado");
    }

    componentDidUpdate(){
        console.log("Componente Actualizado");
    }

    componentWillUnmount(){
        console.log("Componente va a ser eliminado");
    }

    render() {
        return (
            <>
                <Navbar name={this.state.name} login={this.login} logout={this.logout} />
                <h1>News</h1>
                <ul className="list-group">
                    {
                        this.state.posts.map((post) => {
                            return (
                                <li className="list-group-item" key={post.id}>
                                    {post.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Test;
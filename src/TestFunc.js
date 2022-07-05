import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';


const Alert = () => {


    useEffect(() => {
        // componentDidMount

        console.log('Component Cargado');


        // optional
        return () => {
            // componentWillUnmount
            console.log('Componente va a ser eliminado');
        }

    }, [])



    return (
        <div className="alert alert-info" role="alert">
            Esto es una prueba
        </div>
    )
}

const TestFunc = () => {

    //const [value, function] = useState(defailtValue); // return [value, function]

    const [state, setState] = useState({
        name: 'Anonimous',
        posts: [
            { id: 1, title: 'Title 1' },
            { id: 2, title: 'Title 2' },
            { id: 3, title: 'Title 3' },
            { id: 4, title: 'Title 4' },
        ],
    });

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);

    const login = () => {
        setState({
            ...state,
            name: 'Luis Javier'
        })
    }

    const logout = () => {
        setState({
            ...state,
            name: 'Anonimous'
        })
    }

    useEffect(() => {
        // componentDidUpdate
        console.log("Component State updated");

    }, [state])

    useEffect(() => {
        console.log("name has been edited")
    }, [name])

    return (
        <>
            <Navbar name={state.name} login={login} logout={logout} />


            { 
                show && (
                    <Alert />
                )
            }


            <h1>News</h1>
            <ul className="list-group">
                {
                    state?.posts?.length > 0 &&
                    state?.posts?.map((post) => {
                        return (
                            <li className="list-group-item" key={post.id}>
                                {post.title}
                            </li>
                        )
                    })
                }
            </ul>

            <h3>{ show ? "Hide": "Show"}</h3>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                Click
            </button>
        </>
    )
}

export default TestFunc;
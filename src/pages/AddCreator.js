/*import { useState } from 'react'
import { ReactDom } from 'react-dom'
export function AddCretor() {
    const [inputField, setInputField] = useState({
        name: '',
        description: '',
        url: ''
    })

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const addCretor = () => {
        console.log(inputField.name)
    }

    return (
        <>
        <form>
            <div>
                <label>
                    Name:
                </label>
            </div>
            <div>
                <input type="text" placeholder="Name" onChange={inputsHandler} value={inputField.name} name="name" />
            </div>
            <div>
                <label>
                    Description:
                </label>
            </div>
            <div>
                <textarea type="text" placeholder="Description" onChange={inputsHandler} value={inputField.description} name="description"></textarea>
            </div>
            <div>
                <label>
                    URL:
                </label>
            </div>
            <div>
                <input type="text" placeholder="Name" onChange={inputsHandler} value={inputField.url} name="url" />
            </div>
            <button style={{ marginTop: 10 }} onClick={addCretor}>Submit </button>
        </form>
        </>
    )
}*/

import React from 'react';


function AddCreator() { 
    return ( 
       <div> 
            <h1> This is the about page </h1> 
      </div> 
    ); 
} 
export default AddCreator; 
import React from 'react'
import styled from "styled-components"

function Register() {
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("form");
    }
  return (
    <>
    <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand">
                <img src="" alt=""/>
                <h1>Zappy</h1>
            </div>
            <input type="text" placeholder="username" name="username"/>

        </form>
    </FormContainer>
    </>
  )
}

const FormContainer = Styled.div``;
export default Register;
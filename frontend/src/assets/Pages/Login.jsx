import React from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon, MDBCol, MDBRow
}
    from 'mdb-react-ui-kit';
function Login(props) {
    return (
        <MDBContainer fluid style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",

        }}>
            <MDBRow>

                <MDBCol sm='6'>

                    <div className='d-flex flex-row pt-5 justify-content-center'>
                        <img src="./logo.png" alt={"logo"}/>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
                        <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
                        <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
                    </div>
                </MDBCol>
                <MDBCol sm='6' className={"p-3"}>
                    <img style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"2%"}} src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5fGVufDB8fDB8fHww&w=1000&q=80"
                         alt="Login image"/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Login;

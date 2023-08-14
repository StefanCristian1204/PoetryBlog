import React, {useState} from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon, MDBCol, MDBRow
}
    from 'mdb-react-ui-kit';
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Login(props) {

    const [showPassword, setShowPassword] = useState(false);


    return (
        <MDBContainer fluid style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",

        }}>
            <Form onSubmit={() => console.log("test")}>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-row pt-5 justify-content-center'>
                            <Link to={"/dashboard"}>
                                <img src="./logo.png" alt={"logo"}/>
                            </Link>
                        </div>
                        <div className='d-flex flex-column justify-content-center w-75 '>
                            <MDBInput required={true} wrapperClass='mb-4 mx-5 w-100' label='Email address'
                                      id='formControlLg' type='email' size="lg"/>
                            <div className={"d-flex"}>
                                <MDBInput required={true} wrapperClass='mb-4 mx-5 w-100' label='Password'
                                          id='formControlLg' type={showPassword ? "text" : "password"}
                                          size="lg"/>
                                <Button className={"h-50"} variant={"dark"}
                                        onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> :
                                        <FontAwesomeIcon icon={faEye}/>}
                                </Button>
                            </div>
                            <Button type={"submit"} className="mb-4 px-5 mx-5 w-100" color='info'
                                    size='lg'>Login</Button>
                            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot
                                password?</a></p>
                            <p className='ms-5'>Don't have an account? <a href="/register" className="link-info">Register
                                here</a></p>
                        </div>
                    </MDBCol>
                    <MDBCol sm='6' className={"p-3"}>
                        <img style={{height: "100%", width: "100%", objectFit: "cover", borderRadius: "2%"}}
                             src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5fGVufDB8fDB8fHww&w=1000&q=80"
                             alt="Login image"/>
                    </MDBCol>
                </MDBRow>
            </Form>
        </MDBContainer>
    );
}

export default Login;

import React, {useState} from 'react';
import {
    MDBContainer,
    MDBInput,MDBCol, MDBRow
} from 'mdb-react-ui-kit';
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin.jsx";

function Login(props) {
    const {login,error,isLoading} = useLogin();

    const [showPassword, setShowPassword] = useState(false);
    const [dataForm,setDataForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await  login(dataForm.email,dataForm.password);
        console.log(dataForm)
    }

    const handleOnChange = (key,value) =>{
        setDataForm(
            {
                ...dataForm,
                [key]:value
            }
        )
    }

    return (
        <MDBContainer fluid style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",

        }}>
            <Form onSubmit={(e) =>handleSubmit(e)}>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-row pt-5 justify-content-center'>
                            <Link to={"/dashboard"}>
                                <img src="./logo.png" alt={"logo"}/>
                            </Link>
                        </div>
                        <div className='d-flex flex-column justify-content-center w-75 '>
                            <MDBInput onChange={(e)=>handleOnChange("email",e.target.value)} required={true} wrapperClass='mb-4 mx-5 w-100' label='Email address'
                                      id='email' type='text' size="lg"/>
                            <div className={"d-flex"}>
                                <MDBInput onChange={(e)=>handleOnChange("password",e.target.value)} required={true} wrapperClass='mb-4 mx-5 w-100' label='Password'
                                          id='password' type={showPassword ? "text" : "password"}
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
                            <p className='ms-5'>Don't have an account? <Link to={"/register"}>Register
                                here</Link></p>
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

import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Formik} from "formik";
import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);
import {Container} from "react-bootstrap";
import {
    faCity, faEye,
    faEyeSlash,
    faInbox,
    faKey,
    faMagnifyingGlass, faMessage,
    faPassport,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Register(props) {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required().min(5),
        email: yup.string().required().email(),
        city: yup.string().required(),
        password: yup.string().required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .minLowercase(1, 'password must contain at least 1 lower case letter')
            .minUppercase(1, 'password must contain at least 1 upper case letter')
            .minNumbers(1, 'password must contain at least 1 number')
            .minSymbols(1, 'password must contain at least 1 special character'),
        confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match"),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    const[showPassword,setShowPassword] = useState(false);

    return (
        <Container style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",

        }} className={"p-5"}>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => console.log(values)}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    city: '',
                    password: '',
                    confirmPassword: '',
                    terms: false,
                }}
            >
                {({handleSubmit, handleChange, values, touched, errors}) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                    isInvalid={!!errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Last name</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon
                                        icon={faUser}/></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="3" controlId="validationFormik03">
                                <Form.Label>City</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faCity}/></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                        isValid={touched.city && !errors.city}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormikEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faMessage}/></InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@gmail.com"
                                        aria-describedby="inputGroupPrepend"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                        isValid={touched.email && !errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faKey}/></InputGroup.Text>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                    isValid={touched.password && !errors.password}

                                />
                                    <Button variant={"dark"} onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                                    </Button>
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik05">
                                <Form.Label>Confirm Password</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faKey}/></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                    isValid={touched.confirmPassword && !errors.confirmPassword}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </Container>

    );
}

export default Register;

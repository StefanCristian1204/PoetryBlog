import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Badge, Col, Container, Row} from "react-bootstrap";
import "./Poem.css"
import {SocialIcon} from "react-social-icons";
import MoreLikeThis from "../Components/MoreLikeThis.jsx";

function Poem(props) {
    const {id} = useParams();
    const [poem, setPoem] = useState({});
    useEffect(() => {
        getPoemById();
    }, [])
    const getPoemById = async () => {
        const response = await axios.get(`http://localhost:8080/api/poem/${id}`);
        setPoem(response.data);
    }

    return (
        <Container>
            <Row>
                <Col lg={"3"} className={"d-flex flex-column justify-content-center gap-5"}>
                    <Row className={"backgroundDiv"}>
                        <div className={"h4"}>You can find me here</div>
                        <div className={"d-flex justify-content-between p-2 "}>
                            <SocialIcon url="https://www.linkedin.com/in/ion-%C8%99erban-aab82a4b/" target={"_blank"}/>
                            <SocialIcon url="https://www.facebook.com/serban.ion.39" target={"_blank"}/>
                            <SocialIcon url="https://www.instagram.com/serbanionstefan/" target={"_blank"}/>
                        </div>
                    </Row>
                    <Row>
                        <MoreLikeThis currentPoem={poem}/>
                    </Row>
                </Col>
                <Col lg={"6"} >
                    <div className={"backgroundDiv"}>
                        <h1><Badge bg={"dark"}> {poem.title}</Badge></h1>
                        <h4 className={"text-end"}>{poem.author}</h4>
                        <br/>
                        {poem.line && poem.line.map((el, k) =>
                            (<div className={"mb-4"} key={k}>
                                <h5><i>{el}</i></h5>
                            </div>)
                        )}
                    </div>
                </Col>
                <Col lg={"3"}>
                        <div>
                            Star Rating, Add to Cart, Add to Favorites
                        </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Comment area</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Poem;
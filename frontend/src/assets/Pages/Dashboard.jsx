import React, {useEffect, useState} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import "./Dashboard.css"
import axios from "axios";
import DashboardFilter from "../Components/DashboardFilter.jsx";
import {useAuthContext} from "../../hooks/useAuthContext.jsx";
import {Link, useNavigate} from "react-router-dom";

function Dashboard(props) {

    const [poems, setPoems] = useState([]);
    const [copyPoem, setCopyPoem] = useState([]);
    const {user} = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        getAllPoems();
    }, [])
    const getAllPoems = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/poem/", {
                method: 'GET',
                // mode: 'cors',
                // headers: {
                //     Authorization: `Bearer ${user.jwt}`
                // }
            });
            if (!response.ok) {
                console.error("Failed to fetch poems. Status:", response.status);
                return;
            }

            const data = await response.json();
            setPoems(data);
            setCopyPoem(data);
        } catch (error) {
            console.error("Error fetching poems:", error);
        }
    };



    const handleOptionChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value);

        if (selectedOptions.length === 0) {
            setPoems(copyPoem);
        } else {
            const filteredPoems = copyPoem.filter(poem =>
                poem.categories.some(category => selectedValues.includes(category)));
            setPoems(filteredPoems);
        }
    };

    const handleOptionDateChange = (selectedOption) => {
        const sortedPoems = poems.sort((a, b) => {
            if (selectedOption.value === "oldest") {
                return new Date(a.date) - new Date(b.date)
            }
            return new Date(b.date) - new Date(a.date)
        });
        setPoems([...sortedPoems]);
    }

    const handleOptionSearchChange = (searchTitle) => {
        const foundPoems = copyPoem.filter(el => {
            if (el.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                return el;
            }
        })
        setPoems(foundPoems)
    }

    return (
        <Container>
            <DashboardFilter handleOptionChange={handleOptionChange} handleOptionDateChange={handleOptionDateChange}
                             handleOptionSearchChange={handleOptionSearchChange}/>
            <Container className={"d-grid gap-4 justify-content-center"}
                       style={{
                           gridTemplateColumns: "repeat(auto-fill,23rem)",
                           justifyItems: "center",
                       }}>
                {poems && poems.map((el) => (
                    <Card key={el.id} className={"card"} style={{
                        backgroundImage: `url(${el.imageUrl})`,
                    }}>
                        <Card.Body>
                            <div style={{
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "1em",
                                padding: "1em"
                            }}>
                                <Card.Subtitle className={"text-muted text-end"}><i>{el.date}</i></Card.Subtitle>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Subtitle
                                    className="mb-2 text-muted d-flex justify-content-around">{el.author}</Card.Subtitle>
                                <Card.Text>
                                    <q>
                                        <i>
                                            {el.line[0]}<br/>
                                            {el.line[1]}
                                        </i>
                                    </q>
                                </Card.Text>
                                <Button onClick={() => navigate(`/poem/${el.id}`)} size={"sm"} >Continue Reading</Button>
                            </div>
                        </Card.Body>
                    </Card>)
                )}
            </Container>
        </Container>)
}

export default Dashboard;

import React, {useEffect, useState} from 'react';
import {Button, Carousel, CarouselItem, Image} from "react-bootstrap";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext.jsx";


function MoreLikeThis({currentPoem}) {
    const [poems, setPoems] = useState([]);
    const {user} = useAuthContext();
    const navigate = useNavigate();
    const handleSimilarPoems = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/poem/",{
                headers: {
                    Authorization: `Bearer ${user.jwt}`
                }
            });
            const currentPoemCategories = currentPoem.categories;
            if (currentPoemCategories && currentPoemCategories.length > 0) {
                const filteredPoems = response.data.filter(poem =>
                    poem.categories.some(category => currentPoemCategories.includes(category))
                );
                const index = filteredPoems.findIndex(obj => obj.id === currentPoem.id);
                filteredPoems.splice(index, 1);
                setPoems(filteredPoems);
            } else {
                setPoems([currentPoem]);
            }
        } catch (error) {
            console.error('Error fetching all poems:', error);
        }
    };

    useEffect(() => {
        handleSimilarPoems()
    }, [currentPoem]);


    return (
        <div>
            <h3 style={{background: "rgba(255, 255, 255, 0.2)"}}>More like this</h3>
            <Carousel data-bs-theme="dark">
                {poems && poems.map((el, k) => {
                    return (
                        <CarouselItem key={k}>
                            <Image style={{background: "rgba(255, 255, 255, 0.2)"}} src={"/papyrus.png"}
                                   text={"First Slide"} thumbnail/>
                            <Carousel.Caption style={{color: "black"}}>
                                <h3>{el.title}</h3>
                                <h6>{el.author}</h6>
                                <div>
                                    <p>{el.line && el.line[0]}</p>
                                    <p>{el.line && el.line[1]}</p>
                                    <p>{el.line && el.line[2]}</p>
                                </div>
                                <Button onClick={() => navigate(`/poem/${el.id}`)}>Got to poem</Button>
                            </Carousel.Caption>
                        </CarouselItem>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default MoreLikeThis;

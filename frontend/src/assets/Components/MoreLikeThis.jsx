import React, {useEffect, useState} from 'react';
import {Button, Carousel, CarouselItem, Image} from "react-bootstrap";
import axios from "axios";
import {useParams} from "react-router-dom";

function MoreLikeThis({currentPoem}) {
    const [poems, setPoems] = useState([]);

    const handleSimilarPoems = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/poem/");
            if (currentPoem.categories && currentPoem.categories.length > 0) {
                const filteredPoems = response.data.filter(poem =>
                    poem.categories.some(category => currentPoem.categories.includes(category))
                );
                console.log(filteredPoems)
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
                                <Button>Got to poem</Button>
                            </Carousel.Caption>
                        </CarouselItem>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default MoreLikeThis;
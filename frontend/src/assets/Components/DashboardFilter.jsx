import {useEffect, useState} from 'react';
import Select from "react-select";
import {Container, Form, FormLabel, InputGroup} from "react-bootstrap";
import axios from "axios";
import "./DashboardFilter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useAuthContext} from "../../hooks/useAuthContext.jsx";

function DashboardFilter({handleOptionChange, handleOptionDateChange, handleOptionSearchChange}) {

    const [poemOptions, setPoemOptions] = useState([]);
    const {user} = useAuthContext();
    const getAllPoemOptions = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/poem/categories", {
                method: 'GET',
                // mode: 'cors',
                // headers: {
                //     Authorization: `Bearer ${user.jwt}`
                // }
            });
            if (!response.ok) {
                throw new Error(`Fetch request failed with status: ${response.status}`);
            }

            const data = await response.json();
            const newPoemOptions = data.map((el) => ({
                value: el,
                label: el,
            }));

            setPoemOptions((prev) => [...prev, ...newPoemOptions]);
        } catch (error) {
            console.error("Error fetching poem options:", error);
        }
    };

    useEffect(() => {
        getAllPoemOptions();
    }, []);


    const dateOptions = [
        {value: 'newest', label: 'Newest'},
        {value: 'oldest', label: 'Oldest'}
    ]

    return (
        <Container className={"mb-4"} style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",

        }}>
            <div className={"d-lg-flex d-md-block justify-content-lg-between m-4 justify-content-md-center gap-2"}>
                <div className={"d-flex justify-content-between gap-2 align-items-center"}>
                    <div className={"d-flex gap-2"}>
                        <FormLabel className={"formAlign"}>Category</FormLabel>
                        <Select
                            isSearchable={true}
                            options={poemOptions}
                            isMulti={true}
                            name="colors"
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(opt) => handleOptionChange(opt)}
                        />
                    </div>
                    <div className={"d-flex gap-2 align-items-center"}>
                        <FormLabel className={"formAlign"}>Date</FormLabel>
                        <Select
                            options={dateOptions}
                            isMulti={false}
                            name="dateOptions"
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(opt) => handleOptionDateChange(opt)}
                        />
                    </div>
                </div>
                <div className={"d-flex align-content-center"}>
                <InputGroup className={"w-auto m-1"}>
                    <InputGroup.Text id={"searchTitle"}><FontAwesomeIcon icon={faMagnifyingGlass}/></InputGroup.Text>
                    <Form.Control
                        placeholder={"Search by title"}
                        aria-label={"searchTitle"}
                        aria-describedby={"searchTitle"}
                        onChange={(opt) => handleOptionSearchChange(opt.target.value)}
                    />
                </InputGroup>
                </div>
            </div>
        </Container>
    );
}

export default DashboardFilter;

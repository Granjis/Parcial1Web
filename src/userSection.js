import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swimmer from "./swimming.png";
import runner from "./running.png";
import cyclist from "./cycling.png";
import { useState, useEffect } from "react";
import "./userSection.css";

function UserSection() {

    const [user, setUser] = useState({ nombre: "", correr: "", nadar: "", bicicleta: "", imagen: "" });
    const [loading, setloading] = useState(true);

    const update = (data) => {

        setUser(data)
        return data;
    }
    useEffect(() => {

        let mockarooApiKey = 'af0d4e80';
        const URL =
            `https://my.api.mockaroo.com/profiles.json?key=${mockarooApiKey}`;
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUser(update(data))
                setloading(false);
                console.log(user);
            });
        console.log(user.nombre);
    }, []);


    if (loading) {
        console.log("Loading...");
        console.log(user.nombre);
        console.log("lei");
        return <div> ...</div>;
    }

    return (
        <Row>
            <Col md={4} >
                <Row className="left-side">

                    <Col md={6} className="image-container">
                        <img src={user.imagen} />
                    </Col>

                    <Col md={6} >
                        <label >{user.nombre}</label>
                    </Col>

                </Row>
            </Col>

            <Col md={8}>

                <Row className="records">

                    <Col md={2} className="image-container">
                        <img src={runner} />

                    </Col>

                    <Col md={2} >
                        {user.correr}
                    </Col>

                    <Col md={2} className="image-container">
                        <img src={cyclist} />
                    </Col>

                    <Col md={2} >
                        {user.bicicleta} 
                    </Col>

                    <Col md={2} className="image-container">
                        <img src={swimmer} />
                    </Col>

                    <Col md={2} >
                        {user.nadar}
                    </Col>

                </Row>

            </Col>

        </Row>
    )
} export default UserSection;
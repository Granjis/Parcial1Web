import 'bootstrap/dist/css/bootstrap.min.css';
import "./tarjeta.css";
import nadador from "./nadador.jpg";
import TarjetaDeporte from "./tarjetaDeporte";
import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal, Button, Container, ModalBody } from "react-bootstrap";
import { FormattedMessage } from 'react-intl'



function Top() {
    const [cycling, setCycling] = useState([]);
    const [running, setRunning] = useState([]);
    const [swimming, setSwimming] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [deporteSeleccionado, setDeporteSeleccionado] = useState({});

    const handleClose = () => setMostrarModal(false);
    const handleShow = (deporte) => {
        setDeporteSeleccionado(deporte);
        setMostrarModal(true);
    }
    const update = (data, deporte, pImagen) => {
        if (deporte === 'running') {
            return data.map(item => ({
                ...item,
                titulo: "Running Session",
                descripcion: "Recorrido alrededor de la Bahía",
                imagen: pImagen,
            }))
        }
        else if (deporte === 'cycling') {
            return data.map(item => ({
                ...item,
                titulo: "Cycling Session",
                descripcion: "Recorrido alrededor de la Bahía",
                imagen: pImagen,
            }))
        }
        else {
            return data.map(item => ({
                ...item,
                titulo: "Swimming Session",
                descripcion: "Recorrido alrededor de la Bahía",
                imagen: pImagen,
            }))
        }
    }


    useEffect(() => {

        let imagenCycling = "";
        fetch("https://img.redbull.com/images/c_crop,x_940,y_0,h_3264,w_2611/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/11/27/325118c5-1118-4dfb-82b5-4e5958acaa40/red-bull-zera-o-pico-2018-guaratinga-brasil")
            .then(data => data.blob())
            .then(blob => { imagenCycling = window.URL.createObjectURL(blob) })

        let imagenRunning = "";
        fetch("https://hips.hearstapps.com/hmg-prod/images/gettyimages-1341854189-6540f8266a2ef.jpg")
            .then(data => data.blob())
            .then(blob => { imagenRunning = window.URL.createObjectURL(blob) })

        let mockarooApiKey = 'af0d4e80';
        const URL =
            `https://my.api.mockaroo.com/users.json?key=${mockarooApiKey}`;
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setRunning(update(data, 'running', imagenRunning));
                setCycling(update(data, 'cycling', imagenCycling));
                setSwimming(update(data, 'swimming', nadador));
            });
    }, []);




    return (


        <Row  >
            <Col md={4} xs={6} >
                <Row >
                    {cycling.map((tarjetaDeporte) => (
                        <Col key={tarjetaDeporte.id} md={6} sm={6} xs={6} onClick={() => handleShow(tarjetaDeporte)} >
                            <TarjetaDeporte tarjetaDeporte={tarjetaDeporte} />
                        </Col>
                    ))}
                </Row>
            </Col>

            <Col md={4} xs={6}>
                <Row>
                    {running.map((tarjetaDeporte) => (
                        <Col key={tarjetaDeporte.id} md={6} sm={6} xs={6} onClick={() => handleShow(tarjetaDeporte)} >
                            <TarjetaDeporte tarjetaDeporte={tarjetaDeporte} />
                        </Col>
                    ))}
                </Row>

            </Col>

            <Col md={4} xs={6}>
                <Row>
                    {swimming.map((tarjetaDeporte) => (
                        <Col key={tarjetaDeporte.id} md={6} sm={6} xs={6} onClick={() => handleShow(tarjetaDeporte)} >

                            <TarjetaDeporte tarjetaDeporte={tarjetaDeporte} />
                        </Col>
                    ))}
                </Row>

            </Col>
            <Modal show={mostrarModal} onHide={handleClose} >
                <ModalBody className='modal-card-container'>
                    <div>
                        <img className="modal-card-img"
                            src={deporteSeleccionado.imagen}
                            alt={deporteSeleccionado.descripcion}
                        />
                        <div className='texto-imagen'>
                            <h1 class="fw-bold">
                                {deporteSeleccionado.titulo}
                            </h1>
                            <p > <FormattedMessage id='description'/>{deporteSeleccionado.ciudad}<br /> {deporteSeleccionado.distancia + "k -" + deporteSeleccionado.duracion + "h"}</p>
                        </div>
                    </div>
                    <div className='but'>
                        <Button variant="primary" onClick={handleClose} >
                          <FormattedMessage id='close'/>
                        </Button>
                    </div>
                </ModalBody>
            </Modal>
        </Row>
    );
}
export default Top;
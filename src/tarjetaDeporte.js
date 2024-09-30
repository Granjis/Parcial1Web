import Card from "react-bootstrap/Card";
import "./tarjeta.css";
import { FormattedMessage } from 'react-intl';

function TarjetaDeporte({ tarjetaDeporte, onClick }) {

    return (
        <Card className="card" onClick={onclick} >
            <Card.Img className="card-img"
                src={tarjetaDeporte.imagen}
                alt={tarjetaDeporte.descripcion}
            />
            <Card.Body className="overlay-text">
                <Card.Title class = "fw-bold">
                    {tarjetaDeporte.titulo}
                </Card.Title>
                <Card.Text className="font-size">  <FormattedMessage id='description'/> + {tarjetaDeporte.ciudad}</Card.Text>
                <Card.Text className="font-size">{tarjetaDeporte.distancia + "k -" + tarjetaDeporte.duracion + "h"}</Card.Text>
            </Card.Body>
        </Card>
    );
} export default TarjetaDeporte;
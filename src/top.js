import 'bootstrap/dist/css/bootstrap.min.css';
import "./top.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Top() {
    const [fotos, setFotos] = useState([]);
    const [fotosRun, setFotosRun] = useState([]);
    const [fotosSwim, setFotosSwim] = useState([]);

    const cargarImagen = () => {
        fetch("https://img.redbull.com/images/c_crop,x_940,y_0,h_3264,w_2611/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/11/27/325118c5-1118-4dfb-82b5-4e5958acaa40/red-bull-zera-o-pico-2018-guaratinga-brasil")
            .then(data => data.blob())
            .then(blob => {
                const nuevaImagen = URL.createObjectURL(blob);
                setFotos(prevFotos => [...prevFotos, nuevaImagen]);
            });
    }

    const cargarImagenRunning = () => {
        fetch("https://hips.hearstapps.com/hmg-prod/images/gettyimages-1341854189-6540f8266a2ef.jpg")
            .then(data => data.blob())
            .then(blob => {
                const nuevaImagen = URL.createObjectURL(blob);
                setFotosRun(prevFotos => [...prevFotos, nuevaImagen]);
            });
    }
    const cargarImagenSwimming = () => {
        fetch("https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            .then(data => data.blob())
            .then(blob => {
                const nuevaImagen = URL.createObjectURL(blob);
                setFotosSwim(prevFotos => [...prevFotos, nuevaImagen]);
            });
    }



    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            cargarImagen();
            cargarImagenRunning();
            cargarImagenSwimming(); 
        }
    }, []);


    return (
        <div className='grid3'>
            <div className='inside-grid'>

                {fotos.map((url, index) => (

                    <img key={index} className="imagen" src={url} alt={"No cargo"} />

                ))}
            </div>

            <div className='inside-grid'>
                {fotosRun.map((url, index) => (

                    <img key={index} className="imagen" src={url} alt={"No cargo"} />

                ))}
            </div>

            <div className='inside-grid'>
                {fotosSwim.map((url, index) => (

                    <img key={index} className="imagen" src={url} alt={"No cargo"} />

                ))}
            </div>
        </div>
    );

}
export default Top;
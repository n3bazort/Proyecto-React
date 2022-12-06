import * as React from "react";
import '../styles/home.css';
import icon1 from '../img/home/crear_reservaciones.png';
import icon2 from '../img/home/listar_reservaciones.png';
import icon3 from '../img/home/venta.png';
import icon4 from '../img/home/pagos.png';
import icon5 from '../img/home/inventario.png';
import icon6 from '../img/home/icon_agg.png';
import NewBarraNavegacion from "../components/NewBarraNavegacion";


const Home = props => {
    return (
        <div class="contenedor">
            
            <NewBarraNavegacion/>

            <div class="tarjetas">
                <a href="#" class="iconos">
                    <img src={icon1} alt="icono new-reser" />
                </a>
                <div class="textos">
                    <h5 class="negrita">Crear Reserva</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="tarjetas">
                <a href="#" class="iconos">
                    <img src={icon2} alt="icono listar-reser" />
                </a>
                <div class="textos">
                    <h5 class="negrita">Listar reservaciones</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="tarjetas">
                <a href="#" class="iconos">
                    <img src={icon3} alt="icono ventas " />
                </a>
                <div class="textos">
                    <h5 class="negrita">Crear cuenta de venta</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="tarjetas">
                <a href="#" class="iconos">
                    <img src={icon4} alt="icono  pagos" />
                </a>
                <div class="textos">
                    <h5 class="negrita">Consultar pagos</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="tarjetas">
                <a href="#" class="iconos">
                    <img src={icon5} alt="icono inventario" />
                </a>
                <div class="textos">
                    <h5 class="negrita">Inventario</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="tarjetas">
                <a href="#" class="iconos">
                <img src={icon6} alt="agg icon " />
                </a>
                <div class="textos">
                    <h5 class="negrita">*Operación*</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>
    )
}
export default Home;
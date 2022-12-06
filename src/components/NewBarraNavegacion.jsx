import * as React from "react";
import logo_pelota from '../img/home/pelotaa.png';
import '../styles/barraNav.css';

const NewBarraNavegacion = props => {
    return (
        <div >
            <script type="text/javascript">
                document.bgColor = "#EEEEEE";
            </script>
            <header>
                <a href="#" class="logo">
                    <img src={logo_pelota} alt="logo del software" />
                    <h2 class="nombre-empresa">Canchiwa</h2>
                </a>
                <nav>
                    <a href="#" class="nav-link">Reservaciones</a>
                    <a href="#" class="nav-link">Moviminetos</a>
                    <a href="#" class="nav-link">Inventario</a>
                </nav>

            </header>
        </div>
    )
}
export default NewBarraNavegacion;
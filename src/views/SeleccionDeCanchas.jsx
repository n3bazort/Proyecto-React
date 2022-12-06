import * as React from "react";
import NewBarraNavegacion from "../components/NewBarraNavegacion";
import '../styles/canchas.css';


const SeleccionDeCanchas = props => {
	return (
		<div>
			<NewBarraNavegacion/>

			<h1 class="selec">Seleccione la cancha a alquilar:</h1>

			<div class="contenedor">
				<div class="contenedor-canchas">

					<div class="card canchita1" >
						<div class="textos">
							<h3>Cancha de Futbol</h3>
							<p>Tipo de suelo: Césped</p>
						</div>
					</div>

					<div class="card canchita2" >
						<div class="textos">
							<h3>Cancha de Indor</h3>
							<p>Tipo de suelo: Cemento</p>
						</div>
					</div>
					<div class="card canchita3">
						<div class="textos">
							<h3>Cancha de Basquet</h3>
							<p>Tipo de suelo: Cemento</p>
						</div>
					</div>

					<div class="card canchita4">
						<div class="textos">
							<h3>Cancha de Voley</h3>
							<p>Tipo de suelo: Tierra</p>
						</div>
					</div>
					<div class="card canchita5">
						<div class="textos">
							<h3>Cancha de Fútbol</h3>
							<p>Tipo de suelo: Césped Sintético</p>
						</div>
					</div>
					<div class="card canchita6" >
						<div class="textos">
							<h3>Cancha *********</h3>
							<p>Tipo de suelo: ******</p>
						</div>
					</div>
				</div>


			</div>
		</div>
	)
}
export default SeleccionDeCanchas;
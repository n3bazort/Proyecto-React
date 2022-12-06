import * as React from "react";
import '../styles/reservacionesTabla.css';
import NewBarraNavegacion from '../components/NewBarraNavegacion.jsx';

const Reservaciones = props => {
    return (
	
	<div>
		<NewBarraNavegacion />


			<h1 class="info">Reservación de canchas:</h1>
			<hr />
			<div class="contenedor">
				<div class="seleccion">
					<h2>Selecciona la cancha deseada:</h2>
					<select class="selecCancha">

						<option>Fútbol</option>

						<option>Indor</option>

						<option>Básquet</option>

					</select>
				</div>
				<div class="uptabla">
					<div class="uptabla__fechasemana">
						<h2>nov 7 — 13 2022</h2>
					</div>
					<div class="uptabla__direcciones">
						<input class="botones btn-i" type="button" value="<" onclick="msg()" />
						<input class="botones btn-d" type="button" value=">" onclick="msg()" />


					</div>
				</div>
				<div class="tabla-horario">
					<table>
						<tr>
							<th class="filaUp no-seleccionable">Hora</th>
							<th class="filaUp no-seleccionable">Lun/7</th>
							<th class="filaUp no-seleccionable">Mar/8</th>
							<th class="filaUp no-seleccionable">Mie/9</th>
							<th class="filaUp no-seleccionable">Jue/10</th>
							<th class="filaUp no-seleccionable">Vie/11</th>
							<th class="filaUp no-seleccionable">Sab/12</th>
							<th class="filaUp no-seleccionable">Dom/13</th>

						</tr>
						<tr>
							<th class="no-seleccionable">06:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">07:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">08:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">09:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">10:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">11:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">12:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">13:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">14:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">15:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">16:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">17:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">18:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">19:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">20:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">21:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">22:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">23:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th class="no-seleccionable">24:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>

					</table>
				</div>
			</div>

		</div>
    )
}
export default Reservaciones;
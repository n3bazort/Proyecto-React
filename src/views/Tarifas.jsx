import * as React from "react";
import NewBarraNavegacion from "../components/NewBarraNavegacion";
import '../styles/tarifas.css';
const Tarifas = props => {
	return (
		<div>
			<NewBarraNavegacion />

			<h1 class="info">Asignar tarifas de canchas:</h1>
			<hr />
			<div class="contenedor">
				<div>
					<h2>Selecciona la cancha deseada:</h2>
					<select class="selecCancha">

						<option>Fútbol </option>

						<option>Indor</option>

						<option>Básquet</option>

					</select>
				</div>
				<div class="tabla-horario">
					<table>
						<tr>
							<th class="filaUp">Hora</th>
							<th class="filaUp">Lun</th>
							<th class="filaUp">Mar</th>
							<th class="filaUp">Mie</th>
							<th class="filaUp">Jue</th>
							<th class="filaUp">Vie</th>
							<th class="filaUp">Sab</th>
							<th class="filaUp">Dom</th>

						</tr>
						<tr>
							<th>06:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>07:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>08:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>09:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>10:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th  >11:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>12:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>13:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>14:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>15:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>16:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>17:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>18:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th  >19:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>20:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>21:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>22:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>23:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>
						<tr>
							<th>24:00</th>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
							<td>$5</td>
						</tr>

					</table>
				</div>
			</div>

		</div>
	)
}
export default Tarifas;
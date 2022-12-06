import * as React from "react";
import NewBarraNavegacion from "../components/NewBarraNavegacion";
import '../styles/agg_reserva_modal.css';

const Modal_AñadirReservacion = props => {
	return (
		<div>
			<NewBarraNavegacion/>
			<div class="modal">
				<div class="modal_container">
					<div class="modal_encabezado">
						<h4>Adicionar reserva/evento</h4>
					</div>
					<div class="body">
						<form method="post" action="registrar.php">
							<div class="grupo_formu">
								<label for="hora">Hora inicio:</label>
								<input class="hora" type="time" name="hora_inicio" id="hora" required />
							</div>
							<div class="grupo_formu">
								<label for="hora">Hora fin:</label>
								<input type="time" name="hora_fin" id="" required />
							</div>
							<div class="grupo_formu">
								<label for="valor">Precio:</label>
								<input type="number" name="precio" id="valor" required />
							</div>
							<div class="grupo_formu">
								<label for="cliente">Cliente:</label>
								<input type="text" name="cliente" id="cliente" required />
							</div>
							<div class="grupo_formu">
								<label>Título:</label>
								<input type="text" required />
							</div>
							<div class="grupo_formu">
								<label>Descripcion:</label>
								<input class="descripcion" type="text" />
							</div>
							<div class="modal_footer">
								<a href="/Proyecto AW/GUI Reservaciones/index.html" class="modal_close">Cerrar</a>
								<a href="/Proyecto AW/GUI Reservaciones/index.html" class="modal_save">Guardar</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>)
}
export default Modal_AñadirReservacion;
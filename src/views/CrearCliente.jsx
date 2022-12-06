import * as React from "react";
import NewBarraNavegacion from "../components/NewBarraNavegacion";
import '../styles/Crear_cliente.css';

const CrearCliente = props => {
    return (
        <div class="contenedor">
            <NewBarraNavegacion/>
            <form action="registrar.php" method="post" class="form-register">
                <h2 class="form__titulo">Agregar nuevo cliente </h2>

                <div class="contenedor-inputs">

                    <input type="text" name="Nombres" placeholder="Nombres" class="input-100" required />
                    <input type="tel" name="cedula" placeholder="Cédula de identidad" class="input-100" required />
                    <input type="text" name="direccion" placeholder="Dirección Ejm: La Proaño" class="input-100" required />
                    <input type="tel" name="telefono" placeholder="Teléfono" class="input-100" required />
                    <input type="email" name="correo" placeholder="Correo electrónico " class="input-100" required />
                    <input type="date" name="fecha" placeholder="Correo electrónico " class="input-100" required />
                    <input type="password" name="contraseña" placeholder="Contraseña" class="input-100" required />
                    <input type="submit" value="Guardar" class="btn-guardar" />
                    <input type="submit" value="Cerrar" class="btn-cerrar" />
                </div>
            </form>
        </div>
    )
}
export default CrearCliente;
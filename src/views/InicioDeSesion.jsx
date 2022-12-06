import * as React from "react";
import OldBarraNavegacion from "../components/OldBarraNavegacion";
import login_vector from '../img/loginvector.jpg';




const InicioDeSesion = props => {
  return (
    <div>
      <OldBarraNavegacion />
      <form class="form-register">
        <h2 class="form__titulo">Iniciar Sesión </h2>

        <section class="img_login">
          <img src={login_vector} alt="img login vector" />
        </section>

        <div class="contenedor-inputs">
          <input type="text" name="nombre" placeholder="Correo electrónico o teléfono" class="input-100" required />
          <input type="password" name="email" placeholder="Contraseña" class="input-100" required />
          <input type="submit" value="Iniciar sesión" class="btn-enviar" />

          <h4>¿No tienes cuenta? <a href="../GUI Registro/index_registro.html"> ¡Registrate ahora!</a> </h4>

        </div>
      </form>
    </div>
  )
}
export default InicioDeSesion;
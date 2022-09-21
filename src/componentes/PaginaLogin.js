function PaginaLogin() {
  
  return(
    <div class="wrapper fadeInDown">
        <div id="formContent">  
          <h2 class="active"> Ingresar </h2>
          <h2 class="inactive underlineHover">Registrarse </h2> 
          <div class="fadeIn first">
            <img src=""
            id="icon" alt = "User login"
          
            />
          </div>         
          <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario"/>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña"/>
            <input type="submit" class="fadeIn fourth" value="Ingresar"/>
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">¿Olvidaste tu contraseña?</a>
          </div>
      
        </div>
      </div>
)};
export default PaginaLogin;




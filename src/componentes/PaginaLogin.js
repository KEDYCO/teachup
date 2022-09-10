function PaginaLogin() {
  
  return(
    <div class="wrapper fadeInDown">
        <div id="formContent">  
          <h2 class="active"> Ingresar </h2>
          <h2 class="inactive underlineHover">Registrarse </h2> 
          <div class="fadeIn first">
            <img src="https://scontent.feze8-2.fna.fbcdn.net/v/t39.30808-6/301752794_10221923804466700_4163375458895239051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEekBb2LJL3pvRmu9j_psJb7O_XCRBXT8fs79cJEFdPxxzo2Tb06hDtFDqS8QTEm-w&_nc_ohc=stUPoQ5c-P4AX_JM7Ok&_nc_ht=scontent.feze8-2.fna&oh=00_AT8HEPVr0aUM2BdYjWTMSN6QxozicY4XyJLEr5pdkjkP-g&oe=63229C3E" 
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




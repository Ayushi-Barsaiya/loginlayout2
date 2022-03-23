import bellLogo from "./Logos/bellLogo.jpg"
import personLogo from "./Logos/personLogo.png"

function Navbar() {

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Lead Logo</a>
        <form class="d-flex">
          <img class="logo" src={bellLogo} alt="" /> &nbsp;
          <img class="logo" src={personLogo} alt="" />Person Name
        </form>
      </div>
    </nav>
  )
}

export default Navbar
import logo from "../../Assets/image.png";

const Navbar = () => {
  return(
    <div className="nb-container">
      <img src={logo} alt="logo" className="logo"/>

      <div className="nb-menu">
        <a href="H">Home</a>
        <a href="H">About</a>
        <a href="H">Certification</a>
        <a href="H">Authorized Partners</a>
        <a href="H">Authorized Trainers</a>
        <a href="H">Resources</a>
        <a href="H">Contact</a>
      </div>
      <button className="certification-btn btn">Get Certified</button>
    </div>
  )
}

export default Navbar;
import img from "../../Assets/i1.jpeg";
import img2 from "../../Assets/i2.jpeg";

const Certificate = () => {
  return(
    <div className="certificate-container">
      <div className="overlay">
        <img src="../../Assets/overlay.svg" alt="" />
      </div>
      <div className="img1">
        <img src={img} alt="certificate" width={500}/>
        <div className="content">
          <h1>Professional Certifications</h1>
          <p>Learn how Certification can Transform Every Department of your Organization</p>
          <button className="btn">Explore More</button>
        </div>
      </div>
      <div className="img2">
        <img src={img2} alt="certificate" width={500}/>
      <div className="content">
          <h1>Technical Certifications</h1>
          <p>Learn how Certification can Transform your IT Department</p>
          <button className="btn">Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default Certificate;
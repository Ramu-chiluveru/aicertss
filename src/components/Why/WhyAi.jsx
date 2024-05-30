import img from "../../Assets/whycrates.jpeg";
const WhyAi = () => {

  const queries = ["Comprehensive AI Certification™ Portfolio","Pioneering in AI and Blockchain Convergence","Innovative Certification Testing","Expertise-Driven Team","Extensive Network of Subject Matter Experts","Industry Recognition and Validation"];

  return(
    <div className="why-ai-container">
      <img src={img} alt="" style={{width:"50%"}}/>
      <div className="q-container">
        <p>Value</p>
        <h1>Why AI CERTs?</h1>
        <p>- Social Impact and Global Vision</p>

        <p className="lite">AI Certs™ aims to certify and train a billion people, leveraging education to create a better world. We pledge 10% of our yearly profits to construct schools for underprivileged children, embodying our commitment to societal betterment through education.</p>

        <div className="queries">
          {queries.map(query => 
            <div className="query">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1V7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9H9V15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15V9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H7V1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0Z" fill="white"/>
</svg>
{query}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default WhyAi;
const ButtonScroller = () => {

  const buttons = [
    {id:1,text:"AI+ Executive™"},
    {id:2,text:"AI+ Developer™"},
    {id:3,text:"AI+Data™"},
    {id:4,text:"AI+Prompt Engineer™"},
    {id:5,text:"AI+Sales™"},
    {id:6,text:"AI+Marketing™"},
    {id:7,text:"Bitcoin+ Executive™"},
    {id:8,text:"Bitcoin+Developer™"},
    {id:9,text:"Blockchain+ Developer™"}
  ]
  return(
    <div className="btn-scroll-container">
      {buttons.map((button)=><button type="button" className="btns" key={button.id}>{button.text}</button>)}
    </div>
  )
}

export default ButtonScroller;
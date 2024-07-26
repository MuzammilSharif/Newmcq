import React,{useState} from 'react'
import './McqPage2.css'
import  bgimage from '../Assets/bg.jpg'
import  cap from '../Assets/cap.jpeg'

const McqPage2 = () => {
    const [radiomcq,radioState]=useState("")

    const HandleRadio=(e)=>{
        radioState(e.target.value)
    }

    const [Rtextv,Rtextstat]=useState('')
    const handleRadioText=(e)=>{
        Rtextstat(e.target.value)
    }

    console.log(radiomcq)
    console.log(Rtextv)
    
  return (
    <div className='mcqpage'  style={{backgroundImage:`url(${bgimage})`}}>
        <h1>MCQ Questions</h1>

        <div className='radioquestion'>
         <div className='quetext'>Enter a Question </div> <br/>
        <input type="text"  className='mcqtext' placeholder='Enter a question' size="59"/>
        </div>

            <div className='RadioButton'>
           <input type='radio' name="radiomcq" value={Rtextv} id="mcqA" onClick={HandleRadio}/>
           <label htmlFor="mcqA"> <input type="text" onChange={handleRadioText} placeholder='Option 1'  size="55" style={{height:"20px"}}/></label> <br/><br/>

           

           <input type='radio' name="radiomcq" value="Bvalue" id="mcqB" onClick={HandleRadio}/>
           <label htmlFor="mcqA"> <input type="text" placeholder='Option 2' size="55"/></label><br/><br/>

           <input type='radio' name="radiomcq" value="CValue" id="mcqC" onClick={HandleRadio}/>
           <label htmlFor="mcqA"> <input type="text" placeholder='Option 3' size="55"/></label><br/><br/>

           <input type='radio' name="radiomcq" value="DValue" id="mcqD" onClick={HandleRadio}/>
           <label htmlFor="mcqD"> <input type="text" placeholder='Option 4' size="55"/></label>
           </div>

           <div className='Radiofbut'>
            <button  className='addbut'> ADD</button>
            <div>
            <button className='subbut'>Submit</button>
            </div>
            </div>

            <img src={cap} className='imagel' />
            <div className='textend'>
            <h2>
                A GOOD EDUCATION IS A FOUNDATION FOR A BETTER FEATURE </h2><br/>
                </div>

            

    </div>
  )
}

export default McqPage2
 import {useState} from 'react'
 function About(){
 	const [village,setvillage]=useState("america");
 	const [country,setcountry]=useState("india")
	return(
			<div className="about">
					<h1>{country}</h1>
					<p>{village}</p>
					<input
						onChange={(e)=>setvillage(e.target.value)}/>
						<button onClick={()=>console.log(village)}>Submit</button>	
					<input
						onChange={(e)=>setcountry(e.target.value)}/>
					
					<button onClick={()=>console.log(country)}>Submit</button>		
				
			</div>	
		)
}

export default About
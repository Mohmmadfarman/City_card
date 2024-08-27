import "./Final.css"

function Final({value,del,ed}){
    const ll=value.description.slice(0,193)
    
    function dell(){
        
        del(value.id)
        // console.log(value.id);
        
        
    }

    function edit(){
       ed(value);
       
    }
    
    return(
        <div className="gg">
            
        <div className="box">
           <button className="t" onClick={edit}>Edit</button>
           <button onClick={dell} className="bbb">Delete</button>
           <img className="im" src={value.image} alt="" />
           <h1>{value.city}</h1>
           <h3>$:{value.money}</h3>
           <p>{ll}<span>Read More...</span></p>
          
        </div>
        </div>
    );
}

export default Final;
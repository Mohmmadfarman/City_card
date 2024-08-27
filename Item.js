import Final from "./Final";
import "./Item.css"

function Item({data,del,ed}){
    console.log("-------------");
    console.log(data);
    
    

    
    return(
        <div className="item">
            {
                data.map((value,index)=>  (<Final value={value} key={value.id} del={del} ed={ed}/>))
            
                
                
           
            }
        </div>
    );
}

export default Item;
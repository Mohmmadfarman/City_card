import Data from './Data';
import './App.css';
import Item from './component/Item';
import Form from './component/Form';
import Empty from './component/Empty';
import { useState } from 'react';

function App() {
  const [r, setR] = useState(Data);
  const [rec, setRec] = useState("");
  const [edd,seted]=useState(null)

  function handleFormSubmit(data) {
    console.log(data);
    setRec(data);
    setR([...r, data]); // Correctly update the state with the new record
  }
  console.log("------all--------");
  // console.log(r);
  
  function del(dd){
    // console.log(dd);
    
    
    

    setR(r.filter((item) => item.id !== dd)); 
      
      
  }
  function refresh(){
    setR(Data)

  }

  function ed(e){
    console.log(e);
    seted(e)
    
  }
  function updatee(e){
    const index= r.findIndex(v=>v.id===e.id)
    console.log(e);
    const newv=[...r]
    newv.splice(index,1,e)

    console.log(newv);
    
    setR(newv)
    
  }
  
  
  return (
    <div className="App">
      <h1 style={{fontSize:"2.5rem"}} className='hd'>Gallery</h1>
      <Form f={handleFormSubmit} edd={edd} updatee={updatee} />
     
      
      <div>
        {
          (r.length=='0') ? <Empty refresh={refresh}/> :  <Item data={r} del={del} ed={ed} />
        }
      </div>
        
    
     
      
    </div>
  );
}

export default App;

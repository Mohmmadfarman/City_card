

function Empty({refresh}){
function ref(){
    refresh()
}

    return(
        <div>
            <h1>No items</h1>
            <button onClick={ref} className="bb">Refresh</button>

        </div>
    );
}

export default Empty;
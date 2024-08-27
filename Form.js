import { useEffect, useState } from "react";
import img1 from "./agra.jpg";

function Form(props) {
    const [newname, setname] = useState('');
    const [newmoney, setmoney] = useState('');
    const [newdis, setdis] = useState('');
    const [id, setid] = useState(9);

    function click(e) {
        e.preventDefault();

        if (props.edd) {
            const updatedItem = {
                id: props.edd.id,
                city: newname,
                money: newmoney,
                description: newdis,
                image: props.edd.image || img1
            };
            props.updatee(updatedItem);  // Pass the updated object
        } else {
            const newItem = {
                id: id,
                city: newname,
                money: newmoney,
                description: newdis,
                image: img1
            };
            props.f(newItem);
            setid(id + 1);
        }

        // Clear the form fields after submission
        setdis('');
        setmoney('');
        setname('');
    }

    function nm(e) {
        setname(e.target.value);
    }

    function mn(e) {
        setmoney(e.target.value);
    }

    function ds(e) {
        setdis(e.target.value);
    }

    useEffect(() => {
        if (props.edd) {
            setname(props.edd.city);
            setmoney(props.edd.money);
            setdis(props.edd.description);
        }
    }, [props.edd]);

    return (
        <div>
            <label>City:</label><br />
            <input onChange={nm} type="text" value={newname} placeholder="city name" /><br />
            <label htmlFor="">Money:</label><br />
            <input onChange={mn} type="text" value={newmoney} placeholder="enter money" /><br />
            <label htmlFor="">Description:</label><br />
            <input onChange={ds} type="text" value={newdis} placeholder="enter text" /><br />
            <button
                style={{ marginBottom: '40px', marginTop: '30px', padding: '5px', fontSize: '1.3rem' }}
                onClick={click}
            >
                {props.edd ? 'Edit' : 'Submit'}
            </button>
        </div>
    );
}

export default Form;

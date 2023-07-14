import {useState} from 'react';
import Modal from './modal.js';


function Skeleton_Structure(params){
    const[modalOpen, setModalOpen] = useState(false)
    function buttonCall(){
    setModalOpen(true);
    }

    return (
        <div className ="card" >
            <h2> {params.text} </h2>
            <div className ="actions" >
                <button className="btn" onClick = {buttonCall} > Delete </button>
            </div>
            {modalOpen && <Modal/>  }//second value will be returned

        </div>
    );
}


export default Skeleton_Structure;
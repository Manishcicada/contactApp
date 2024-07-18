import { useEffect } from "react";
import { useRef } from "react";
import {createPortal} from 'react-dom';

import classes from './Modal.module.css';

export default function Modal({open, setOpen, onConfirm, message}){

  const dialog = useRef();
  useEffect(()=>{
    if(open){
      dialog.current.showModal();
    }
    
   else{
    dialog.current.close();
   }

  },[open]);

  return(
    createPortal(<>
      <dialog 
      className={classes.dialog}
      ref={dialog}>
        {message}
        <div className={classes.action}>
          <button
            className={classes.yes}
            onClick={onConfirm}
          >Yes</button>
          <button
            className={classes.no}
            onClick={()=>setOpen(false)}
          >No</button>
        </div>
      </dialog>
    </>, document.getElementById('root'))
  );
}
import { useEffect } from "react";
import { useRef } from "react";
import {createPortal} from 'react-dom';

export default function Modal({open, children}){

  const dialog = useRef();
  useEffect(()=>{
    if(open){
      dialog.current.showModal();
    }

    return()=>{
      dialog.current.close();
    };
  },[open]);

  return(
    createPortal(<>
      <dialog ref={dialog}>
        {children}
      </dialog>
    </>, document.getElementById('root'))
  );
}
import classes from './AddContact.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { dataActions } from '../../store/dataSlice';
import { pageAction } from '../../store/activePage';
import { findIndexOfUser, isAvailableEmail } from '../../util/util';
import Modal from '../Modal/Modal';

export default function AddContact() {

  const dispatch = useDispatch();
  const state = useSelector(state=> state.data);

  const [openModal, setOpenModal] = useState({prop: false, data:null});

  function handleSubmit(event){
    event.preventDefault();

    const fd = new FormData(event.target);
    const res = Object.fromEntries(fd.entries());
    const id = Math.random();
    const data = {...res, favourite: false, id: id};

    if(data.name === '' || data.email ===''){
      throw new Error("Please enter the correct details");
    }
    else if(isAvailableEmail(state, data) === 'NOT_FOUND'){
      dispatch(dataActions.addData(data));
      dispatch(pageAction.changePage("ContactList"));
    }else{
      setOpenModal({prop: true, data: data});
    }
  }

  function handleReplaceContact(state, data){
    const index = findIndexOfUser(data,state);
    dispatch(dataActions.replaceData({index: index, data: data}));
    setOpenModal({...openModal, prop: false});
    dispatch(pageAction.changePage("ContactList"));
  }

  let message = <p>The Email already exist. Do you want Want to replace it?</p>
  return (
    <>
      <header className={classes.header}>
        <h3>Add Contact</h3>
      </header>
      <main className={classes.main}>
        <form onSubmit={handleSubmit}>
          <div className={classes.controls}>
            <input
              className={classes.input}
              placeholder="Enter Name"
              type="text"
              name='name'
              required
            />
            <input
              className={classes.input}
              placeholder="Enter Email"
              type="email"
              name='email'
              required
            />
          </div>
          <div className={classes.buttons}>
            <button>Add</button>
          </div>
        </form>
      </main>

      <Modal
      open= {openModal.prop}
      setOpen = {setOpenModal}
      message={message}
      onConfirm={()=>handleReplaceContact(state, openModal.data)}
      />
    </>
  );
}
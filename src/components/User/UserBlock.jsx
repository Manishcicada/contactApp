import classes from './UserBlock.module.css';

import User from "./User.jsx";

export default function UserBlock({data}){
  return (
    <main className = {classes.main}>
      <ul>
        {data.map(user=>(
          <li key={user.id}>
            <User 
            userName={user.name} 
            userEmail={user.email}
            favourite= {user.favourite}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
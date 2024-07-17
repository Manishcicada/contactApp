import classes from './Container.module.css';


export default function Container({children, color}) {

  
  return (
    <div className={classes.wrapper}>
      <div style = {{"backgroundColor": `${color}`}}className={classes.container}>
        {children}
      </div>
    </div>
  );
}
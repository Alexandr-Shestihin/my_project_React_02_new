import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import s from './Massage.module.scss';

const Massage = (props) => {
   let dialogsElements = props.dialogs.
      map(d => <Dialogs name={d.name} id={d.id} />);

   let showMassage = React.createRef();
   let addMassage = () => {
      alert(showMassage.current.value);
      showMassage.current.value = '';
   }
   return (
      <div div className={s.massage} >
         {dialogsElements}
         <textarea ref={showMassage}></textarea><br />
         <button onClick={addMassage}>Кнопка</button>
      </div >
   )
}
export default Massage;
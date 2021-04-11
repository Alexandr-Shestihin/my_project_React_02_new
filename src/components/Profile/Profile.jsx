import React from 'react';
import Post from './Post/Post';
import s from './Profile.module.scss';

const Profile = (props) => {

   let massageElement = props.massages.
      map(m => <Post massage={m.massage} />);

   let showPost = React.createRef();
   let addPost = () => {
      props.addPost2(showPost.current.value);
      showPost.current.value = '';
   }
   return (
      <div className={s.profile}>
         {massageElement}
         <textarea ref={showPost}></textarea><br />
         <button onClick={addPost}>Кнопка</button>
      </div>
   )
}
export default Profile;
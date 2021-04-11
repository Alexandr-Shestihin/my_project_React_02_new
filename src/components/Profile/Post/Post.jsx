import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
   return (
      <div className={s.Post}>
         <div className="post">
            <p>{props.massage}</p>
         </div>
      </div>
   )
}
export default Post;
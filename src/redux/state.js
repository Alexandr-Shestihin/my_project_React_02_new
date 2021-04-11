let state = {
   dialogsData: [
      { name: 'Олег', id: 1 },
      { name: 'Данил', id: 2 },
      { name: 'Ольга', id: 3 },
      { name: 'Юля', id: 4 },
   ],
   massagesData: [
      { massage: 'Hey, how, yo, niga whazzap' },
      { massage: 'Niga! Куклуксклан!' },
      { massage: 'They are spooky!' },
      { massage: 'Не  брат ты мне. Гнида черножопая.' },
   ],
}
export let addPost = (text) => {
   let newPost = {
      id: state.dialogsData.length + 1,
      massage: text,
   }
   state.massagesData.push(newPost);
   console.log(state.massagesData);
}
export default state;

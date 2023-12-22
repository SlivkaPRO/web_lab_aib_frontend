import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostAdd from "./components/PostAdd";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'любитель музыки', text: 'Только что открыл(а) новый жанр музыки! 🎶 #НоваяМузыка', tag: '#музыка' },
    { id: 2, username: 'ценитель искусства', text: 'Посетил(а) фантастическую выставку! 🎨 #ВдохновениеИскусства', tag: '#искусство' },
    { id: 3, username: 'книжный червь', text: 'Начал(а) читать удивительную книгу! 📚 #ЛюбительКниг', tag: '#книги' },
    { id: 4, username: 'творческая душа', text: 'Провел(а) день в живописи и чувствую вдохновение! 🎨 #ТворческийДух', tag: '#искусство' },
    { id: 5, username: 'киноМаньяк', text: 'Вчера посмотрел(а) классический фильм. 🎬 #КиноВечер', tag: '#фильмы' },
    { id: 6, username: 'поклонник танца', text: 'Сегодняшняя тренировка по танцам была невероятной! 💃 #ТанцевальнаяЖизнь', tag: '#танцы' }
  ]);
  

  const [orPosts, setOrPosts] = useState([...posts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setOrPosts([...orPosts, newPost]);
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
    setOrPosts(orPosts.filter(p => p.id !== post.id));
  }

  const sortedByTags = tag => {
    setPosts(posts.filter(p => p.tag === tag));
  }

  const showAll = posts => {
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <PostAdd create={createPost} />
      {posts.length !== 0
        ? <PostList orPosts={orPosts} show={showAll} sort={sortedByTags} remove={removePost} posts={posts} title='Список постов' />
        : <>Посты не найдены</>
      }
    </div>
  );
}

export default App;
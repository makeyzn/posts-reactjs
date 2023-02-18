import React, { useMemo, useState, useRef } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'вв', body: 'бб'},
    {id: 2, title: 'аа 2', body: 'яя'},
    {id: 3, title: 'гг 3', body: 'аа'},
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const sortedPosts = useMemo( () => {
    console.log('Отработала функция getSortedPosts')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      {/* create={createPost} -- Функция обратного вызова. Вызываем ее внутри компонента PostForm */}
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter />
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        : <h1 style={{textAlign: "center"}}>Посты не были найдены</h1>
      }
      
    </div>
  );
}

export default App;

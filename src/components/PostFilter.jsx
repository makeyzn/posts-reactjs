import React from "react";

const PostFilter = ({filter, setFilter}) => {
    return (
    <div>
        <MyInput 
            placeholder="Поиск..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect 
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка" 
            options={[
            {value: 'title', name: 'По заголовку'},
            {value: 'body', name: 'По тексту'},
        ]} />
    </div>
    )
}

export default PostFilter;
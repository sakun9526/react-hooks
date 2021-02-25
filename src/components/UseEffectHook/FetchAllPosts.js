import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchAllPosts() {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    Posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>    
        </div>
    )
}

export default FetchAllPosts

/*
    this example shows fetch all post from an API endpoint using useEffect hook
*/
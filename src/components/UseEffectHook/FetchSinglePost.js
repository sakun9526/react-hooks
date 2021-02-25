import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchSinglePost() {
    const [Post, setPost] = useState({})
    const [Id, setId] = useState(0)
    const [Idfrombutton, setIdfrombutton] = useState(0)

    const handleClick = () => {
        setIdfrombutton(Id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Idfrombutton}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [Idfrombutton])

    return (
        <div>
            <input type="text" value={Id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch single post</button>
            <div>{Post.title}</div>
        </div>
    )
}

export default FetchSinglePost

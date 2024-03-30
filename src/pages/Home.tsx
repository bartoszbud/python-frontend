import axios from 'axios';
import { useState } from 'react';

    function Home() {
        
        const [post, setPost] = useState({
            title: '',
            body: '',
            age: ''
        })

        const handleInput = (event: any) => {
            setPost({...post, [event.target.name]: event.target.value})
        }

        function handleSubmit(event: any) {
            event.preventDefault()
            axios.post('https://jsonplaceholder.typicode.com/posts', {post})
            .then(response => console.log('Post submitted succesfully', response))
            .catch(error => console.log('Error submitting post', error))
        }
    
        return(
            <div className="Home">
                <form>
                    Title: <input type='text' onChange={handleInput} name='title'></input><br></br>
                    Post: <input type='text' onChange={handleInput} name='body'></input><br></br>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }

export default Home;


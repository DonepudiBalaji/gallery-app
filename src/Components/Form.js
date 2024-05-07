import React, {  useState } from 'react'
import axios from 'axios'
import Gallery from './Gallery'

function Form() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])


    //change Handler
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }


    //submit Handler
    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${search}&page=1&per_page=24&format=json&nojsoncallback=1`)
            .then((res) => {
                setData(res.data.photos.photo)
                console.log(res.data.photos)
            })
            .catch((err) => {
                console.log("Undefined", err)
            })
    }
    


    return (
        <div>
            <form onClick={submitHandler} >
                <div className='text-center py-6'>    
                    <input value={search} onChange={changeHandler} className='border border-4' type='text' placeholder='Please Search for Image'/> <br />
                    <button className='bg-blue-400 mt-4 text-white' >Submit</button>
                </div>
            </form>
            <Gallery data={data} />
        </div>
    )
}

export default Form
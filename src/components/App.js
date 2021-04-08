import React, { useEffect, useState } from 'react'
import '../style/App.css'
import Gallery from './Gallery'
import SearchPhotos from './SearchPhotos'
import { createApi } from "unsplash-js";

/* create api */
const unsplash = createApi({
  accessKey: "otXuEBXcGNONwttxVmqxQki5SyXIvp9XvD6m_tlK4zo"
});


const App = () => {

  const [pics, setPics] = useState([])

  useEffect(() => {
    unsplash.photos.getRandom({
      count: 15,
    })
      .then(res => { setPics(res.response) })

  }, [])


  return (
    <div className="App">
      {/* https://www.digitalocean.com/community/tutorials/how-to-build-a-photo-search-app-with-react-using-the-unsplash-api */}
      <div className="container">
        <h1 className='title'>PIKAPIK</h1>
        <SearchPhotos unsplash={unsplash} />
        <Gallery pics={pics} />
      </div>
    </div>
  );

}

export default App

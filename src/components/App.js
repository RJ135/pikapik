import React, { useEffect, useState, useCallback, memo } from 'react'
/* import '../style/App.css' */
import '../style/App.css'
import Gallery from './Gallery'
import SearchPhotos from './SearchPhotos'
import Topics from './Topics'
import Loader from './Loader'
import { createApi } from "unsplash-js";

/* create api */
const unsplash = createApi({
  accessKey: `${process.env.REACT_APP_ACCESSKEY}`
});

const App = () => {

  /* console.log('render Parent App'); */
  const [pics, setPics] = useState([])
  const [query, setQuery] = useState("")
  const [topicsList, setTopicsList] = useState([])
  const [currentTopics, setCurrentTopics] = useState("")
  const [totalPics, setTotalPics] = useState(0)


  /* TOPICS PHOTOS */
  /* Handle pick up a topics */
  const reachTopic = useCallback(async (topicSlug, topicTitle) => {
    /* console.log("trigger fx reachTopic"); */
    try {
      const res = await unsplash.topics.getPhotos({
        topicIdOrSlug: topicSlug,
        page: 1,
        perPage: 30,
      })
      setCurrentTopics(topicTitle)
      setPics(res.response.results)
      setTotalPics(res.response.total)
    } catch (err) {
      console.log(err)
    }
  }, [])
  useEffect(() => {
    reachTopic('people', 'People')
  }, [reachTopic])

  /* TOPICS LIST */
  const fetchTopicList = useCallback(async () => {
    try {
      const res = await unsplash.topics.list({
        page: 1,
        perPage: 30,
      })
      setTopicsList(res.response.results)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    fetchTopicList()
  }, [fetchTopicList])

  /* Handle Search Photos*/
  const searchPhotos = useCallback(async (e) => {
    /* console.log("trigger fx searchPhotos"); */
    e.preventDefault()
    try {
      const res = await unsplash.search.getPhotos({
        query: query,
        page: 1,
        perPage: 30,
        order_by: 'popular',
      })
      setPics(res.response.results)
      setCurrentTopics(`Results for "${query}"`)
      setTotalPics(res.response.total)
      setQuery('')
    } catch (err) {
      console.log(err)
    }
  }, [query]);



  return (
    <div className="App" >
      <header className='header container'>
        <h1 className='title'>PIKAPIK</h1>
        <SearchPhotos
          searchPhotos={searchPhotos}
          query={query}
          setQuery={setQuery}
        />
      </header>


      <main className="main container">
        <Topics
          reachTopic={reachTopic}
          topicsList={topicsList}
        />
        {pics ?
          <Gallery
            pics={pics}
            currentTopics={currentTopics}
            totalPics={totalPics}
          /> :
          <Loader />
        }
      </main>

    </div>
  );

}

export default memo(App)


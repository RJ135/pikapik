import React, { useEffect, useState, useCallback, memo } from 'react'
/* import '../style/App.css' */
import '../style/App.css'
import Gallery from './Gallery'
import SearchPhotos from './SearchPhotos'
import Topics from './Topics'
import Loader from './Loader'
import unsplash from '../api/unsplashApi';

/* create api */


const App = () => {

  /* console.log('render Parent App'); */
  const [pics, setPics] = useState([])
  const [query, setQuery] = useState("")
  const [topicsList, setTopicsList] = useState([])
  const [currentTopics, setCurrentTopics] = useState("")
  const [totalPics, setTotalPics] = useState(0)
  const [descTopic, setDescTopic] = useState([])

  /* TOPICS PHOTOS */
  /* Handle pick up a topics */
  const reachTopic = useCallback(async (topicSlug, topicTitle, topicDesc) => {
    /* console.log("trigger fx reachTopic"); */

    try {
      const res = await unsplash.topics.getPhotos({
        topicIdOrSlug: topicSlug,
        page: 1,
        perPage: 30,
      })
      setCurrentTopics(p => p = topicTitle)
      setPics(p => p = res.response.results)
      setTotalPics(p => p = res.response.total)
      setDescTopic(p => p = topicDesc)
    } catch (err) {
      console.log(err)
    }
  }, [])
  useEffect(() => {
    reachTopic('people', 'People', 'Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story.')
  }, [reachTopic])

  /* TOPICS LIST */
  const fetchTopicList = useCallback(async () => {
    try {
      const res = await unsplash.topics.list({
        page: 1,
        perPage: 30,
      })
      setTopicsList(p => p = res.response.results)
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
      setPics(p => p = res.response.results)
      setCurrentTopics(p => p = `Results for "${query}"`)
      setTotalPics(p => p = res.response.total)
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
            descTopic={descTopic}
          /> :
          <Loader />
        }
      </main>

    </div>
  );

}

export default memo(App)


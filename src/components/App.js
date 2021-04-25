import React, { useEffect, useState, useCallback } from 'react'
/* import '../style/App.css' */
import '../style/App.css'
import Gallery from './Gallery'
import SearchPhotos from './SearchPhotos'
import Topics from './Topics'
import { createApi } from "unsplash-js";

/* create api */
const unsplash = createApi({
  accessKey: `${process.env.REACT_APP_ACCESSKEY}`
});

const App = () => {

  const [pics, setPics] = useState([])
  const [query, setQuery] = useState("")
  const [topicsList, setTopicsList] = useState([])
  const [currentTopics, setCurrentTopics] = useState("")
  const [totalPics, setTotalPics] = useState(0)


  console.log(
    "render Composant parent App",
    `currentTopic = ${currentTopics === '' ? 'empty' : currentTopics}`,
    `topicsList = ${topicsList.length === 0 ? 'empty' : 'full'}`,
    `pics = ${pics.length === 0 ? 'empty' : 'full'}`,
    `query = ${query === '' ? 'not typing' : 'typing'}`
  );

  /* TD : re-render SearchPhotos uniquement onsubmit / enter key*/


  /* TOPICS PHOTOS */
  const fetchTopicPhotos = useCallback(async (slug) => {
    try {
      const res = await unsplash.topics.getPhotos({
        topicIdOrSlug: slug,
        orderBy: 'popular',
        page: 1,
        perPage: 30,
      })
      setCurrentTopics('People')
      setPics(res.response.results)
      setTotalPics(res.response.total)
    } catch (err) {
      console.log(err)
    }
  }, [])
  useEffect(() => {
    console.log("useEffect pics d'un topic");
    fetchTopicPhotos('people')
  }, [fetchTopicPhotos])

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
    console.log('useEffect list topics');
    fetchTopicList()
  }, [fetchTopicList])

  /* Handle Search Photos*/
  const searchPhotos = useCallback(async (e) => {
    e.preventDefault();
    console.log("trigger fx searchPhotos");
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


  /* Handle pick up a topics */
  const reachTopic = useCallback(async (topicSlug, topicTitle) => {
    console.log("trigger fx reachTopic");
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

  return (
    <div className="App">
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
        <Gallery
          pics={pics}
          currentTopics={currentTopics}
          totalPics={totalPics}
        />
      </main>

    </div>
  );

}

export default App


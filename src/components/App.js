import React, { useEffect, useState, useCallback, memo } from 'react'
import loadable from '@loadable/component'

/* Import Style */
import '../style/App.css'

/* special modules */
import unsplash from '../api/unsplashApi';
import parser from 'html-react-parser';

/* Components */
/* import Loader from './Loader' */

/* Lazy load components import */
const Gallery = loadable(() => import('./Gallery'));
const SearchPhotos = loadable(() => import('./SearchPhotos'));
const TopicMenu = loadable(() => import('./TopicMenu'));


/* TODO : Decouper architecture de l'app 
et fragmenter dos style 
et optimiser affichage img :
voir https://www.smashingmagazine.com/2021/04/humble-img-element-core-web-vitals/
voir Core Web Vitals

*/

const App = () => {

  /* console.log('render Parent App'); */
  const [pics, setPics] = useState([])
  const [query, setQuery] = useState("")
  const [topicsList, setTopicsList] = useState([])
  const [currentTopics, setCurrentTopics] = useState("")
  const [totalPics, setTotalPics] = useState(0)
  const [descTopic, setDescTopic] = useState([])


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
      setDescTopic(p => p = parser(topicDesc))
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    reachTopic('people', 'People', 'Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story.')
  }, [reachTopic])


  /* Handle list of topics*/
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
      setCurrentTopics(p => p = `Pictures of "${query}"`)
      setTotalPics(p => p = res.response.total)
      setQuery(p => p = '')
      setDescTopic(p => p = '')
    } catch (err) {
      console.log(err)
    }
  }, [query]);



  return (
    <div className="App container" >

      <header className='header'>
        <h1 className='title'>PIKAPIK</h1>
        <SearchPhotos
          searchPhotos={searchPhotos}
          query={query}
          setQuery={setQuery}
        />
      </header>

      <main className="main">
        <TopicMenu
          reachTopic={reachTopic}
          topicsList={topicsList}
          currentTopics={currentTopics}
        />
        <Gallery
          pics={pics}
          currentTopics={currentTopics}
          totalPics={totalPics}
          descTopic={descTopic}
        />
      </main>
    </div>

  );

}

export default memo(App)


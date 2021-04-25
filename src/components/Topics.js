import React from 'react'



const Topics = ({ topicsList, reachTopic }) => {
    console.log("render Composant enfant Topics");

    /* Trier Orde alphabetique */
    /* const sortTopicsList = useMemo(
        () => [...topicsList],
        [topicsList]
    ) */


    return (
        <nav className='topic'>
            <ul className='topic--list'>
                {topicsList.map((topicItem) => {
                    return <li className="topic--item" key={topicItem.id}>
                        <a href="/#" title={topicItem.description} onClick={() => reachTopic(topicItem.slug, topicItem.title)}>
                            {topicItem.title}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default React.memo(Topics)

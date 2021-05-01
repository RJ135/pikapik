import React, { memo, useMemo, useCallback } from 'react'



const Topics = ({ topicsList, reachTopic }) => {
    /* console.log("render Enfant Topics"); */

    const listTopics = useMemo(() => topicsList, [topicsList])

    const handleReactTopic = useCallback(
        (slug, title) => {
            reachTopic(slug, title)
        },
        [reachTopic],
    )


    return (
        <nav className='topic'>
            <ul className='topic--list'>
                {listTopics.map((topicItem) => {
                    return <li className="topic--item" key={topicItem.id}>
                        <a href="/#" title={topicItem.description} onClick={() => handleReactTopic(topicItem.slug, topicItem.title)}>
                            {topicItem.title}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default memo(Topics)

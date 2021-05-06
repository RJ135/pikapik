import React, { memo, useMemo, useCallback } from 'react'

const Topics = ({ topicsList, reachTopic, currentTopics }) => {
    /* console.log("render Enfant Topics"); */

    const listTopics = useMemo((p) => p = topicsList, [topicsList])

    const handleReactTopic = useCallback(
        (e, slug, title, description) => {
            e.preventDefault()
            reachTopic(slug, title, description)
        },
        [reachTopic],
    )

    return (
        <nav className='topic'>
            <ul className='topic--list'>
                {listTopics.map((topicItem) => {
                    return <li className="topic--item" key={topicItem.id}>
                        <a href="/#" title={topicItem.description} onClick={(e) => handleReactTopic(e, topicItem.slug, topicItem.title, topicItem.description)}>
                            {topicItem.title}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default memo(Topics)

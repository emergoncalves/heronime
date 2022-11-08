import React from 'react'
import ContentCard from '../ContentCard'
import styles from '../../styles/ListContent.module.less'

export default function ListContent({ results }) {
  return (
    <div className={styles.listContent}>
      {results.data.map(result =>
        <ContentCard key={result.id} info={result.attributes} />
      )}
    </div>
  )
}

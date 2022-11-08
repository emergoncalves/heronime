import Image from 'next/image'
import React from 'react'
import styles from '../../styles/ContentCard.module.less'

function ContentCard({key, info}) {
  return (
    <div key={key} className={styles.contentCard}>
        <div className={styles.image}>
            <Image 
            src={info.posterImage.large} 
            layout='fill'
            objectFit="cover" />
        </div>
    </div>
  )
}

export default ContentCard
import React, { useState } from 'react'
import ContentCard from '../ContentCard'
import styles from '../../styles/ListContent.module.less'
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListContent({ results }) {
  const [items, setItems] = useState(results.data);
  const [hasMore, setHasMore] = useState(true);

  const getMoreItems = async () => {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${items.length}`
    );
    const newItems = await res.json();
    setItems((item) => [...item, ...newItems.data]);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={getMoreItems}
      hasMore={hasMore}
      loader={<h3> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <div className={styles.listContent}>
        {items.map(result =>
          <ContentCard key={result.id} info={result.attributes} />
        )}
      </div>
    </InfiniteScroll>
  )
}

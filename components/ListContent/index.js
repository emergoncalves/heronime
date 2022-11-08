import React, { useState } from 'react'
import ContentCard from '../ContentCard'
import styles from '../../styles/ListContent.module.less'
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListContent({ results }) {
  const [posts, setPosts] = useState(results.data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${posts.length}`
    );
    const newPosts = await res.json();
    console.log(newPosts)
    setPosts((post) => [...post, ...newPosts.data]);
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePost}
      hasMore={hasMore}
      loader={<h3> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <div className={styles.listContent}>
        {posts.map(result =>
          <ContentCard key={result.id} info={result.attributes} />
        )}
      </div>
    </InfiniteScroll>
  )
}

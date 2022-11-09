import { Layout } from 'antd'
import React from 'react'
import MainHeader from '../components/MainHeader';
import ListContent from '../components/ListContent';
import Head from 'next/head';

export default function Home(props) {

  const { Content } = Layout;

  return (
    <div>
      <Head>
        <title>Heronime - Discover thousands of anime</title>
        <meta name="title" content="Heronime - Discover thousands of anime" />
        <meta name="description" content="Discover new anime on Heronime. Search and discover thousands of anime!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Heronime - Discover thousands of anime" />
        <meta property="og:description" content="Discover new anime on Heronime. Search and discover thousands of anime!" />
        <meta property="og:image" content="/images/cover.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Heronime - Discover thousands of anime" />
        <meta property="twitter:description" content="Discover new anime on Heronime. Search and discover thousands of anime!" />
        <meta property="twitter:image" content="/images/cover.jpg" />
      </Head>
      <MainHeader />
      <Content className="container">
        <ListContent results={props.results} />
      </Content>
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const offset = context?.query.offset ? context?.query.offset : 0;
  const search = context?.query.search ? `&filter[text]=${context?.query.search}` : '';

  const results = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}${search}`)
    .then(res => res.json())

  return {
    props: {
      results
    }
  }
}
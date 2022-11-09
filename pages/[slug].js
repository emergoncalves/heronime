import Image from 'next/image';
import Head from 'next/head';
import { Space, Collapse, Tooltip } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import React from 'react'
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import MainHeader from '../components/MainHeader';
import styles from '../styles/Single.module.less';
import Video from '../components/Video';

function ItemPost({ result }) {
    const router = useRouter();
    const { Panel } = Collapse;
    const slug = router.query.slug;
    const { attributes } = result;

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <Head>
                <title>{result.attributes.canonicalTitle}</title>
                <meta name="title" content={result.attributes.canonicalTitle} />
                <meta name="description" content={attributes.description.substring(0,155)} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://heronime.vercel.app/" />
                <meta property="og:title" content={result.attributes.canonicalTitle} />
                <meta property="og:description" content={attributes.description.substring(0,155)}  />
                <meta property="og:image" content="/images/cover.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://heronime.vercel.app/" />
                <meta property="twitter:title" content={result.attributes.canonicalTitle} />
                <meta property="twitter:description" content={attributes.description.substring(0,155)}  />
                <meta property="twitter:image" content="https://heronime.vercel.app/images/cover.jpg" />
            </Head>
            <MainHeader />
            <div className='container'>
                <BreadcrumbsNav slug={slug} title={result.attributes.canonicalTitle} />

                <div className={styles.contentArea}>
                    <div className={styles.image}>
                        <Image
                            src={attributes.posterImage.large}
                            layout='fill'
                            objectFit="cover"
                            objectPosition='top center'
                            alt={attributes.canonicalTitle}
                            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw" />
                        <div className={styles.infoBar}>
                            <Space size={'large'}>
                                <Tooltip title="Popularity Rank">
                                    <Space>
                                        <StarOutlined />
                                        <span>{attributes.popularityRank}</span>
                                    </Space>
                                </Tooltip>
                                <Tooltip title="Favorites">
                                    <Space>
                                        <LikeOutlined />
                                        <span>{attributes.favoritesCount}</span>
                                    </Space>
                                </Tooltip>
                            </Space>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentHeader}>
                            <h1>{attributes.canonicalTitle}</h1>
                            <p>{result.type}</p>
                        </div>
                        <div className={styles.contentBody}>
                            <div>
                                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                                    <Panel header="Synopsis" key="1">
                                        <p>{attributes.synopsis}</p>
                                    </Panel>
                                    <Panel header="Description" key="2">
                                        <p>{attributes.description}</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>

                    </div>
                    {attributes.youtubeVideoId &&
                        <div className={styles.videoArea}>
                            <h3>Trailer</h3>
                            <Video youtubeId={attributes.youtubeVideoId} />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemPost;


export const getServerSideProps = async (context) => {

    const slug = context?.query.slug;

    const result = await fetch(`https://kitsu.io/api/edge/anime?filter[slug]=${slug}`)
        .then(res => res.json())

    return {
        props: {
            result: result.data[0]
        }
    }
}
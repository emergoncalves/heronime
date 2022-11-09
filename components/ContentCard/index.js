import { Drawer, Space } from 'antd'
import { MoreOutlined, LikeOutlined } from '@ant-design/icons';
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/ContentCard.module.less'
import Link from 'next/link';

function ContentCard({ info }) {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const content = (
        <p>{info.synopsis}</p>
    );

    const [flip, setFlip] = useState(false);

    return (
        <div className={styles.contentCard}>
            <div className={styles.image}>
                <Link href={info.slug}>
                    <Image
                        src={info.posterImage.large}
                        layout='fill'
                        objectFit="cover"
                        alt={info.canonicalTitle}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </Link>
                <div className={styles.buttonInfoContent}>
                    <MoreOutlined onClick={() => showDrawer()} />
                </div>
            </div>

            <div className={styles.contentTitle}>
                <Link href={info.slug}>
                    <h2>{info.canonicalTitle}</h2>
                </Link>
            </div>
            <Drawer title={info.canonicalTitle} className={styles.drawer} placement="right" onClose={onClose} open={open}>
                <Space direction='vertical'>
                    <div>
                        {content}
                    </div>
                    {info.favoritesCount &&
                        <Space>
                            <LikeOutlined />
                            {info.favoritesCount}
                            <span></span>
                        </Space>
                    }
                </Space>

            </Drawer>
        </div>
    )
}

export default ContentCard
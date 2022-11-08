import { Drawer, Pagination } from 'antd'
import {MoreOutlined} from '@ant-design/icons';
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/ContentCard.module.less'
import { isMobile } from 'react-device-detect';

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
                {console.log(isMobile)}
                <Image
                    src={info.posterImage.large}
                    layout='fill'
                    onClick={() => isMobile ? showDrawer() : ""}
                    objectFit="cover"
                    alt={info.canonicalTitle}
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                />
                <div className={styles.buttonInfoContent}>
                    <MoreOutlined onClick={()=> showDrawer()} />
                </div>
            </div>

            <div className={styles.contentTitle}>
                <h2>{info.canonicalTitle}</h2>
            </div>
            <Drawer title={info.canonicalTitle} placement="right" onClose={onClose} open={open}>
                <div>
                    {content}
                </div>
            </Drawer>
        </div>
    )
}

export default ContentCard
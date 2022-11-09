import { Breadcrumb } from 'antd';
import Link from 'next/link'
import React from 'react'

export default function BreadcrumbsNav({ title }) {


    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link href="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

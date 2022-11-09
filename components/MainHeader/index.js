import React, {useState} from 'react';
import { useRouter } from 'next/router'
import { Layout, Space } from 'antd'
import Head from 'next/head'
import LogoImage from '../LogoImage';
import styles from '../../styles/Home.module.less';
import SearchInput from '../SearchInput';
import Link from 'next/link';

function MainHeader() {
  const { Header } = Layout;
  const router = useRouter();
  return (
    <>
      <Header className='container header'>
        <div className='flex justify-between items-center'>
          <Link href="/">
            <LogoImage />
          </Link>
          <SearchInput />
        </div>
      </Header>
    </>
  )
}

export default MainHeader;
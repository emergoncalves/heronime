import React from 'react';
import { Layout, Space } from 'antd'
import Head from 'next/head'
import LogoImage from '../LogoImage';
import styles from '../../styles/Home.module.less';
import SearchInput from '../SearchInput';
import Link from 'next/link';

function MainHeader() {
  const { Header } = Layout;
  return (
    <>
      <Header className='container header'>
        <div className='flex justify-between items-center'>
          <a href="/">
            <LogoImage />
          </a>
          <SearchInput />
        </div>
      </Header>
    </>
  )
}

export default MainHeader;
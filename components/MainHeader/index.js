import React from 'react';
import { Layout, Space } from 'antd'
import LogoImage from '../LogoImage';
import SearchInput from '../SearchInput';
import Link from 'next/link';

function MainHeader() {
  const { Header } = Layout;

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
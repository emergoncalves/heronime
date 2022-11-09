import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { useRouter } from 'next/router';

function SearchInput() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const { Search } = Input;

    useEffect(() => {
        setSearchValue(router.query.search ?? '');
    }, [])

    const onSearch = async (value) => {
        window.location.href = `/?search=${value}`;
    };

    return (
        <Search className="outline-none" placeholder="input search text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSearch={onSearch} style={{ width: 420 }} />
    )
}

export default SearchInput
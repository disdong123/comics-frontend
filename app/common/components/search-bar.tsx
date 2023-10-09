'use client';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { ComicOpenApiClient } from '@/app/common/client/comic/comic-open-api.client';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      // 검색어를 사용하여 서버로 요청을 보내고 결과를 받아옵니다.
      // const response = await axios.get(`/api/search?query=${searchTerm}`); // 여기에 서버의 API 엔드포인트를 넣어주세요.
      //
      // // 결과를 처리합니다.
      console.log({
        prvKey: process.env.COMIC_API_KEY,
        title: searchTerm,
        pageNo: 1,
        viewItemCnt: 30,
      });

      // console.log(await ComicOpenApiClient.searchByProductName(searchTerm));
    } catch (error) {
      console.error('검색 에러:', error);
    }
  };

  return (
    <InputGroup>
      <Input
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <InputRightElement>
        <IconButton
          aria-label="검색"
          icon={<SearchIcon />}
          bg="transparent"
          onClick={handleSearch}
        />
      </InputRightElement>
    </InputGroup>
  );
}

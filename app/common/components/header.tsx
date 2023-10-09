import { Box, Button, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import { ComicClient } from '@/app/common/client/comic/comic.client';
import SearchBar from '@/app/common/components/search-bar';

export function Header() {
  return (
    <Box
      textAlign="center"
      h="100px"
      bgColor="gray.200"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      maxW={'900px'}
      margin={'0 auto'}
    >
      <Text fontWeight="bold" fontSize="xl">
        헤더
      </Text>
      <SearchBar />
      <Flex alignItems="center">
        <Link href={'/comics/create'}>
          <Button colorScheme="blue">글쓰기</Button>
        </Link>
        <Spacer />
        <Button colorScheme="blue">로그인</Button>
      </Flex>
    </Box>
  );
}

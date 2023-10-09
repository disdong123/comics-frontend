import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ComicClient } from '@/app/common/client/comic/comic.client';

export default async function SimpleComicList() {
  const comics = await ComicClient.getComics();

  return (
    <Box maxW={'900px'} margin={'0 auto'} textAlign="center">
      <Box mt={'40px'} mb={'40px'}>
        <Flex justifyContent="center" mt="4" mb="2">
          <Box flex="1" mr="2">
            <Box>평점 높은 순</Box>
          </Box>
          <Box flex="1" ml="2">
            <Box>리뷰 많은 순</Box>
          </Box>
        </Flex>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center">
        {comics.slice(0, 5).map((comic, index) => (
          <Card key={index} maxW="sm" flex="1" m="10px">
            <CardBody>
              <Image
                src={comic.imageUrl}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontWeight="bold">{comic.productName}</Text>
                <Text fontSize="sm">{comic.genre}</Text>
                <Text fontSize="sm">{comic.author}</Text>
                <Text>평점: 4.5</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
      <Box mt={'40px'}>
        <Link href={'/comics'}>더보기</Link>
      </Box>
    </Box>
  );
}

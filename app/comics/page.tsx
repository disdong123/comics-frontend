import Link from 'next/link';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Image, Button, ButtonGroup, Divider, Heading, Stack, Text, Box, Center } from '../Chakra';
import { Avatar, Flex, IconButton, Tag, TagLabel } from '@chakra-ui/react';
import { ComicClient } from '@/app/common/client/comic/comic.client';

export default async function Comics() {
  const comics = await ComicClient.getComics();
  const ratings = await ComicClient.getRatingsByIds(comics.map((comic) => comic.id));
  return (
    <Box maxW={'900px'} margin={'0 auto'}>
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
      {comics.map((comic, index) => (
        <Card
          key={comic.id}
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          mb={'10px'}
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={comic.imageUrl}
            alt="Caffe Latte"
          />
          <Stack>
            <Link
              href={{
                pathname: `/comics/${comic.id}/detail`,
                query: comic,
              }}
            >
              <CardBody>
                <Heading size="md">{comic.productName}</Heading>
                <Box mt={'10px'} mb={'10px'}>
                  <ComicLabel title={comic.ageGroup} color={'gray'} />
                  <ComicLabel title={comic.genre} color={'red'} />
                </Box>
                <Text py="2">{comic.summary}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  하트
                </Button>
                <Text ml={'10px'}>
                  {ratings.find((rating) => rating.comicId === comic.id).rating}
                </Text>
              </CardFooter>
            </Link>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}

export function ComicLabel(props) {
  return (
    <Tag size="lg" colorScheme={props.color} borderRadius="full">
      {/*<Avatar src="https://bit.ly/sage-adebayo" size="xs" name="Segun Adebayo" ml={-1} mr={2} />*/}
      <TagLabel>{props.title}</TagLabel>
    </Tag>
  );
}

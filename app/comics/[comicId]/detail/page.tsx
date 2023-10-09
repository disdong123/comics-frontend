import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { ComicClient } from '@/app/common/client/comic/comic.client';

export default async function ComicDetail(props) {
  const comic = await ComicClient.getComicById(props.params.comicId);
  return (
    <Box ml="20%" mr="20%">
      <Image src={comic.imageUrl} width={'20%'} height={'30%'} />
      <Heading>{comic.productName}</Heading>
      <Text>{comic.author}</Text>
      <Text>{comic.ageGroup}</Text>
      <Text>{comic.category}</Text>
      <Text>{comic.genre}</Text>
      <div>
        <h4 className="red">comic: {props.params.comicId}</h4>
        <Link href="/comics">comic</Link>
      </div>
    </Box>
  );
}

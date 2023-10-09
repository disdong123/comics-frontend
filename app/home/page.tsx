import Image from 'next/image';
import Link from 'next/link';
import SimpleComicList from '@/app/home/simple-comic-list';
import { ComicOpenApiClient } from '@/app/common/client/comic/comic-open-api.client';

export default async function Home() {
  console.log(await ComicOpenApiClient.searchByProductName('헬퍼'));
  return (
    <div>
      <SimpleComicList></SimpleComicList>
    </div>
  );
}

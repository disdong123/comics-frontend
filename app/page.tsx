import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Header } from '@/app/common/components/Header';

export default function Root() {
  return (
    <div>
      <Header />
      {redirect('/home')}
    </div>
  );
}

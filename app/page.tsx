import Head from 'next/head';
import GridView from '../src/components/GridView';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="A Next.js application with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-[20px]'>
        <GridView />
      </main>
    </div>
  );
}
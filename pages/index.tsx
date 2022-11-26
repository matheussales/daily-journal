import Head from 'next/head';
import HomeTemplate from '../components/template/home';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Daily Journal</title>
            </Head>

            <HomeTemplate />
        </div>
    );
}

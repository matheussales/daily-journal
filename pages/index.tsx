import Head from 'next/head';
import HomeTemplate from '../components/template/home';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Daily Journal</title>
            </Head>

            <HomeTemplate />
        </div>
    );
};

export default Home;

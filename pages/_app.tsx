import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;

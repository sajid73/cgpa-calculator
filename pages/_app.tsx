import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import FooterComp from '../components/FooterComp';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'green',
      },
      components: {
        Table: {
          colorBgContainer: 'black',
          colorText: 'white',
          colorTextHeading: 'white'
        },
      }
    }}>
    <Component {...pageProps} />
    <FooterComp />
  </ConfigProvider>)
}

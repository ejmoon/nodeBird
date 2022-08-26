import Protypes from 'prop-types';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import Head from 'next/head';
import wrapper from '../store/configureStore';


function NodeBird({ Component }) {
  return (
    <>
    {/* <Provider store={store}> 
        6 버전 이전에 사용
    */}
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
}

NodeBird.protype = {
  Component: Protypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);

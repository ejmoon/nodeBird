import Protypes from 'prop-types';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import Head from 'next/head';


function NodeBird({ Component }) {
  return (
    <>
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

export default NodeBird;

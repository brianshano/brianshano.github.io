import Header from './Header';
import Item from './Item';
import Head from 'next/head';

const layoutStyle = {
  // margin: 20,
  padding: 20
  // border: '1px solid #DDD'
};

const Layout = props => {
  // const compColor = 'orange';
  return (
    <div style={layoutStyle}>
      <Head>
        <title>brianshano profile page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Item color="orange" />
    </div>
  );
};

export default Layout;

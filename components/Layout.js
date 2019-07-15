import Header from './Header';
import Item from './Item';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => {
  const compColor = 'orange';
  return (
    <div style={layoutStyle}>
      <Header />
      <Item color="orange" />
      {/* <Item color="blue" />
      <Item color="green" />
      <Item color="purple" /> */}
      {props.children}
    </div>
  );
};

export default Layout;

import Header from '../components/Header';
import Layout from '../components/Layout.js';
import Link from 'next/link';

export default function Index() {
  return (
    <Layout>
      <p className="tsttxt">Hello Next.js</p>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        .tsttxt {
          color: red;
        }
        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      ;
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </Layout>
  );
}

// const Index = () => (
//   <div>
//     <p>Hello Next.js</p>
//     <div className="header">
//       <img
//         src="https://res.cloudinary.com/bshano/image/upload/r_516/v1554842551/Profile%20Photos/brian-loop-once.gif"
//         className="App-logo"
//         width="200px"
//         alt="logo"
//       />
//     </div>
//   </div>
// );

// export default Index;

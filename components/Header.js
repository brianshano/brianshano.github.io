import Link from 'next/link';

const Header = () => (
  <div className="header">
    <img
      src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,h_208,r_192,w_192/v1554842551/Profile%20Photos/brian-loop-once.gif"
      // src="https://res.cloudinary.com/bshano/image/upload/r_516/v1554842551/Profile%20Photos/brian-loop-once.gif"
      className="profile-pic"
      alt="logo"
    />
    <style jsx>
      {`
        .header {
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }
        .profile-pic {
          width: 12rem;
        }
      `}
    </style>
  </div>
);

export default Header;

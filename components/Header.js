import Link from 'next/link';

const Header = () => (
  <div className="header">
    <img
      src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,h_208,r_192,w_192/v1554842551/Profile%20Photos/brian-loop-once.gif"
      // src="https://res.cloudinary.com/bshano/image/upload/r_516/v1554842551/Profile%20Photos/brian-loop-once.gif"
      className="profile-pic"
      alt="logo"
    />
    <div className="head-text">
      Creative Technologist | Full Stack Engineer | Frontend / UI expert | User
      Focused | Business Analyst
    </div>
    <a
      href="https://twitter.com/BrianShano?ref_src=twsrc%5Etfw"
      class="twitter-follow-button"
      data-show-count="false"
    >
      Follow @BrianShano
    </a>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    <style jsx>
      {`
        .header {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          font-family: 'Istok Web', sans-serif;
          // font-family: 'Cabin', sans-serif;
        }
        .head-text {
          font-size: 16px;
          margin: 1rem;
        }
        .profile-pic {
          width: 12rem;
        }
      `}
    </style>
  </div>
);

export default Header;

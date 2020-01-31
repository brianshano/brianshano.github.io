import Link from 'next/link';
// import macbook from './../assets/2015-riffstation-macbook.jpg';
// import macbook from './logo.svg';
// import torcLocal from 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_996/v1554845897/Portfolio%20Photos/2015-riffstation-macbook.png';

const Item = props => {
  console.log('color: ', props.color);
  const laptopImage =
    'https://res.cloudinary.com/bshano/image/upload/f_auto/v1561120207/Portfolio%20Photos/Laptop.svg';
  const jobs = [
    // {
    //   title: 'Buildit @ Wipro Digital',
    //   mediaType: 'image',
    //   media:
    //     'https://res.cloudinary.com/bshano/video/upload/f_auto/v1561129114/Portfolio%20Photos/Jun-21-2019_15-53-42.mp4',
    //   alt: 'Riffstation.com',
    //   year: '2015',
    //   caption: 'ember.js, html5, SASS',
    //   link: '',
    //   color: 'orange'
    // },
    {
      title: 'Riffstation | Fender',
      mediaType: 'video',
      media:
        'https://res.cloudinary.com/bshano/video/upload/f_auto/v1561129114/Portfolio%20Photos/Jun-21-2019_15-53-42.mp4',
      alt: 'Riffstation.com',
      year: '2015',
      caption: 'ember.js, html5, SASS',
      link: '',
      color: 'orange'
    },
    {
      title: 'Dart Times',
      mediaType: 'image',
      media:
        'https://res.cloudinary.com/bshano/image/upload/f_auto/v1580508120/Portfolio%20Photos/darttimes-screenshot-mobile-pwa.png',

      alt: 'DartTimes',
      year: '2017',
      caption: 'Real Time Dart Times - PWA (Progressive Web App) - React',
      link: 'https://darttimes.netlify.com/',
      color: 'purple'
    },
    {
      title: 'Torc Product Development',
      mediaType: 'video',
      media:
        'https://res.cloudinary.com/bshano/video/upload/f_auto/v1561133113/Portfolio%20Photos/animated/torcpd.mp4',
      alt: 'Torcpd.com',
      year: '2014',
      caption: 'Heavily modified and customised wordpress theme',
      link: '',
      color: 'green'
    },
    {
      title: 'Tune Source',
      mediaType: 'image',
      media:
        'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_1096/v1580511397/Portfolio%20Photos/tunesource.net-trad-pwa-trans.png',

      alt: 'TuneSource Trad Music Library',
      year: '2016',
      caption: 'TuneSource Trad Music Notation Library - React App - PWA',
      link: 'https://tunesource.net/',
      color: 'red'
    },
    {
      title: 'Ryanair.com',
      mediaType: 'video',
      media:
        'https://res.cloudinary.com/bshano/video/upload/c_scale,f_auto,w_745/v1561131508/Portfolio%20Photos/animated/ryanair-2005.mp4',

      alt: 'Ryanair.com',
      year: '2005',
      caption: "HTML, PHP, Flash, CSV price imports... c'mon it was 2005!",
      link: '',
      color: 'blue'
    },
    {
      title: 'Revenue.ie',
      mediaType: 'video',
      media:
        'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_1162/v1554823778/Portfolio%20Photos/2009-revenue.ie.jpg',

      alt: 'Revenue.ie',
      year: '2010',
      caption: 'JavaScript, JQuery, Java, Perl, Weblogic, Liferay, Solr',
      link: '',
      color: 'grey'
    }
  ];

  // jobs.forEach(data => )
  return (
    <div>
      {jobs.map(data => {
        console.log('in here', data.title);

        return (
          <div key={data.title} className={'item bg-' + data.color}>
            <div>{data.title}</div>
            <div>{data.year}</div>
            {data.mediaType === 'video' ? (
              <div className="device-laptop">
                <video
                  className="image-insert"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={data.media}
                />
              </div>
            ) : (
              <div className="item-image">
                <img src={data.media} />
              </div>
            )}
            <figcaption>
              {data.caption}
              {data.link !== '' ? (
                <a
                  href={data.link}
                  class="item-link"
                  target="_blank"
                  rel="noopener"
                >
                  {data.link}
                </a>
              ) : null}
            </figcaption>
          </div>
        );
      })}

      <style jsx global>
        {`
          .profile-pic {
             {
              /* visibility: hidden; */
            }
          }
          .device-laptop {
            // width: 1040px;
            height: 44rem;
            margin: 0 auto;
            background-image: url('https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_1024/v1561120207/Portfolio%20Photos/Laptop.svg');
            background-repeat: no-repeat;
            background-position: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .image-insert {
            height: 477px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            overflow: scroll;
            // width: 46rem;
            // height: 30rem;
            // width: 745px;
            position: relative;
            top: -12px;
            left: 8px;
          }
          .bg-orange {
            background-color: #ffcc44;
          }
          .bg-purple {
            background-color: #bc59cc;
          }
          .bg-blue {
            background-color: #598ecc;
          }
          .bg-green {
            background-color: #7ecc59;
          }
          .bg-red {
            background-color: #cc5959;
          }
          .bg-grey {
            background-color: #c4c4c4;
          }

          .item {
            // min-height: 20rem;
            border: 1px solid #444;
            // width: 100%;
            margin: 0 auto;
            text-align: center;
            padding: 4rem 2rem;
            // font-family: 'Istok Web', sans-serif;
            font-family: 'Cabin', sans-serif;
          }
          .item-image {
            margin: 2rem auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .item-image img {
            // min-width: 300px;
            // max-width: 480px;
            height: 80vh;
            max-height: 600px;
          }
          a.item-link {
            color: #444;
            text-decoration: none;
            padding-top: 1rem;
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default Item;

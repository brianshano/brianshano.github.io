import Link from 'next/link';
// import macbook from './../assets/2015-riffstation-macbook.jpg';
// import macbook from './logo.svg';
// import torcLocal from 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_996/v1554845897/Portfolio%20Photos/2015-riffstation-macbook.png';

const Item = props => {
  console.log('color: ', props.color);
  const laptopImage =
    'https://res.cloudinary.com/bshano/image/upload/f_auto/v1561120207/Portfolio%20Photos/Laptop.svg';
  const jobs = [
    {
      title: 'riffstation',
      media:
        'https://res.cloudinary.com/bshano/video/upload/f_auto/v1561129114/Portfolio%20Photos/Jun-21-2019_15-53-42.mp4',
      alt: 'Riffstation.com',
      year: '2015',
      caption: 'ember.js, html5, SASS',
      color: 'orange'
    },
    {
      title: 'torc',
      media:
        'https://res.cloudinary.com/bshano/video/upload/f_auto/v1561133113/Portfolio%20Photos/animated/torcpd.mp4',
      alt: 'Torcpd.com',
      year: '2014',
      caption: 'Heavily modified and customised wordpress theme',
      color: 'green'
    },
    {
      title: 'ryanair',
      media:
        'https://res.cloudinary.com/bshano/video/upload/c_scale,f_auto,w_745/v1561131508/Portfolio%20Photos/animated/ryanair-2005.mp4',

      alt: 'Ryanair.com',
      year: '2005',
      caption: "HTML, PHP... c'mon it was 2005!",
      color: 'blue'
    }
  ];

  // jobs.forEach(data => )
  return (
    <div>
      {jobs.map(data => {
        console.log('in here', data.title);

        return (
          <div key={data.title} className={'item bg-' + data.color}>
            <div>{data.year}</div>
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
            <figcaption>{data.caption}</figcaption>
          </div>
        );
      })}

      <style jsx global>{`
        .profile-pic {
           {
            /* visibility: hidden; */
          }
        }
        .device-laptop {
           {
            /* border: 1px solid red; */
          }
          width: 1040px;
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
          height: 31rem;
           {
            /* border: 1px solid green; */
          }
           {
            /* background-image: url(https://res.cloudinary.com/bshano/image/upload/v1554823780/Portfolio%20Photos/2015-4-riffstation.com.jpg.jpg); */
          }
          background-repeat: no-repeat;
          background-position: top;
          background-size: cover;
          overflow: scroll;
          width: 46rem;

          height: 30rem;
           {
            /* background-image: url(https://res.cloudinary.com/bshano/video/upload/f_auto/v1561129114/Portfolio%20Photos/Jun-21-2019_15-53-42.mp4); */
          }
          background-repeat: no-repeat;
          background-position: top;
          background-size: cover;
          overflow: scroll;
          width: 745px;
          position: absolute;
          top: 101px;
          left: 155px;
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
      `}</style>
      <style jsx>
        {`
          .item {
            min-height: 20rem;
            border: 1px solid #444;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            padding: 4rem 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Item;

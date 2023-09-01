import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'wdwdwd';
  const list = ['milk', 'melon', 'banana'];
  return (
    <>
      <h1 className='orange'>{`hello ${name}`}</h1>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ witdh: '200px', height: '200px' }}
        src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMzBfMTk1%2FMDAxNTQ4ODA4ODU3OTMw.RNRfc7PgLcKYOYvSECt6QW6lHS96TEOqbJEAKfet9xsg.r13E_lcU1t7fUj2uaRc9sZM9OIG9NWRHd15aatt2_ZEg.JPEG.wooseung83%2Furf-banner_0.jpg&type=a340'
        alt='pic'
      />
    </>
  );
}

export default AppJSX;

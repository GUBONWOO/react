import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('click');
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <Avatar
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMTIx%2FMDAxNTY5MzA5NTY2NDg2.Wuf1vnq8yk4nujfQcktgOaCSHP0kWt5QWVgv5wOhchog.Er5GmcgZuC9PozzjIEQThyp3hsB3UbzbpYgbV2w2RCYg.JPEG.keke08211%2F%25BF%25EC%25B8%25A3%25C7%25C1_%25C3%25E2%25BD%25C3%25C0%25CF.jpg&type=a340'
        isNew={true}
      />
      <Profile
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMTIx%2FMDAxNTY5MzA5NTY2NDg2.Wuf1vnq8yk4nujfQcktgOaCSHP0kWt5QWVgv5wOhchog.Er5GmcgZuC9PozzjIEQThyp3hsB3UbzbpYgbV2w2RCYg.JPEG.keke08211%2F%25BF%25EC%25B8%25A3%25C7%25C1_%25C3%25E2%25BD%25C3%25C0%25CF.jpg&type=a340'
        name='jame'
        title='work'
        isNew={true}
      />
      <Profile
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMTIx%2FMDAxNTY5MzA5NTY2NDg2.Wuf1vnq8yk4nujfQcktgOaCSHP0kWt5QWVgv5wOhchog.Er5GmcgZuC9PozzjIEQThyp3hsB3UbzbpYgbV2w2RCYg.JPEG.keke08211%2F%25BF%25EC%25B8%25A3%25C7%25C1_%25C3%25E2%25BD%25C3%25C0%25CF.jpg&type=a340'
        name='kim'
        title='vue'
      />
      <Profile
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMTIx%2FMDAxNTY5MzA5NTY2NDg2.Wuf1vnq8yk4nujfQcktgOaCSHP0kWt5QWVgv5wOhchog.Er5GmcgZuC9PozzjIEQThyp3hsB3UbzbpYgbV2w2RCYg.JPEG.keke08211%2F%25BF%25EC%25B8%25A3%25C7%25C1_%25C3%25E2%25BD%25C3%25C0%25CF.jpg&type=a340'
        name='koo'
        title='back'
      />
    </>
  );
}

export default AppProfile;

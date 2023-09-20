import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';
// import { useYoutubeApi } from '../context/YoutubeApiContext';
import Youtube from '../api/youtube';

export default function Videos() {
  const { keyword } = useParams();
  // const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  return (
    <>
      <div>Videos{keyword ? `${keyword}` : 'hot'}</div>
      {isLoading && <p>Loading..</p>}
      {error && <p>error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}{' '}
        </ul>
      )}
    </>
  );
}

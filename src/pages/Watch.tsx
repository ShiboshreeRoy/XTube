import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/Video/VideoPlayer';
import VideoCard from '../components/Video/VideoCard';
import { useVideoStore } from '../store/useVideoStore';

export default function Watch() {
  const { videoId } = useParams<{ videoId: string }>();
  const { videos, setCurrentVideo, currentVideo } = useVideoStore();

  useEffect(() => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      setCurrentVideo(video);
    }
  }, [videoId, videos, setCurrentVideo]);

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  const recommendedVideos = videos.filter(v => v.id !== videoId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      <div className="lg:col-span-2">
        <VideoPlayer video={currentVideo} />
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Recommended Videos</h2>
        {recommendedVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
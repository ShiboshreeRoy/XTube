import React from 'react';
import VideoGrid from '../components/Video/VideoGrid';
import { useVideoStore } from '../store/useVideoStore';

export default function Home() {
  const { videos } = useVideoStore();

  return (
    <div className="p-6">
      <VideoGrid videos={videos} />
    </div>
  );
}
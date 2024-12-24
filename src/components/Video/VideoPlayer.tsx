import React from 'react';
import ReactPlayer from 'react-player';
import { Video } from '../../types/video';
import { useVideoStore } from '../../store/useVideoStore';
import { formatViews } from '../../utils/formatters';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

interface VideoPlayerProps {
  video: Video;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const { toggleLike, isLiked } = useVideoStore();
  const liked = isLiked(video.id);

  return (
    <div className="max-w-full">
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer
          url={video.videoUrl}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold">{video.title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <img
              src={video.channelAvatarUrl}
              alt={video.channelName}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-medium">{video.channelName}</h3>
              <p className="text-sm text-gray-600">{formatViews(video.views)} views</p>
            </div>
          </div>
          <button
            onClick={() => toggleLike(video.id)}
            className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            {liked ? <AiFillLike className="w-6 h-6" /> : <AiOutlineLike className="w-6 h-6" />}
            <span>{formatViews(video.likes)}</span>
          </button>
        </div>
        <p className="mt-4 text-gray-800">{video.description}</p>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '../../types/video';
import { formatViews } from '../../utils/formatters';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/watch/${video.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-3">
          <div className="flex">
            <img
              src={video.channelAvatarUrl}
              alt={video.channelName}
              className="w-9 h-9 rounded-full"
            />
            <div className="ml-3">
              <h3 className="text-base font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{video.channelName}</p>
              <div className="text-sm text-gray-600">
                {formatViews(video.views)} views • {formatDistanceToNow(video.createdAt)} ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
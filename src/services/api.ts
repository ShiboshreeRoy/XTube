import { Video } from '../types/video';
import { mockVideos } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // ... existing methods ...

  async uploadVideo({ title, description, videoFile, thumbnail }: {
    title: string;
    description: string;
    videoFile: File;
    thumbnail: File | null;
  }): Promise<Video> {
    await delay(2000); // Simulate upload delay
    
    const newVideo: Video = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      thumbnailUrl: thumbnail ? URL.createObjectURL(thumbnail) : 'https://picsum.photos/seed/upload/1280/720',
      videoUrl: URL.createObjectURL(videoFile),
      views: 0,
      likes: 0,
      createdAt: new Date(),
      channelId: '1',
      channelName: 'Your Channel',
      channelAvatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=your-channel',
    };

    mockVideos.unshift(newVideo);
    return newVideo;
  },
};
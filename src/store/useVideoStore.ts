import { create } from 'zustand';
import { Video } from '../types/video';
import { mockVideos } from '../data/mockData';

interface VideoStore {
  videos: Video[];
  currentVideo: Video | null;
  likedVideos: Set<string>;
  setCurrentVideo: (video: Video) => void;
  toggleLike: (videoId: string) => void;
  isLiked: (videoId: string) => boolean;
}

export const useVideoStore = create<VideoStore>((set, get) => ({
  videos: mockVideos,
  currentVideo: null,
  likedVideos: new Set(),
  
  setCurrentVideo: (video) => set({ currentVideo: video }),
  
  toggleLike: (videoId) => {
    const likedVideos = new Set(get().likedVideos);
    if (likedVideos.has(videoId)) {
      likedVideos.delete(videoId);
    } else {
      likedVideos.add(videoId);
    }
    set({ likedVideos });
  },
  
  isLiked: (videoId) => get().likedVideos.has(videoId),
}));
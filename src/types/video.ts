export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  likes: number;
  createdAt: Date;
  channelId: string;
  channelName: string;
  channelAvatarUrl: string;
}

export interface Channel {
  id: string;
  name: string;
  avatarUrl: string;
  subscribers: number;
  verified: boolean;
}
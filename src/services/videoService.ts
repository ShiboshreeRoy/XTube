import { supabase } from '../lib/supabase';
import { Video } from '../types/video';

export const videoService = {
  async getVideos(): Promise<Video[]> {
    const { data, error } = await supabase
      .from('videos')
      .select(`
        *,
        users (
          username,
          avatar_url
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data.map(transformVideoData);
  },

  async getVideoById(id: string): Promise<Video | null> {
    const { data, error } = await supabase
      .from('videos')
      .select(`
        *,
        users (
          username,
          avatar_url
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data ? transformVideoData(data) : null;
  },

  async uploadVideo({ title, description, videoFile, thumbnail }: {
    title: string;
    description: string;
    videoFile: File;
    thumbnail: File | null;
  }): Promise<Video> {
    // Upload video file
    const videoPath = `videos/${Date.now()}-${videoFile.name}`;
    const { error: videoError } = await supabase.storage
      .from('videos')
      .upload(videoPath, videoFile);
    if (videoError) throw videoError;

    // Upload thumbnail if provided
    let thumbnailPath = '';
    if (thumbnail) {
      thumbnailPath = `thumbnails/${Date.now()}-${thumbnail.name}`;
      const { error: thumbnailError } = await supabase.storage
        .from('thumbnails')
        .upload(thumbnailPath, thumbnail);
      if (thumbnailError) throw thumbnailError;
    }

    // Create video record
    const { data, error } = await supabase
      .from('videos')
      .insert({
        title,
        description,
        video_url: supabase.storage.from('videos').getPublicUrl(videoPath).data.publicUrl,
        thumbnail_url: thumbnailPath ? supabase.storage.from('thumbnails').getPublicUrl(thumbnailPath).data.publicUrl : null,
      })
      .select(`
        *,
        users (
          username,
          avatar_url
        )
      `)
      .single();

    if (error) throw error;
    return transformVideoData(data);
  },

  async searchVideos(query: string): Promise<Video[]> {
    const { data, error } = await supabase
      .from('videos')
      .select(`
        *,
        users (
          username,
          avatar_url
        )
      `)
      .textSearch('title', query);

    if (error) throw error;
    return data.map(transformVideoData);
  },
};

function transformVideoData(data: any): Video {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    thumbnailUrl: data.thumbnail_url,
    videoUrl: data.video_url,
    views: data.views,
    likes: data.likes,
    createdAt: new Date(data.created_at),
    channelId: data.user_id,
    channelName: data.users.username,
    channelAvatarUrl: data.users.avatar_url,
  };
}
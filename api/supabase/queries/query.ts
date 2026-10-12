import supabase from '../client';

export type Post = {
  id: number;
  created_at: string;
  user_name: string;
  npo_name: string;
  post_text: string;
  location_id: number;
  image_link: string;
  num_likes: number;
  Locations: {
    city_name: string;
    state_abbr: string;
  };
};

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('Posts')
    .select('*, Locations(city_name, state_abbr)');

  if (error) {
    throw new Error(`Error fetching posts: ${error.message}`);
  }

  return data ?? [];
}

export interface Profile {
  id: number;
  name: string;
  instagram: string;
  youtube: string;
  role: 'expert' | 'co-producer';
  revenueRange: '0-100k' | '100k-1mi' | '1mi+';
  profilePicture: string;
  position: string;
  description: string;
}

export type HeroMedia =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster?: string };

// HOW TO CUSTOMIZE:
// 1) Drop your files inside /public/media
// 2) Example image: /public/media/victor-hero.jpg
// 3) Example video: /public/media/victor-hero.mp4
// 4) Then switch type below from "image" to "video".
export const heroMedia: HeroMedia = {
  type: 'image',
  src: 'https://source.unsplash.com/2200x1400/?football,athlete,stadium,portrait&sig=77'
};

export const backgroundAudio =
  'https://cdn.pixabay.com/audio/2022/02/07/audio_57b26545b5.mp3';

export const sectionBackgrounds = {
  highlights: 'https://source.unsplash.com/2200x1200/?stadium,crowd,night&sig=90',
  philanthropy: 'https://source.unsplash.com/2200x1200/?community,children,soccer&sig=131',
  final: 'https://source.unsplash.com/2200x1000/?football,lights,night&sig=155'
};

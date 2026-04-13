export const galleryImages = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  src: `https://source.unsplash.com/1600x${1200 + i}/?football,stadium,player&sig=${i + 1}`,
  alt: `Victor Boniface inspired football image ${i + 1}`
}));

export const storyPhases = [
  {
    title: 'The Beginning',
    description:
      'From military barracks roots to nights filled with dreams, Victor was raised with discipline, grit, and hope by his grandmother.',
    image: 'https://source.unsplash.com/1600x900/?africa,street,football&sig=21'
  },
  {
    title: 'Loss',
    description:
      'In 2019, he faced devastating personal losses. Grief shaped him, but never broke the spirit that his family planted in him.',
    image: 'https://source.unsplash.com/1600x900/?dark,portrait,emotion&sig=22'
  },
  {
    title: 'The Struggle',
    description:
      'Injuries, setbacks, and lonely moments tested his resolve. The ACL battle became a war against doubt and silence.',
    image: 'https://source.unsplash.com/1600x900/?injury,football,recovery&sig=23'
  },
  {
    title: 'The Rise',
    description:
      'Europe witnessed his breakthrough: fearless runs, decisive goals, and a relentless hunger that turned pain into purpose.',
    image: 'https://source.unsplash.com/1600x900/?bundesliga,football,celebration&sig=24'
  }
];

export const highlights = [
  { title: 'Bundesliga Champion', icon: '🏆' },
  { title: 'Europa League Top Scorer', icon: '⚽' },
  { title: 'Norwegian Champion', icon: '🥇' }
];

export const fanWall = [
  '“He plays like every minute matters. Respect from Lagos to Leverkusen.”',
  '“Your comeback gave me strength in my own hard season. Thank you, Victor.”',
  '“Not just goals — heart, humility, and hunger every game.”',
  '“Boniface reminds us that grace can rise from pain.”',
  '“Come rain or shine, we stand with #Boniface.”',
  '“More than football. More than stats. A true inspiration.”'
];

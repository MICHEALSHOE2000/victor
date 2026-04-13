# Victor Boniface Tribute Site

## Add your own images, background music, and background videos

All media is configured in `data/media.ts`.

### 1) Add local files
Place files in `public/media/`:

- `public/media/victor-hero.jpg`
- `public/media/victor-hero.mp4`
- `public/media/soft-instrumental.mp3`

### 2) Use your files in config
Open `data/media.ts` and update:

```ts
export const heroMedia = {
  type: 'video',
  src: '/media/victor-hero.mp4',
  poster: '/media/victor-hero.jpg'
};

export const backgroundAudio = '/media/soft-instrumental.mp3';

export const sectionBackgrounds = {
  highlights: '/media/highlights-bg.jpg',
  philanthropy: '/media/philanthropy-bg.jpg',
  final: '/media/final-bg.jpg'
};
```

### 3) Gallery images
The masonry gallery images are in `data/content.ts` under `galleryImages`.
You can replace URLs with local files such as `/media/gallery-1.jpg`.

### 4) Best practices
- Use optimized JPG/WebP images for faster loading.
- Keep MP3 music under ~3–5MB.
- Keep MP4 hero video short (10–25s), loopable, and compressed.
- Prefer `1920x1080` or `1600x900` assets for sections.

## Run

```bash
npm install
npm run dev
```

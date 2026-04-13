# Victor Boniface Tribute Site

## Add images, music, and background videos

This project is already wired for this via `data/media.ts` and `data/content.ts`.

---

## 1) Add your files

Put media files inside:

```bash
public/media/
```

Example files:

- `public/media/hero.jpg`
- `public/media/hero.mp4`
- `public/media/music.mp3`
- `public/media/highlights-bg.jpg`
- `public/media/philanthropy-bg.jpg`
- `public/media/final-bg.jpg`
- `public/media/gallery-1.jpg` ... `gallery-12.jpg`

---

## 2) Set hero background (image or video)

Open `data/media.ts`.

### Hero as image

```ts
export const heroMedia = {
  type: 'image',
  src: '/media/hero.jpg'
};
```

### Hero as video

```ts
export const heroMedia = {
  type: 'video',
  src: '/media/hero.mp4',
  poster: '/media/hero.jpg'
};
```

> The hero video is rendered in `components/TributePage.tsx` and loops automatically.

---

## 3) Set background music

In `data/media.ts`:

```ts
export const backgroundAudio = '/media/music.mp3';
```

Music is controlled by the top-right ON/OFF toggle in the navbar.

---

## 4) Set section background images

In `data/media.ts`:

```ts
export const sectionBackgrounds = {
  highlights: '/media/highlights-bg.jpg',
  philanthropy: '/media/philanthropy-bg.jpg',
  final: '/media/final-bg.jpg'
};
```

---

## 5) Replace gallery images

Open `data/content.ts` and replace `galleryImages` entries with local images:

```ts
export const galleryImages = [
  { id: 1, src: '/media/gallery-1.jpg', alt: 'Victor gallery 1' },
  { id: 2, src: '/media/gallery-2.jpg', alt: 'Victor gallery 2' }
  // ...
];
```

---

## 6) Add background videos to other sections (optional)

If you want a section (not just hero) to use a video background, replace the section `<Image />` with:

```tsx
<video className="h-full w-full object-cover" autoPlay muted loop playsInline>
  <source src="/media/section-loop.mp4" type="video/mp4" />
</video>
```

---

## 7) Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

---

## Notes

- Keep videos short and compressed (`10–25s`, loop-friendly).
- Use `muted` for autoplay reliability in browsers.
- Prefer WebP/JPG for fast image loading.

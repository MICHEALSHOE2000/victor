# Victor Boniface Tribute Site

## Add images, music, and background videos

This project is already wired for this via `data/media.ts` and `data/content.ts`.

---

## If your images are already named `vb1` to `vb10` (exact steps)

1. In your GitHub repo, click **Add file → Upload files**.
2. Create/open folder: `public/media/`.
3. Upload and commit these files:
   - `vb1.jpg`
   - `vb2.jpg`
   - ...
   - `vb10.jpg`
4. Done ✅

The gallery is already configured to read:

- `/media/vb1.jpg` ... `/media/vb10.jpg`

So once those files exist, they will automatically appear in the gallery.

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
- `public/media/vb1.jpg` ... `public/media/vb10.jpg`

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

## 5) Replace gallery images manually (optional)

Open `data/content.ts` and replace `galleryImages` entries with any local images:

```ts
export const galleryImages = [
  { id: 1, src: '/media/my-photo-1.jpg', alt: 'Victor gallery 1' },
  { id: 2, src: '/media/my-photo-2.jpg', alt: 'Victor gallery 2' }
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

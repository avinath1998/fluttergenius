/**
 * Image asset registry.
 *
 * By default, images are served from the original Squarespace CDN so the site
 * works out of the box. To serve images from /public instead (fully self-hosted),
 * run `npm run download-images` and then set USE_LOCAL = true below.
 */

const USE_LOCAL = false;

type ImageEntry = { remote: string; local: string; alt: string };

export const images = {
  hero: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/b41fb375-6fbb-4272-b872-ab9ad8d3b4f8/hatch-3-min-1024x683.png",
    local: "/images/hatch.png",
    alt: "Hatch illustration",
  },
  homeCoves: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/ce97f31e-fe29-4ec2-b5b4-2c82ab9f0e02/coves_1_compressed.png",
    local: "/images/coves.png",
    alt: "Coves app screens",
  },
  homeSpacehero: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/17dc3838-5ab9-4fbd-bbee-b60c5606eec9/spacehero.png",
    local: "/images/spacehero_home.png",
    alt: "Spacehero warehouse management screens",
  },
  homeTotal: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/3d425293-7cae-4201-a398-2d7d1e9d31e1/total_compressed.png",
    local: "/images/total_home.png",
    alt: "Portfolio showcase",
  },
  flutterColombo: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/86618368-1668-4c15-af62-57991a46b64b/333029763_3366087093644176_234694072439071505_n.jpg",
    local: "/images/flutter_colombo.jpg",
    alt: "Flutter Colombo meetup",
  },
  galleryLargeMockup: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/2186d868-d51f-4e67-adbb-0ff2380ebc76/large_mockup.png",
    local: "/images/large_mockup.png",
    alt: "Coves mockup",
  },
  galleryTotal: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/b92108de-c436-4ddd-955c-9507c7dc2717/total_compressed.png",
    local: "/images/total_gallery.png",
    alt: "EKVA app screens",
  },
  gallerySpacehero: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/3c6fa040-417b-4a04-b8e7-f205fe1a6fc8/spacehero.png",
    local: "/images/spacehero_gallery.png",
    alt: "Spacehero screens",
  },
  galleryFinal: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/c955c3bb-a3a7-4b25-956b-cd160da70559/final_compressed.png",
    local: "/images/final_compressed.png",
    alt: "SLSYWC '19 app screens",
  },
  galleryFethr: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/5b83fadf-09ee-43f7-9550-5f472df6a0fd/%23AEE5D8+%281%29.png",
    local: "/images/fethr.png",
    alt: "fethr.app screens",
  },
  booking: {
    remote:
      "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/97c3697f-edb5-41fe-97e6-ab3c9eb53762/442269ac56eddaecd3fa3dd752c38870.webp",
    local: "/images/booking.webp",
    alt: "Upwork feature",
  },
} satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof images;

export function imageSrc(key: ImageKey): string {
  const entry = images[key];
  return USE_LOCAL ? entry.local : entry.remote;
}

export function imageAlt(key: ImageKey): string {
  return images[key].alt;
}

export function createWikimediaImage(image: string, width = 300): string {

  // If it's already a full URL (Wikipedia, local, CDN, etc)
  if (image.startsWith("http")) {
    return image;
  }

  // If it's one of your repo’s local images
  if (image.startsWith("images/")) {
    return "/" + image;
  }

  // Otherwise assume it's a Commons filename
  return `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${encodeURIComponent(
    image
  )}&width=${width}`;
}

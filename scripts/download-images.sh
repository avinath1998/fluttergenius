#!/usr/bin/env bash
# Downloads all remote images used by the site into /public/images.
# After running this, open src/lib/images.ts and set USE_LOCAL = true
# to serve images from /public instead of the Squarespace CDN.
set -euo pipefail

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$OUT_DIR"

declare -A FILES=(
  ["hatch.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/b41fb375-6fbb-4272-b872-ab9ad8d3b4f8/hatch-3-min-1024x683.png"
  ["coves.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/ce97f31e-fe29-4ec2-b5b4-2c82ab9f0e02/coves_1_compressed.png"
  ["spacehero_home.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/17dc3838-5ab9-4fbd-bbee-b60c5606eec9/spacehero.png"
  ["total_home.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/3d425293-7cae-4201-a398-2d7d1e9d31e1/total_compressed.png"
  ["flutter_colombo.jpg"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/86618368-1668-4c15-af62-57991a46b64b/333029763_3366087093644176_234694072439071505_n.jpg"
  ["large_mockup.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/2186d868-d51f-4e67-adbb-0ff2380ebc76/large_mockup.png"
  ["total_gallery.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/b92108de-c436-4ddd-955c-9507c7dc2717/total_compressed.png"
  ["spacehero_gallery.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/3c6fa040-417b-4a04-b8e7-f205fe1a6fc8/spacehero.png"
  ["final_compressed.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/c955c3bb-a3a7-4b25-956b-cd160da70559/final_compressed.png"
  ["fethr.png"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/5b83fadf-09ee-43f7-9550-5f472df6a0fd/%23AEE5D8+%281%29.png"
  ["booking.webp"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/97c3697f-edb5-41fe-97e6-ab3c9eb53762/442269ac56eddaecd3fa3dd752c38870.webp"
  ["favicon.ico"]="https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/783a5711-5386-4a6f-884b-9f9bae453bd1/favicon.ico"
)

for name in "${!FILES[@]}"; do
  url="${FILES[$name]}"
  dest="$OUT_DIR/$name"
  echo "→ $name"
  curl -sSL "$url" -o "$dest"
done

echo
echo "Done. Images saved to $OUT_DIR"
echo "Now edit src/lib/images.ts and set USE_LOCAL = true to serve them locally."

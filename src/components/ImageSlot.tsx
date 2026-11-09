import { images, type ImageEntry, type ImageKey } from "@/lib/images";

type Props = {
  slot: ImageKey;
  ratio: string; // CSS aspect-ratio, e.g. "4 / 5"
  caption?: string;
  className?: string;
};

export default function ImageSlot({ slot, ratio, caption, className }: Props) {
  const img: ImageEntry = images[slot];
  return (
    <div className={`slot rvi ${className ?? ""}`}>
      <div
        className="slot__media"
        style={{ aspectRatio: ratio, background: img.tint }}
      >
        {img.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/images/${img.src}`} alt={img.alt} loading="lazy" />
        ) : (
          <div className="slot__ph" aria-hidden="true">
            {caption && <span className="slot__cap">{caption}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

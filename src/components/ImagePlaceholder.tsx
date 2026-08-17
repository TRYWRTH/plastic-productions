type ImagePlaceholderProps = {
  caption: string;
  ratio: "3x4" | "4x3";
};

export default function ImagePlaceholder({ caption, ratio }: ImagePlaceholderProps) {
  return (
    <div className={`img-slot img-slot--${ratio}`}>
      <span className="img-slot__caption">{caption}</span>
    </div>
  );
}

type Props = {
  num?: string;
  name?: string;
  variant?: "bone" | "alt" | "dark" | "hair";
  id?: string;
  children: React.ReactNode;
};

export default function Scene({ num, name, variant = "bone", id, children }: Props) {
  const cls =
    variant === "bone" ? "scene" : `scene scene--${variant}`;
  return (
    <section id={id} className={cls} aria-label={name}>
      <div className="wrap">
        {num && name && (
          <p className="tag">
            <span className="tag__num">{num}</span>
            <span>{name}</span>
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

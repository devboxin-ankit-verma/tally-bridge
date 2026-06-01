type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: Props) {
  return <Tag className={`container-premium ${className}`}>{children}</Tag>;
}

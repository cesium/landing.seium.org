import Link from "next/link";

function Button({ title, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex h-10 w-48 items-center justify-center rounded-full border-2 border-white bg-primary font-pixel uppercase text-white transition-colors duration-300 hover:bg-quinary lg:bg-transparent"
    >
      {title}
    </Link>
  );
}

export default Button;

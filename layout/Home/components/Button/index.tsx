import Link from "next/link";

function Button({ title, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="before:ease font-terminal-uppercase relative flex h-10 w-48 flex-wrap content-center justify-center overflow-hidden rounded-full border-2 border-white bg-primary text-white transition-transform before:absolute before:left-0 before:-ml-2 before:h-52 before:w-52 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-quinary before:transition-all before:duration-300 hover:scale-105 hover:text-white hover:before:-rotate-180 lg:bg-transparent"
    >
      <span className="relative z-10">{title}</span>
    </Link>
  );
}

export default Button;

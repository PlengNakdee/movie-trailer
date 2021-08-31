import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <div className="p-6">
      <p className="text-base text-gray-400">&copy; {date.getFullYear()}</p>
      <Link href="/">
        <a className="text-base text-gray-400">Back to my portfolio...</a>
      </Link>
    </div>
  );
};

export default Footer;

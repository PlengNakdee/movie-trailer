const Footer = () => {
  const date = new Date();
  return (
    <div className="p-6">
      <p className="text-base text-gray-400">&copy; {date.getFullYear()}</p>
      <a href="/">
        <p className="text-base text-gray-400">Back to my portfolio...</p>
      </a>
    </div>
  );
};

export default Footer;

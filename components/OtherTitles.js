const OtherTitles = (url1, url2, url3, url4, num1, num2, num3, num4) => {
  return (
    <div className="grid justify-items-center">
      <p className="text-lg font-bold">Recommendations: </p>
      <div className="flex space-x-4 font-semibold">
        <a href={url1} className="hover:text-red-500">
            {num1}
        </a>
        <span>|</span>
        <a href={url2} className="hover:text-red-500">
            {num2}
        </a>
        <span>|</span>
        <a href={url3} className="hover:text-red-500">
            {num3}
        </a>
        <span>|</span>
        <a href={url4} className="hover:text-red-500">
            {num4}
        </a>
      </div>
    </div>
  );
};

export default OtherTitles;

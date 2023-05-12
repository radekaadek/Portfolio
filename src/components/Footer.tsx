import Link from "next/link";

const Footer: React.FC = () => {
    return (
      <div className="bg-gray-800 fixed bottom-0 p-1 w-fit">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-l text-white">Made with </span>
          <Link href="https://nextjs.org/" key="nextjs.org" className="text-blue-600">
            Next.js
          </Link>
          <span className="text-l text-gray-300"> and ❤️ by </span>
          <Link href="https://github.com/radekaadek" key="github.com/radekaadek" className="text-blue-600">
                radekaadek
          </Link>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
import Link from "next/link";

const Footer: React.FC = () => {
    return (
      <div className="bg-gray-800 fixed bottom-0 p-1 w-full">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-l text-gray-300">Made with ❤️ by </span>
          <Link href="https://github.com/radekaadek" key="github.com/radekaadek">
                radekaadek
          </Link>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
import { Link } from "react-router";

const MainBtn = ({ title, path = "/" }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <Link className="text-lg font-semibold font-inter text-black py-3 px-10 w-fit rounded-full bg-brand hover:scale-101 border border-brand hover:border-white duration-300"
        to={path}
      >
        {title}
      </Link>
    </div>
  );
};

export default MainBtn;

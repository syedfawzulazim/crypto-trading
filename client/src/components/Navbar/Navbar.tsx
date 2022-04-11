import Main from "./Main";
import Secondary from "./Secondary";

const Navbar = () => {
  return (
    <div className="bg-[#17171a]">
      <div className="w-full mx-auto xl:max-w-[1400px]">
        <Main />
        <Secondary />
      </div>
    </div>
  );
};

export default Navbar;

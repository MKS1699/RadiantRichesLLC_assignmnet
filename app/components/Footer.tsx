import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#212731] mt-4 w-full h-auto py-10 px-4 grid grid-flow-col text-[#B6BDC4] text-sm">
      <div className="grid grid-flow-row self-center justify-self-center">
        <h3 className="text-white text-base">Categories</h3>
        <Link href={"#"}>Web Building</Link>
        <Link href={"#"}>Hosting</Link>
        <Link href={"#"}>Data Center</Link>
        <Link href={"#"}>Robotic Automation</Link>
      </div>
      <div className="grid grid-flow-row self-center justify-self-center">
        <h3 className="text-white text-base">Contact</h3>
        <Link href={"#"}>Contact</Link>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Terms Of Service</Link>
        <Link href={"#"}>Categories</Link>
        <Link href={"#"}>About</Link>
      </div>
      <div className="w-full h-auto self-center justify-self-end grid grid-cols-[90%_10%] text-[#D1D6DA] gap-4 ">
        <div className="justify-self-end self-center cursor-pointer">
          United States
        </div>
        <FaAngleDown className="justify-self-start self-center cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Amr Ibrahim
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-4xl lg:text-5xl">
          <Link
            href="https://www.facebook.com/people/Amr-Ibrahim/pfbid02zwdzRzGsJeeFCKNYgFb1cS6mwJ6rqidub7f1zSWnC1J35spuD9kgpWFKURgzWkwJl/?mibextid=LQQJ4d"
            target="_blank"
            className="text-white/90 hover:text-white "
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://amr0ibrahim.netlify.app/"
            target="_blank"
            className="text-white/90 hover:text-white "
          >
            <FaLaptop />
          </Link>
          <Link
            href="https://github.com/amr-ibrahim7"
            target="_blank"
            className="text-white/90 hover:text-white "
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/amribrahimwebdev/"
            target="_blank"
            className="text-white/90 hover:text-white "
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}

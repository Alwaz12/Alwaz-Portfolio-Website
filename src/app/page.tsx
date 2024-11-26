"use client"
import Link from "next/link";
 import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
      {/* ---------header------------ */}
     <header className={`header flex justify-end items-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`}>
        <div>
          <Link href={"#home"} className="logo ">
            Alwaz.
          </Link>
        </div>
        <nav className="navbar">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="menu-icon mr-4" />
            </SheetTrigger>
            <SheetContent className="pt-4 text-3xl">
              <br />
              <br />
              <br />
              <Link href={"#home"} onClick={closeSidebar}>
                Home
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#about"} onClick={closeSidebar}>
                About
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#education"} onClick={closeSidebar}>
                Journey
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#skills"} onClick={closeSidebar}>
                Skills
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#contact"} onClick={closeSidebar}>
                Contact
              </Link>
              <br />
            </SheetContent>
          </Sheet>
          <ul className="hidden md:flex gap-x-8 text-[1.7rem]">
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#education"}
              >
                Journey
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#skills"}
              >
                Skills
              </Link>{" "}
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*-------------- home section-------------- */}

      <section className={`bg-cover bg-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`} id="home">
        <div className="home-content">
          <h1>
            Hi, I am<span> Muhammad Alwaz</span>{" "}
          </h1>
         <div>
            
    
        strings: [" ",
            "Developer",
        ],
                                                                                                                                                                                                                                                                                                                                                                          
     <div/>
          <p>
            I am a passionate Front-End Developer currently honing my skills at
            PIAIC. On the front-end, I ve mastered HTML,CSS and Java,
            creating responsive and dynamic user interfaces. As I continue my
            journey, I am diving deeper into back-end technologies to build
            comprehensive, front-End applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>

          <div className="btn-box">
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-alwaz-0775a92b7"
              }
              className="btn" target="_blank"
            >
              Hire me
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-alwaz-0775a92b7"
              }
              className="btn" target="_blank"
            >
              Lets talk
            </Link>
          </div>
          <div className="flex-space-x-4 home-sci">
            <Link
              href="https://www.linkedin.com/in/muhammad-alwaz-0775a92b7"
              target="_blank"
              rel="noopener noreferrer"
              className="bx-bx1-linkedin"
            >
              <LinkedInIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://github.com/Alwaz12"}
              target="_blank"
              className="bx-bx1-github"
            >
              <GitHubIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100091643684710"}
              target="_blank"
              className="bx-bx1-x"
            >
              <FacebookIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
          </div>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {/* --------------About Section------------- */}

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
            
        <div className="relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
      <Image
        src="/small-size-image.jpeg" 
        alt="Profile Image"
        width={225}
        height={225}
        className=" rounded-full border-[.2rem] border-[var(--main-color)]"
      />
      <span className="circle-spin absolute"></span>
    </div>

        <div className="about-content">
          <h2>Front-End Developer</h2>
          <p className="about-para">
            I am a passionate Front-End Developer currently honing my skills at
            PIAIC. On the front-end, I ve mastered HTML,CSS and Java,
            creating responsive and dynamic user interfaces. As I continue my
            journey, I am diving deeper into back-end technologies to build
            comprehensive, front-End applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>

          <div className="btn-box btns">
            <a href="#about" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      {/* -----------------------project section--------------------------- */}

      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey </span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Education Trust Nasra Secondary School (D.H.S) Campus</h3>
                  </div>
                  <p>
                    Matriculation, Computer Science (2020-2022) 
                    
                    Grade A+
                    
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Jamia Millia Goverment College Morning (Shah Faisal Colony)</h3>
                  </div>
                  <p>
                    Intermediate, Computer Science (2021-2024) Grade A+
                      
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>PIAIC</h3>
                  </div>
                  <p>
                    Certified Agentic And Robotic AI Engineer (2024-Present)
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------2nd column----------- */}

          <div className="education-column">
            <h3 className="title">Experience</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>PIAIC</h3>
                  </div>
                  <p>
                     Front-End Developer (March 2024 - Present)
                    
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Bharat Intern</h3>
                  </div>
                  <p>
                      Full Stack Developer (July 2024 - August 2024)
                    
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>CognoRise Info Tech</h3>
                  </div>
                  <p>
                      App Developer Next.Js (September 2024 - October 2024)
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* -----------------------skill section--------------------------- */}
      <section className="skills" id="skills">
        <h2 className="heading">
          {" "}
          My <span>Skills</span>
        </h2>
            <h3 className="skill-title">Coding Skills</h3>

        <div className="skills-row">
          <div className="skills-column">

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    TypeScript <span>92%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Python <span>83%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                  <div className="bar">
                    <span></span>
                  </div>
              </div>
            </div>
          </div>

          {/* ----------------------For another Column--------------------------- */}

          <div className="skills-column">
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                  Next.JS <span>95%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Tailwind CSS <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Express <span>82%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                  Node Js <span>83%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                  <div className="bar">
                    <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="string" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <a href="#contact" className="btn">
              Submit
            </a>
          </div>
        </form>
      </section>

      {/* --------------footer-------------- */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; Alwaz | All Right Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <Link href="/" className=" bg-cyan-500 bx-bx1-arrowUpWardIcon">
            <ArrowUpwardIcon className="icon" sx={{ fontSize: 25 }} />
          </Link>
        </div>
      </footer>
    </main>
  );
}

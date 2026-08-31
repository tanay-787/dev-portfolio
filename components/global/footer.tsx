import Link from "next/link";
import GithubIcon from "../icons/assets/socials/github";
import LinkedinIcon from "../icons/assets/socials/linkedin";
import InstagramIcon from "../icons/assets/socials/instagram";
import GmailIcon from "../icons/assets/socials/gmail";


const Footer = () => {
  return (
        <div className="container-landing border-t">

          <div className="py-fluid-s flex flex-col sm:flex-row items-center justify-between gap-fluid-s px-fluid-m xl:px-0">
            {/* Copyright with enhanced scaling */}
            <span className="text-step--1 lg:text-step-0 text-muted-foreground">
            Made with ❤️ by Tanay Gupte
            </span>

            <div className="flex items-center gap-fluid-s text-muted-foreground" aria-description="Socials">
            <Link href="mailto:tanaygupte22@gmail.com" target="_blank">
                <GmailIcon className="h-4 w-4 xl:h-5 xl:w-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              </Link>
              <Link href="https://www.instagram.com/tanay7_" target="_blank">
                <InstagramIcon className="h-4 w-4 xl:h-5 xl:w-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              </Link>
              <Link href="https://github.com/tanay-787" target="_blank">
                <GithubIcon className="h-4 w-4 xl:h-5 xl:w-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              </Link>
              <Link href="https://linkedin.com/in/tanay-gupte" target="_blank">
                <LinkedinIcon className="h-4 w-4 xl:h-5 xl:w-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>
  );
};

export default Footer;

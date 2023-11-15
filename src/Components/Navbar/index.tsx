import { Navbar } from "keep-react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  return (
    <nav className="sticky top-0 z-50">
      <Navbar
        fluid={false}
        bordered={true}
        className="shadow-2xl border-slate-200 "
      >
        <Navbar.Container className="flex items-center justify-between m-">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
          </Navbar.Container>
          <Navbar.Brand>
            <img
              src="Logo.png"
              alt="keep"
              width="100"
              height="40"
              className="cursor-pointer rounded pb-2"
            />
          </Navbar.Brand>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            >
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>{" "}
    </nav>
  );
}

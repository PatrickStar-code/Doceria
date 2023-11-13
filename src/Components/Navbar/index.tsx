import { Navbar } from "keep-react";

export function NavbarComponent(){
    return (<nav>
   <Navbar fluid={false} bordered={true} className="shadow-2xl border-slate-200">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Home" />
          <Navbar.Link linkName="Projects" />
          <Navbar.Link linkName="Blogs" />
        </Navbar.Container>
        <Navbar.Brand>
          <img
            src="favicon.png"
            alt="keep"
            width="100"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
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
    </Navbar>    </nav>)
}
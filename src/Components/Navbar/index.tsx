import { Button, Dropdown, Navbar, TextInput } from "keep-react";
import { Link } from "react-router-dom";
import { Avatar } from "keep-react";
import { CaretRight, ShoppingCartSimple } from "phosphor-react";
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
            <Navbar.Link linkName="Produtos" />
            <Navbar.Link linkName="Sobre nós" />
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
              <Navbar.Link linkName="Produtos" />
              <Navbar.Link linkName="Sobre nós" />
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            >
              {/* Se Logado */}
              <div className="flex gap-8 items-center">
                <ShoppingCartSimple size={28} className="mb-3 cursor-pointer" weight="light" />
                <div className="dropdown">
                  <label tabIndex={0} className="m-1">
                    <Avatar
                      shape="circle"
                      size="md"
                      img="/images/avatar/avatar-4.png"
                      className="cursor-pointer"
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Se não */}
              {/* <div className="flex gap-4">
                <Button size="md" type="outlineGray">Registrar</Button>
                <Button size="md" type="outlinePrimary">Logar</Button>
              </div> */}
            </Navbar.Container>

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>{" "}
    </nav>
  );
}

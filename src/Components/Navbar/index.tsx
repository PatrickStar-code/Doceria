import {Dropdown, Navbar} from "keep-react";
import { Link } from "react-router-dom";
import {
  CaretRight,
  Gear,
  Money,
  ShoppingCartSimple,
  SignOut,
  SquaresFour,
  User,
} from "phosphor-react";
export function NavbarComponent() {
  return (
    <nav className="sticky top-0 z-50">
      <Navbar
        fluid={false}
        bordered={true}
        className="shadow-2xl border-slate-200 "
      >
        <Navbar.Container className="flex items-center justify-between m-1 p-1">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 p-2"
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
              className=" hidden lg:flex items-center justify-between gap-5"
            >
              {/* Se Logado */}
              <div className="flex gap-6 justify-center items-center p-2">
                <Dropdown
                  label="Nome User"
                  color="gray"
                  size="sm"
                  dismissOnClick={true}
                >
                  <div>
                    <a
                      href="#"
                      className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform "
                    >
                      <img
                        className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                        alt="jane avatar"
                      />
                      <div className="mx-1">
                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Jane Doe
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          janedoe@exampl.com
                        </p>
                      </div>
                    </a>
                  </div>

                  <Dropdown.Item
                    icon={<SquaresFour size={20} color="#5E718D" />}
                  >
                    Dashboard
                    <span className="ml-auto">
                      <CaretRight size={20} color="#5E718D" />
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
                    Settings
                    <span className="ml-auto">
                      <CaretRight size={20} color="#5E718D" />
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
                    Earnings
                    <span className="ml-auto">
                      <CaretRight size={20} color="#5E718D" />
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
                <div className="relative">
                <div className="absolute w-4  bottom-[12px] left-[12px] rounded-full bg-green-100 ">
                  <span className="text-sm font-bold p-1">0</span>
                </div>
                  <ShoppingCartSimple
                    size={24}
                    className=" cursor-pointer"
                    weight="light"
                  />
                  
                </div>
              </div>

              {/* Se não */}
              {/* <div className="flex gap-4">
                <Button size="md" type="outlineGray">Registrar</Button>
                <Button size="md" type="primary">Logar</Button>
              </div> */}
            </Navbar.Container>

            <Navbar.Container tag="ul" className="flex lg:hidden items-center mr-8 gap-8 align-center justify-center">
              <User size={20} className="cursor-pointer" />
              <ShoppingCartSimple
                size={20}
                className=" cursor-pointer"
                weight="light"
              />
            </Navbar.Container>
            

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>{" "}
    </nav>
  );
}

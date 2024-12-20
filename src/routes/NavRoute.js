import Nav from "../components/Nav/Nav";
// import NavItem from "../components/NavItem/NavItem";
import NavLink from "../components/NavLink/NavLink";

function NavRoute() {
  const defaultNav = {
    items: [
      {
        id: "link-alert",
        name: "Alert",
        type: "router-link",
        href: "/alert",
        active: false,
        disabled: false,
      },
      {
        id: "link-form",
        name: "Form",
        type: "router-link",
        href: "/form",
        active: false,
        disabled: false,
      },
      {
        id: "link-modal",
        name: "Modal",
        type: "router-link",
        href: "/modal",
        active: true,
        disabled: false,
      },
      {
        id: "link-preloader",
        name: "Preloader",
        type: "router-link",
        href: "/preloader",
        active: false,
        disabled: true,
      },
      {
        id: "link-pagination",
        name: "Pagination",
        type: "router-link",
        href: "",
        active: false,
        disabled: false,
        dropdown: true,
        dropdownItemsList: [
          {
            id: "link-pagination",
            name: "Pagination",
            type: "router-link",
            href: "/pagination",
            active: true,
            disabled: false,
          },
          {
            id: "link-pagination-items-per-page",
            name: "PaginationItemsPerPage",
            type: "router-link",
            href: "/paginationitemsperpage",
            active: false,
            disabled: false,
          },
          {
            id: "link-pagination-page-selector",
            name: "PaginationPageSelector",
            type: "router-link",
            href: "/paginationpageselector",
            active: false,
            disabled: false,
          },
          {
            id: "link-pagination-button",
            name: "PaginationButton",
            type: "router-link",
            href: "/paginationbutton",
            active: false,
            disabled: true,
          },
        ],
      },
    ],
  };

  const navLinks = defaultNav.items.map((item) => {
    return (
      <NavLink
        key={item.id}
        type={item.type}
        href={item.href}
        active={item.active}
        disabled={item.disabled}
      >
        {item.name}
      </NavLink>
    );
  });

  /*const navItems = defaultNav.itemsList.map((navItem) => {
    return (
      <NavItem
        key={navItem.id}
        type={navItem.type}
        href={navItem.href}
        active={navItem.active}
        disabled={navItem.disabled}
        dropdown={navItem.dropdown}
        dropdownItemsList={navItem.dropdownItemsList}
      >
        {navItem.name}
      </NavItem>
    );
  });*/

  return (
    <>
      <h2>Nav</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов, пункты проброшены в слот</div>
      <Nav>{navLinks}</Nav>
      {/* <div className="use-case-title">Горизонтальное центрирование</div>
      <Nav position="center" items={defaultNav.items} />
      <div className="use-case-title">Вертикальное расположение</div>
      <Nav vertical items={defaultNav.items} />
      <div className="use-case-title">В виде табов</div>
      <Nav type="tabs" items={defaultNav.items} />
      <div className="use-case-title">В виде кнопок</div>
      <Nav type="pills" items={defaultNav.items} />
      <div className="use-case-title">
        В виде кнопок, занимающих все пространство
      </div>
      <Nav type="pills" fill items={defaultNav.items} />
      <div className="use-case-title">
        В виде кнопок равной ширины, занимающих все пространство
      </div>
      <Nav type="pills" justified itemsList={defaultNav.items} />
      <div className="use-case-title">
        Ненумерованный список с пробросом в слот
      </div>
      <Nav tag="ul">{navItems}</Nav> */}
      <div className="use-case-title">
        Ненумерованный список со списком переданным через проп
      </div>
      <Nav tag="ul" data={defaultNav} />
    </>
  );
}

export default NavRoute;

import Nav from "../components/Nav/Nav";
import NavItem from "../components/NavItem/NavItem";

function NavItemRoute() {
  const defaultDropdownItemsList = [
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
    /*{
      id: "nav-link-form-components3",
      name: "TestLevel3",
      type: "router-link",
      href: "#",
      active: false,
      disabled: false,
      icon: "folder",
      badge: {
        className: "rounded-pill ms-2",
        theme: "danger",
        text: 25,
      },
      dropdown: true,
      dropdownItemsList: [
        {
          id: "dropdown-link-input",
          name: "Input",
          type: "router-link",
          href: "/input",
          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-textarea",
          name: "Textarea",
          type: "router-link",
          href: "/textarea",
          active: false,
          disabled: false,
        },
      ],
    },*/
  ];

  return (
    <>
      <h2>NavItem</h2>
      <h3>Варианты использования</h3>
      <Nav>
        <NavItem type="a" href="https://ya.ru">
          Обычная ссылка
        </NavItem>
        <NavItem href="/nav">Ссылка-роутер</NavItem>
        <NavItem href="/nav" disabled>
          Отключенная
        </NavItem>
        <NavItem
          type="a"
          href="https://ya.ru"
          dropdown
          dropdownItemsList={defaultDropdownItemsList}
        >
          Выпадающий список
        </NavItem>
      </Nav>
    </>
  );
}

export default NavItemRoute;

import Nav from "../components/Nav/Nav";
import NavLink from "../components/NavLink/NavLink";
// import RbTabs from "../components/Bootstrap_5.3.3/RbTabs";

function NavLinkRoute() {
  const defaultNav = {
    itemsList: [
      {
        id: "link-modal",
        name: "Роутер-ссылка",
        type: "router-link",
        href: "/modal",
        active: true,
        disabled: false,
      },
      {
        id: "link-modal-test",
        name: "Переключатель модалки",
        type: "modal-link",
        href: "modal-test",
        active: false,
        disabled: false,
      },
      {
        id: "link-pagination",
        name: "Выпадающий список",
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

  const defaultTabs = {
    itemsList: [
      { id: "tab-pane-01", active: false, name: "Кнопка-1" },
      { id: "tab-pane-02", active: true, name: "Кнопка-2" },
      {
        id: "tab-pane-03",
        active: false,
        name: "Кнопка-3",
      },
    ],
  };

  return (
    <>
      <h2>NavLink</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        С указанием типа (ссылка-роутер, обычная, активатор Bootstrap-действия)
      </div>
      <Nav>
        <NavLink href="/nav">Ссылка-роутер</NavLink>
        <NavLink type="a" href="https://ya.ru">
          Обычная ссылка
        </NavLink>
        <NavLink href="/nav" disabled>
          Отключенная
        </NavLink>
        <NavLink href="/nav" icon="favorite">
          С иконкой
        </NavLink>
      </Nav>
      <div className="use-case-title">Стилизованная классами</div>
      <Nav>
        <NavLink href="/nav" className="bg-info-subtle">
          Ссылка-роутер
        </NavLink>
        <NavLink
          type="a"
          href="https://ya.ru"
          className="text-danger border border-2"
        >
          Обычная ссылка
        </NavLink>
        <NavLink
          href="/nav"
          disabled
          className="bg-dark-subtle border border-dark border-2 rounded-3"
        >
          Отключенная
        </NavLink>
      </Nav>
      <div className="use-case-title">
        С указанием Bootstrap-действия и его цели (выпадающий список, модальное
        окно)
      </div>
      <Nav tag="ul" itemsList={defaultNav.itemsList} />
      {/* <div className="use-case-title">
        С указанием Bootstrap-действия (tab-вкладка)
      </div>
      <RbTabs id="tabs-01" itemsList={defaultTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs> */}
    </>
  );
}

export default NavLinkRoute;

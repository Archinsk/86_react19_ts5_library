import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
// import Nav from "../components/Nav/Nav";

function IconRoute() {
  const defaultNav = {
    itemsList: [
      {
        id: "nav-link-alert",
        name: "NavLink",
        type: "router-link",
        href: "/alert",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-home",
        name: "NavLink с иконкой",
        type: "router-link",
        href: "/",
        icon: "home",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-test-modal-0",
        name: "ButtonLink",
        type: "modal-link",
        href: "modal-test",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-test-modal",
        name: "ButtonLink с иконкой",
        type: "modal-link",
        href: "modal-test",
        icon: "star",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-collapse",
        name: "NavLink with Dropdown с иконкой",
        type: "router-link",
        href: "#",
        icon: "favorite",
        active: false,
        disabled: false,
        dropdown: true,
        dropdownItemsList: [
          {
            id: "dropdown-link-collapse-button",
            name: "DropdownItem",
            type: "router-link",
            href: "/collapsebutton",
            active: false,
            disabled: false,
          },
          {
            id: "dropdown-link-accordion",
            name: "DropdownItem",
            type: "router-link",
            href: "/accordion",
            active: false,
            disabled: false,
          },
          {
            id: "dropdown-link-collapse",
            name: "DropdownItem с иконкой",
            type: "router-link",
            href: "/collapse",
            active: false,
            disabled: false,
            icon: "star",
          },
        ],
      },
    ],
  };

  return (
    <>
      <h2>Icon</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">В тексте</div>
      <div>Lorem ipsum dolor.</div>
      <div>
        Lor
        <Icon name="favorite" />
        em ip
        <Icon name="star" />
        sum dolor.
      </div>
      <div className="use-case-title">В заголовке</div>
      <h2>Lorem ipsum dolor.</h2>
      <h2>
        Lor
        <Icon name="star" />
        em ip
        <Icon name="favorite" />
        sum dolor.
      </h2>
      <i>
        Lor
        <Icon name="star" />
        em ip
        <Icon name="favorite" />
        sum dolor.
      </i>
      <a href="#">
        Lor
        <Icon
          name="star"
          onClick={(e) => {
            console.log("Icon click");
            console.log(e);
          }}
        />
        em ip
        <Icon name="favorite" />
        sum dolor.
      </a>
      <div className="use-case-title">Внутри кнопки</div>
      <Button theme="primary" icon="star" className="me-3">
        Кнопка
      </Button>
      <Button theme="primary" icon="star" square>
        Кнопка
      </Button>
      <div className="use-case-title">
        Внутри пунктов меню (Navlink, ButtonLink, DropdownItem)
      </div>
      {/* <Nav
        tag="ul"
        className="navbar-nav bg-dark-subtle"
        itemsList={defaultNav.itemsList}
      /> */}
      <div className="use-case-title">Стилизованная через классы</div>
      <div>
        Lor
        <Icon
          name="favorite"
          className="px-2 py-1 bg-info-subtle rounded-2 border border-info text-primary"
        />
        em ip
        <Icon
          name="star"
          className="px-2 py-1 bg-warning rounded-circle border border-2 border-danger text-danger"
        />
        sum dolor.
      </div>
    </>
  );
}

export default IconRoute;

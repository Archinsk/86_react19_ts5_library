import Badge from "../components/Badge/Badge";
import Button from "../components/Button/Button";
// import Nav from "../components/Nav/Nav";

function BadgeRoute() {
  const defaultNav = {
    itemsList: [
      {
        id: "nav-link-home",
        name: "Home",
        type: "router-link",
        href: "/",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-alert",
        name: "NavLink",
        type: "modal-link",
        href: "/alert",
        active: false,
        disabled: false,
        badge: {
          theme: "danger",
          className: "ms-2",
          text: 25,
        },
      },
    ],
  };

  const defaultBadge = {
    theme: "danger",
    className:
      "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",
    text: 25,
  };

  return (
    <>
      <h2>Badge</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <Badge>Важно!</Badge>
      <div className="use-case-title">С темой</div>
      <Badge theme="info">Важно!</Badge>
      <div className="use-case-title">C темой, скругленный через классы</div>
      <Badge
        theme="warning"
        className="rounded-pill"
        onClick={(e) => {
          console.log("Badge click");
          console.log(e);
        }}
      >
        Внимание
      </Badge>
      <div className="use-case-title">Внутри пункта навигации</div>
      {/* <Nav
        tag="ul"
        className="navbar-nav bg-dark-subtle"
        itemsList={defaultNav.itemsList}
      /> */}
      <div className="use-case-title">Внутри кнопки</div>
      <Button theme="secondary" badge={defaultBadge}>
        Сообщения
      </Button>
      <div className="use-case-title">Стилизованный через классы</div>
      <Badge className="bg-dark-subtle border-start border-5 border-danger rounded-0">
        Важно!
      </Badge>
    </>
  );
}

export default BadgeRoute;

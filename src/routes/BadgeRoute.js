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
      <p>
        В тексте <Badge>Важно!</Badge>
      </p>
      <h3>Варианты стилизации</h3>
      <p>
        В тексте <Badge className="bg-danger text-white">Danger</Badge>
      </p>
      <p>
        В тексте <Badge className="bg-warning text-black">Warning</Badge>
      </p>
      <p>
        В тексте <Badge className="bg-success text-white">Success</Badge>
      </p>
      <p>
        Со скругленными краями{" "}
        <Badge className="bg-secondary text-white rounded">Success</Badge>
      </p>
      <p>
        С полностью скруглением краями{" "}
        <Badge className="bg-secondary text-white rounded-pill">Success</Badge>
      </p>
    </>
  );
}

export default BadgeRoute;

import Button from "../components/Button/Button";

function ButtonRoute() {
  const defaultBadge = {
    theme: "danger",
    pill: false,
    notNullDisplay: true,
    value: 25,
    max: 99,
  };

  return (
    <>
      <h2>Button</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <Button>Простая</Button>
      <div className="use-case-title">Типизированная (type="submit")</div>
      <Button type="submit">Submit</Button>
      <div className="use-case-title">Тематическая (theme="danger")</div>
      <Button theme="danger">Danger</Button>
      <div className="use-case-title">
        С указанием размера (только "sm" и "lg")
      </div>
      <Button theme="secondary" size="sm" className="me-3">
        Маленькая
      </Button>
      <Button theme="secondary" className="me-3">
        Обычная
      </Button>
      <Button theme="secondary" size="lg">
        Большая
      </Button>
      <div className="use-case-title">
        Блочная (на всю ширину родительского элемента)
      </div>
      <Button theme="primary" block>
        На всю ширину
      </Button>
      <div className="use-case-title">С иконкой</div>
      <Button theme="primary" icon="star" size="sm" className="me-3">
        В избранное
      </Button>
      <Button theme="primary" icon="star" className="me-3">
        В избранное
      </Button>
      <Button theme="primary" icon="star" size="lg">
        В избранное
      </Button>
      <div className="use-case-title">Квадратная</div>
      <Button theme="warning" square size="sm" className="me-3">
        Ш
      </Button>
      <Button theme="warning" square className="me-3">
        Ш
      </Button>
      <Button theme="warning" square size="lg">
        Ш
      </Button>
      <div className="use-case-title">Квадратная с иконкой</div>
      <Button
        theme="danger"
        icon="favorite"
        square
        size="sm"
        className="me-3"
      />
      <Button theme="danger" icon="favorite" square className="me-3" />
      <Button theme="danger" icon="favorite" square size="lg" />
      <div className="use-case-title">С бэйджем</div>
      <Button theme="secondary" size="sm" className="me-3" badge={defaultBadge}>
        Маленькая
      </Button>
      <Button theme="secondary" className="me-3" badge={defaultBadge}>
        Обычная
      </Button>
      <Button theme="secondary" size="lg" badge={defaultBadge}>
        Большая
      </Button>
      <div className="use-case-title">
        Кнопка с текстом и иконкой, на экранах шире 768px становящаяся
        квадратной кнопкой с иконкой
      </div>
      <Button theme="primary" icon="home" className="btn-square-md">
        Button
      </Button>
      <Button type="reset">Type reset</Button>
      <Button
        onClick={(e) => {
          console.log("Button click");
          console.log(e);
        }}
        onDoubleClick={() => {
          console.log("DoubleClick");
        }}
        onMouseOver={() => {
          console.log("Mouse over");
        }}
      >
        With handlers
      </Button>
    </>
  );
}

export default ButtonRoute;

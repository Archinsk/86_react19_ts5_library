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

      <div className="use-case-title">С иконкой</div>
      <Button icon="star">В избранное</Button>
      <div className="use-case-title">Квадратная</div>
      <Button className="button-square">Ш</Button>

      <div className="use-case-title">Квадратная с иконкой</div>
      <Button icon="favorite" className="button-square" />

      <h3>Варианты стилизации</h3>
      <div className="use-case-title">Базовые цвета</div>
      <Button className="button-primary">Button</Button>
      <Button className="button-secondary">Button</Button>
      <Button className="button-danger">Button</Button>
      <Button className="button-warning">Button</Button>
      <Button className="button-success">Button</Button>
      <div className="use-case-title">Размеры</div>
      <Button className="button-small">Button</Button>
      <Button>Button</Button>
      <Button className="button-large">Button</Button>
      <div className="use-case-title">Скругления</div>
      <Button className="rounded">Button</Button>
      <Button className="rounded-pill">Button</Button>
      <div className="use-case-title">На всю ширину родительского элемента</div>
      <Button className="w-100">На всю ширину</Button>
      <h3>Варианты темизации</h3>
      <h4>Artez-theme</h4>
      <div data-theme="artez">
        <Button className="button-primary">Отправить</Button>
        <Button className="button-secondary">Закрыть</Button>
        <Button icon="refresh" className="button-secondary button-square" />
      </div>
    </>
  );
}

export default ButtonRoute;

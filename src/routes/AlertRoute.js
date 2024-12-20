import Alert from "../components/Alert/Alert";

function AlertRoute() {
  return (
    <>
      <h2>Alert</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <Alert>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Alert>
      <div className="use-case-title">С темой</div>
      <Alert theme="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
      {/* <div className="use-case-title">С кнопкой закрытия</div>
      <Alert theme="warning" closeButton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert> */}
      <div className="use-case-title">Стилизованный через классы</div>
      <Alert className="bg-info text-white border-primary border-3 rounded-pill">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
    </>
  );
}

export default AlertRoute;

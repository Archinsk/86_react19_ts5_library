import Alert from "../components/Alert/Alert";

function AlertRoute() {
  return (
    <>
      <h2>Alert</h2>
      <h3>Варианты использования</h3>
      <Alert>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Alert>
      <h3>Варианты стилизации</h3>
      <Alert className="alert-danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
      <Alert className="alert-warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
      <Alert className="alert-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
    </>
  );
}

export default AlertRoute;

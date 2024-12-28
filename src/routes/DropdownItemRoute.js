//import React from "react";
import DropdownItem from "../components/DropdownItem/DropdownItem";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";

function DropdownItemRoute() {
  return (
    <>
      <h2>DropdownItem</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Базовые типы (ссылка, ссылка-роутер, активная, отключенная, с иконкой)
      </div>
      <DropdownMenu custom className="show position-static">
        <DropdownItem type="a" href="https://ya.ru">
          Обычная ссылка
        </DropdownItem>
        <DropdownItem href="/icon">Ссылка-роутер</DropdownItem>
        <DropdownItem href="/dropdownitem" active>
          Активная
        </DropdownItem>
        <DropdownItem href="/nav" disabled>
          Отключенная
        </DropdownItem>
        <DropdownItem
          href="/icon"
          icon="star"
          badge={{ className: "ms-2", theme: "success", text: "Значок" }}
        >
          С иконкой и значком
        </DropdownItem>
      </DropdownMenu>
      <div className="use-case-title">Стилизованный через классы</div>
      <DropdownMenu custom className="show position-static">
        <DropdownItem type="a" href="https://ya.ru">
          Обычная
        </DropdownItem>
        <DropdownItem href="/dropdownitem" className="bg-info text-white">
          Стилизация 1
        </DropdownItem>
        <DropdownItem
          href="/nav"
          className="bg-warning rounded-end border border-danger border-3"
        >
          Стилизация 2
        </DropdownItem>
      </DropdownMenu>
    </>
  );
}

export default DropdownItemRoute;

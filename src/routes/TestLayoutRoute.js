import Button from "../components/Button/Button";
import "./TestLayoutRoute.scss";

function TestLayoutRoute() {
  return (
    <div>
      <div data-theme="artez" className="page">
        <aside className="sidebar tile">
          <h2>Заголовок</h2>
          <ul className="sidebar-menu">
            <li>Пункт списка 1</li>
            <li>Пункт списка 2</li>
            <li>Пункт списка 3</li>
            <li>Подпункт 1 пункта списка 3</li>
            <li>Подпункт 2 пункта списка 3</li>
            <li>Подпункт 3 пункта списка 3</li>
            <li>Пункт списка 4</li>
            <li>Подпункт 1 пункта списка 4</li>
            <li>Подпункт 2 пункта списка 4</li>
            <li>Подпункт 3 пункта списка 4</li>
            <li>Пункт списка 5</li>
          </ul>
        </aside>
        <div className="work-area">
          <header className="header">
            <div className="user-info tile">
              <div className="form-group">
                <label>Список 1</label>
                <select>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>
              <div className="form-group">
                <label>Список 2</label>
                <select>
                  <option>Пункт списка 1</option>
                  <option>Пункт списка 2</option>
                  <option>Пункт списка 3</option>
                  <option>Пункт списка 4</option>
                </select>
              </div>
              <Button className="button-square button-primary" icon="info" />
              <div className="form-group">
                <label>Список 3</label>
                <select>
                  <option>Пункт списка 1</option>
                  <option>Пункт списка 2</option>
                  <option>Пункт списка 3</option>
                  <option>Пункт списка 4</option>
                </select>
              </div>
              <Button className="button-square button-primary" icon="info" />
              <div className="form-group">
                <label>Поле 4</label>
                <input></input>
              </div>
            </div>
            <div className="account-info tile">
              <div className="form-group">
                <label>Поле 5</label>
                <input value="Значение 1"></input>
              </div>
              <div className="form-group">
                <label>Поле 6</label>
                <input value="Значение 2"></input>
              </div>
              <div className="form-group">
                <label>Поле 7</label>
                <input value="Значение 3"></input>
              </div>
            </div>
          </header>
          <div className="form-zone tile">
            <h2>Заголовок</h2>
            <div className="progress-bar">
              <div>1</div>
              <div>Стадия 1</div>
              <hr />
              <div>2</div>
              <div>Стадия 2</div>
              <hr />
              <div>3</div>
              <div>Стадия 3</div>
            </div>
            <form>
              <div className="form-group">
                <label>Поле 1</label>
                <input></input>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Поле 2</label>
                  <input></input>
                </div>
                <div className="form-group">
                  <label>Поле 3</label>
                  <input></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Поле 4</label>
                  <input></input>
                </div>
                <div className="form-group">
                  <label>Поле 5</label>
                  <input></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Поле 6</label>
                  <input></input>
                </div>
                <div className="form-group">
                  <label>Поле 7</label>
                  <input></input>
                </div>
              </div>
              <div className="form-group">
                <label>Список 8</label>
                <select>
                  <option>Пункт списка 1</option>
                  <option>Пункт списка 2</option>
                  <option>Пункт списка 3</option>
                  <option>Пункт списка 4</option>
                </select>
              </div>
            </form>
            <div className="form-buttons">
              <button>Кнопка 1</button>
              <button>Кнопка 2</button>
              <button>Кнопка 3</button>
              <button>Кнопка 4</button>
              <button>Кнопка 5</button>
            </div>
          </div>
          <div className="table-zone tile">
            <h2>Заголовок</h2>
            <table>
              <thead>
                <tr>
                  <th>Столбец 1</th>
                  <th>Столбец 2</th>
                  <th>Столбец 3</th>
                  <th>Столбец 4</th>
                  <th>Столбец 5</th>
                  <th>Столбец 6</th>
                  <th>Столбец 7</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Значение строки 2 столбца 1</td>
                  <td>Значение строки 2 столбца 2</td>
                  <td>Значение строки 2 столбца 3</td>
                  <td>Значение строки 2 столбца 4</td>
                  <td>Значение строки 2 столбца 5</td>
                  <td>Значение строки 2 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 3 столбца 1</td>
                  <td>Значение строки 3 столбца 2</td>
                  <td>Значение строки 3 столбца 3</td>
                  <td>Значение строки 3 столбца 4</td>
                  <td>Значение строки 3 столбца 5</td>
                  <td>Значение строки 3 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-secondary"
                      icon="arrow_circle_down"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 4 столбца 1</td>
                  <td>Значение строки 4 столбца 2</td>
                  <td>Значение строки 4 столбца 3</td>
                  <td>Значение строки 4 столбца 4</td>
                  <td>Значение строки 4 столбца 5</td>
                  <td>Значение строки 4 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 5 столбца 1</td>
                  <td>Значение строки 5 столбца 2</td>
                  <td>Значение строки 5 столбца 3</td>
                  <td>Значение строки 5 столбца 4</td>
                  <td>Значение строки 5 столбца 5</td>
                  <td>Значение строки 5 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-secondary"
                      icon="arrow_circle_down"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 6 столбца 1</td>
                  <td>Значение строки 6 столбца 2</td>
                  <td>Значение строки 6 столбца 3</td>
                  <td>Значение строки 6 столбца 4</td>
                  <td>Значение строки 6 столбца 5</td>
                  <td>Значение строки 6 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 7 столбца 1</td>
                  <td>Значение строки 7 столбца 2</td>
                  <td>Значение строки 7 столбца 3</td>
                  <td>Значение строки 7 столбца 4</td>
                  <td>Значение строки 7 столбца 5</td>
                  <td>Значение строки 7 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 8 столбца 1</td>
                  <td>Значение строки 8 столбца 2</td>
                  <td>Значение строки 8 столбца 3</td>
                  <td>Значение строки 8 столбца 4</td>
                  <td>Значение строки 8 столбца 5</td>
                  <td>Значение строки 8 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Значение строки 9 столбца 1</td>
                  <td>Значение строки 9 столбца 2</td>
                  <td>Значение строки 9 столбца 3</td>
                  <td>Значение строки 9 столбца 4</td>
                  <td>Значение строки 9 столбца 5</td>
                  <td>Значение строки 9 столбца 6</td>
                  <td>
                    <Button
                      className="button-square button-primary"
                      icon="arrow_circle_up"
                    />
                    <Button
                      className="button-square button-secondary"
                      icon="arrow_circle_down"
                    />
                    <Button
                      className="button-square button-primary"
                      icon="info"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestLayoutRoute;

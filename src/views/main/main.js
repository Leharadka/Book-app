import { AbstractView } from "../../common/view.js";

export class MainView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Поиск книг");
  }

  render() {
    console.log("Вызов render()");
    const main = document.createElement("div");
    main.innerHTML = "Тест";
    this.app.innerHTML = "";
    this.app.append(main);
  }
}

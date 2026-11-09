import './Resume.css'

function Resume() {
  return (
    <div className="resume">
      <h1>Иван Иванов</h1>
      <p className="role">Frontend-разработчик</p>
      <p>Email: ivan@example.com · Телефон: +7 700 000 00 00</p>

      <h2>О себе</h2>
      <p>Начинающий разработчик, изучаю React и люблю делать удобные интерфейсы.</p>

      <h2>Навыки</h2>
      <ul>
        <li>HTML, CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
      </ul>

      <h2>Образование</h2>
      <p>Университет, специальность «Информатика», 2022–2026</p>

      <h2>Опыт</h2>
      <p>Учебные проекты: сайт-портфолио, список задач, карточки на React.</p>
    </div>
  )
}

export default Resume

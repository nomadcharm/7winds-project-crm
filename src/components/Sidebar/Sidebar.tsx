import selectArrowIcon from '../../assets/icon-arrow-down.svg';
import projectIcon from '../../assets/icon-project.svg';
import './Sidebar.styles.scss';

const projectsDb = [
  { id: 1, name: 'По проекту' },
  { id: 2, name: 'Объекты' },
  { id: 3, name: 'РД' },
  { id: 4, name: 'МТО' },
  { id: 5, name: 'СМР' },
  { id: 6, name: 'График' },
  { id: 7, name: 'МиМ' },
  { id: 8, name: 'Рабочие' },
  { id: 9, name: 'Капвложения' },
  { id: 10, name: 'Бюджет' },
  { id: 11, name: 'Финансирование' },
  { id: 12, name: 'Панорамы' },
  { id: 13, name: 'Камеры' },
  { id: 14, name: 'Поручения' },
  { id: 15, name: 'Контрагенты' },
]

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__select">
        <div className="sidebar__select-container">
          <div className="sidebar__select-text">
            <h3 className="sidebar__select-title">Название проекта</h3>
            <p className="sidebar__select-subtitle">Аббревиатура</p>
          </div>
          <button className="sidebar__select-button">
            <img src={selectArrowIcon} alt="Показать меню" />
          </button>
        </div>
      </div>
      <div className="sidebar__projects">
        <ul className="sidebar__projects-list">
          {projectsDb.map((project) => {
            return <li key={project.id} className={project.id === 5 ? "sidebar__projects-item sidebar__projects-item--active" : "sidebar__projects-item"}>
              <button className="sidebar__projects-btn">
                <img src={projectIcon} alt="Проект" />
                <p>{project.name}</p>
              </button>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;

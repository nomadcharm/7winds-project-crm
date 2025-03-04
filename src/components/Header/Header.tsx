import menuIcon from './../../assets/icon-menu.svg';
import backIcon from './../../assets/icon-back.svg';
import './Header.style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__action-nav action-nav">
          <ul className="action-nav__list">
            <li className="action-nav__item">
              <button className="action-nav__button">
                <img src={menuIcon} alt="Меню" />
              </button>
            </li>
            <li className="action-nav__item">
              <button className="action-nav__button">
                <img src={backIcon} alt="Вернуться назад" />
              </button>
            </li>
          </ul>
        </nav>
        <nav className="header__menu-nav menu-nav">
          <ul className="menu-nav__list">
            <li className="menu-nav__item">
              <a href="" className="menu-nav__link menu-nav__link--active">Просмотр</a>
            </li>
            <li className="menu-nav__item">
              <a href="" className="menu-nav__link">Управление</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

import Table from '../Table';
import './Workspace.styles.scss';

const Workspace = () => {
  return (
    <div className="workspace">
      <div className="workspace__header">
        <p className="workspace__project-title">Строительно-монтажные работы</p>
      </div>
      <div className="workspace__table-wrapper">
        <Table />
      </div>
    </div>
  )
}

export default Workspace;

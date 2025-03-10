import { useGetRowsQuery } from '../../redux/features/rowApi';
import TableRow from '../TableRow';
import './Table.style.scss';

const Table = () => {
  const { data: rows, refetch } = useGetRowsQuery();

  const handleUpdate = () => {
    refetch();
  };

  return (
    <>
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__header-cell">Уровень</th>
            <th className="table__header-cell">Наименование работ</th>
            <th className="table__header-cell">Основная з/п</th>
            <th className="table__header-cell">Оборудование</th>
            <th className="table__header-cell">Накладные расходы</th>
            <th className="table__header-cell">Сметная прибыль</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {rows && rows.map((row) => {
            return (
              <TableRow
                key={row.id}
                row={row}
                depth={0}
                onUpdate={handleUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table;

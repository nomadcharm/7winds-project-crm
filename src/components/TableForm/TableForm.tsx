import { ChangeEvent } from 'react';
import { RowData, RowRequestData } from '../../redux/features';
import addRowIcon from './../../assets/icon-file.svg';

interface TableFormProps {
  row: RowData | Partial<RowRequestData>;
  isEditing: boolean;
  parentId?: number | null;
  handleSave?: () => Promise<void>;
  handleNewRow?: (parentId: number | null) => Promise<void>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, field: keyof RowData) => void
}

const TableForm = ({ row, isEditing, parentId, handleSave, handleNewRow, handleInputChange }: TableFormProps) => {

  return (
    <>
      {
        row && (
          <>
            <td>
              {isEditing ? (
                <button onClick={handleSave}>
                  <img src={addRowIcon} alt="Сохранить изменения" />
                </button>
              ) : (
                <button onClick={() => handleNewRow && parentId && handleNewRow(parentId)}>
                  <img src={addRowIcon} alt="Добавить новую строку" />
                </button>
              )}
            </td>
            <td className="table__cell">
              <input
                className="table__row-input"
                type="text"
                value={row.rowName}
                onChange={(e) => handleInputChange(e, "rowName")}
              />
            </td>
            <td className="table__cell">
              <input
                className="table__row-input"
                type="text"
                value={isEditing ? row.salary : ""}
                onChange={(e) => handleInputChange(e, "salary")}
              />
            </td>
            <td className="table__cell">
              <input
                className="table__row-input"
                type="text"
                value={isEditing ? row.equipmentCosts : ""}
                onChange={(e) => handleInputChange(e, "equipmentCosts")}
              />
            </td>
            <td className="table__cell">
              <input
                className="table__row-input"
                type="text"
                value={isEditing ? row.overheads : ""}
                onChange={(e) => handleInputChange(e, "overheads")}
              />
            </td>
            <td className="table__cell">
              <input
                className="table__row-input"
                type="text"
                value={isEditing ? row.estimatedProfit : ""}
                onChange={(e) => handleInputChange(e, "estimatedProfit")}
              />
            </td></>
        )
      }
    </>
  )
}

export default TableForm

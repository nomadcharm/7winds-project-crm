import React, { ChangeEvent, useState } from 'react';
import { RowData, useEditRowMutation } from '../../redux/features/rowApi';
import addRowIcon from './../../assets/icon-file.svg';
import deleteRowIcon from './../../assets/icon-delete.svg';
import './TableRow.styles.scss';

interface TableRowProps {
  row: RowData;
  onUpdate: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, onUpdate }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedRow, setEditedRow] = useState<Partial<RowData>>({ ...row });
  const [editRowMutation, { isLoading }] = useEditRowMutation();

  const handleDoubleClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof RowData
  ) => {
    const value = e.target.value;
    setEditedRow((prev) => ({
      ...prev,
      [field]: field === 'rowName' ? value : Number(value),
    }));
  };

  const handleSave = async () => {
    try {
      await editRowMutation({ id: row.id, data: editedRow }).unwrap();
      onUpdate();
      setIsEditing(false);
    } catch (error) {
      console.error('Что-то пошло не так:', error);
    }
  };

  return (
    <>
      <tr className="table__body-row" onDoubleClick={handleDoubleClick}>
        <td>
          {isEditing ? (
            <>
              <button onClick={handleSave} disabled={isLoading}>
                <img src={addRowIcon} alt="" />
              </button>
            </>
          ) : (
            <div className="table__btn-wrapper">
              <button className="table__row-btn table__row-btn--add">
                <img src={addRowIcon} alt="Add row" />
              </button>
              <button className="table__row-btn table__row-btn--delete">
                <img src={deleteRowIcon} alt="Delete row" />
              </button>
            </div>
          )}
        </td>
        <td className="table__cell">
          {isEditing ? (
            <input
              className="table__row-input"
              type="text"
              value={editedRow.rowName}
              onChange={(e) => handleInputChange(e, "rowName")}
            />
          ) : (
            row.rowName
          )}
        </td>
        <td className="table__cell">
          {isEditing ? (
            <input
              className="table__row-input"
              type="text"
              value={editedRow.salary}
              onChange={(e) => handleInputChange(e, "salary")}
            />
          ) : (
            row.salary
          )}
        </td>
        <td className="table__cell">
          {isEditing ? (
            <input
              className="table__row-input"
              type="text"
              value={editedRow.equipmentCosts}
              onChange={(e) => handleInputChange(e, "equipmentCosts")}
            />
          ) : (
            row.equipmentCosts
          )}
        </td>
        <td className="table__cell">
          {isEditing ? (
            <input
              className="table__row-input"
              type="text"
              value={editedRow.overheads}
              onChange={(e) => handleInputChange(e, "overheads")}
            />
          ) : (
            row.overheads
          )}
        </td>
        <td className="table__cell">
          {isEditing ? (
            <input
              className="table__row-input"
              type="text"
              value={editedRow.estimatedProfit}
              onChange={(e) => handleInputChange(e, "estimatedProfit")}
            />
          ) : (
            row.estimatedProfit
          )}
        </td>
      </tr>
    </>
  );
};


export default TableRow;
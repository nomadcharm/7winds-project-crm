import React, { ChangeEvent, useState } from 'react';
import { RowData, RowUpdateRequestData, RowRequestData } from '../../redux/features';
import { useAddRowMutation, useDeleteRowMutation, useEditRowMutation } from '../../redux/features';
import addRowIcon from './../../assets/icon-file.svg';
import deleteRowIcon from './../../assets/icon-delete.svg';
import './TableRow.styles.scss';
import TableForm from '../TableForm';

interface TableRowProps {
  row: RowData;
  depth: number;
  onUpdate: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, depth, onUpdate }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedRow, setEditedRow] = useState<RowUpdateRequestData>({ ...row });
  const [isAddingChild, setIsAddingChild] = useState<boolean>(false);
  const [editRowMutation] = useEditRowMutation();
  const [addRow] = useAddRowMutation();
  const [deleteRow] = useDeleteRowMutation();
  const indent = 20;

  const [childRow, setChildRow] = useState<Partial<RowRequestData>>({
    rowName: "",
    salary: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
  });

  const defaultRowData: RowRequestData = {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: "",
    salary: 0,
    supportCosts: 0,
    parentId: null,
  };

  const handleAddRow = () => {
    if (isEditing) {
      setIsEditing(false);
    }
    setIsAddingChild(true);
    setChildRow({
      rowName: "",
      salary: 0,
      equipmentCosts: 0,
      overheads: 0,
      estimatedProfit: 0,
    });
  };

  const handleChildSave = async (parentId: number | null) => {
    try {
      const completeRow: RowRequestData = {
        ...defaultRowData,
        ...childRow,
        parentId,
      };
      await addRow({ parentId, newRow: completeRow }).unwrap();
      console.log(completeRow)
      onUpdate();
      setIsAddingChild(false);
      setIsEditing(false);
    } catch (error) {
      console.error('Что-то пошло не так...:', error);
    }
  };

  const handleChildInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof RowData
  ) => {
    const value = e.target.value;
    setChildRow((prev) => ({
      ...prev,
      [field]: field === 'rowName' ? value : Number(value),
    }));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
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

  const handleDelete = async (id: number) => {
    try {
      await deleteRow(id);
      onUpdate();
    } catch (error) {
      console.error('Что-то пошло не так:', error);
    }
  }

  return (
    <>
      {
        <tr>
          {isEditing && <TableForm row={editedRow} isEditing={isEditing} handleSave={handleSave} handleInputChange={handleInputChange} />}
        </tr>
      }
      <tr className="table__body-row" onDoubleClick={handleDoubleClick}>
        <td style={{ paddingLeft: `${indent * depth}px` }}>
          <div className="table__btn-wrapper">
            <button className="table__row-btn table__row-btn--add" onClick={handleAddRow}>
              <img src={addRowIcon} alt="Добавить новую строку" />
            </button>
            <button className="table__row-btn table__row-btn--delete" onClick={() => handleDelete(row.id)}>
              <img src={deleteRowIcon} alt="Delete row" />
            </button>
          </div>
        </td>
        <td className="table__cell">
          {row.rowName}
        </td>
        <td className="table__cell">
          {row.salary}
        </td>
        <td className="table__cell">
          {row.equipmentCosts}
        </td>
        <td className="table__cell">
          {row.overheads}
        </td>
        <td className="table__cell">
          {row.estimatedProfit}
        </td>
      </tr>
      {row.child.map((childRow) => {
        return (
          <TableRow row={childRow} depth={depth + 1} onUpdate={onUpdate} />
        )
      })}
      {isAddingChild && (
        <tr className="table__body-row child-row">
          <TableForm
            row={childRow}
            isEditing={false}
            parentId={row.id}
            handleNewRow={handleChildSave}
            handleInputChange={handleChildInputChange}
          />
        </tr>
      )}
    </>
  );
};


export default TableRow;
export interface RowData {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: RowData[];
}

export interface RowRequestData {
  equipmentCosts: number;        
  estimatedProfit: number;       
  machineOperatorSalary: number; 
  mainCosts: number;             
  materials: number;             
  mimExploitation: number;       
  overheads: number;             
  parentId: number | null;
  rowName: string;      
  salary: number;                
  supportCosts: number;          
}

export type RowUpdateRequestData = Omit<RowRequestData, 'parentId'>
import React from "react";
import * as XLSX from "xlsx";
import "./ExcelFileUploader.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addListEmployee } from "../../redux/slice/manageUserSlice/Employee/employeeSlice";

const ExcelFileUploader = ({
  userData,
  setUserData,
}: {
  userData: any;
  setUserData: any;
}) => {
  const dispatch= useDispatch<AppDispatch>();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      readExcelFile(file);
    }
  };
  const readExcelFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;

      if (result) {
        const workbook = XLSX.read(result, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const data: any = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const keys: any = data[0];

        const objectsArray = data.slice(1).map((row: any) =>
          keys.reduce((acc: any, key: any, index: any) => {
            acc[key] = row[index];
            return acc;
          }, {})
        );
        const addAttributes = (obj: any) => {
          return {
            fname: obj.name,
            email: obj.email,
            role: obj.role,
            module: [
              { modulename: obj.modulename, accesstype: obj.accesstype },
            ],
          };
        };
        const newArrayWithUpdatedAttributes = objectsArray.map((item: any) =>
          addAttributes(item)
        );
        dispatch(addListEmployee(newArrayWithUpdatedAttributes));
        setUserData([...userData, ...newArrayWithUpdatedAttributes]);
      }
    };

    reader.readAsBinaryString(file);
  };
  return (
    <input
      className="custom-file-input"
      type="file"
      accept=".xls, .xlsx"
      onChange={handleFileChange}
    />
  );
};

export default ExcelFileUploader;

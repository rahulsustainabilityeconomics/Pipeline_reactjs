import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
import "./NewEmployeeUploadPopUp.scss"; // Create a CSS file for styling the popup.
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import Close from "../../assets/svg/Close";
import example from "../../assets/logo.png";
import download from "../../assets/svg/download.svg";
import upload from "../../assets/svg/upload.svg";
import { uploadEmployeeDetails } from "../../redux/slice/manageUserSlice/Employee/employeeApiSlice";

const NewEmployeeUploadPopUp = ({ onClose }: { onClose: any }) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileUploadClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setSelectedFile(file);
    } else {
      console.log("even doesnt failed");
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(uploadEmployeeDetails({file:selectedFile}));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
  }
  const [csvFiles, setCsvFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const droppedFiles = Array.from(e.dataTransfer.files);
    const csvFiles = droppedFiles.filter((file) => file.type === "text/csv");
    setCsvFiles(csvFiles);
  };

  return (
    <div className="addNewUserPopup">
      <div className="popUpHeader">
        <div className="heading">Employee Details</div>
        <button className="popup-closeButton" onClick={onClose}>
          <Close color={"#000"} />
        </button>
      </div>
      <div className="productplanContainer">
        <form
          className="newEmployeeUploadUserForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="row">
            <div className="form-group">
              <div className="label">Sample file (For user reference)</div>
              <div className="download">
                <div className="download-name">Employees.excel</div>
                <div className="download-icon">
                  <a
                    href={example}
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img src={download} alt="x" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <div
                className="uploadContainer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="upload-icon">
                  <img src={upload} alt="x" />
                </div>
                <input className="fileInput"  ref={fileInputRef} type="file" onChange={handleFileChange} />
                {!selectedFile?<div className="upload-text">
                  <span> Drag and Drop here </span>
                  <span> or </span>
                  <span className="browseFile" onClick={handleFileUploadClick}> Browse File</span>
                </div>:<div className="upload-text"><div>Selected File</div><div>{selectedFile?.name}</div></div>}
              </div>
              <div className="file-format">File Format : PDF, Word, Txt</div>
            </div>
          </div>
          <div className="buttonPart addUserButton">
            <button type="submit" className="loginbutton card-button ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEmployeeUploadPopUp;

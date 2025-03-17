import { useState } from "react";
import * as XLSX from "xlsx";
import './ReadExcel.css'



function ReadExcel() {

  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  return (
    <div className="Ex-body">

      <div className="Ex-file">
        <h2>Upload Data</h2>
      <input style={{
        display: 'block',
        fontSize: '16px',
        backgroundColor: 'white',
        height: '30px',
        paddingTop: '8px',
        paddingLeft: '8px',
        borderRadius: '5px',
        marginRight: '20px',
        color: 'black',
        width: '92%'
      }}
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
      />
      </div>
      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReadExcel;
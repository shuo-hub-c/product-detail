import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { formatHeader } from "../../utils/formatHelper";
import "./Table.css";

function Table({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>
              {formatHeader(header)} <FaChevronDown className="chevron-down" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

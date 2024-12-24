import React from "react";
import { useTable, useRowSelect } from "react-table";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Styles = styled.div`
  margin-top: 1%;
  overflow-y: auto;
  flex: 1;
  display: flex;
  table {
    border-spacing: 0;
    border: 1px solid rgb(192, 192, 192);

    table-layout: auto;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    .notfirst:hover {
      background-color: rgb(255, 203, 5);
      cursor: pointer;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgb(192, 192, 192);
      border-right: 0.5px none rgb(192, 192, 192);

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Table = ({ columns, data }) => {
  let navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect
  );

  const ProfileChange = (e) => {
    let user = data[e.index];
    let userId = user.id;
    navigate(`/admin/users/edit/${userId}`);
  };

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                class="notfirst"
                {...row.getRowProps({
                  style: {
                    backgroundColor: row.isSelected ? "green" : "",
                  },
                  onClick: (e) => {
                    ProfileChange(row);
                  },
                })}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

import React, { CSSProperties } from "react";
import { useTable, useBlockLayout } from "react-table";
import { styled } from "../../../components/jurina/styling/theme";

import { useSticky } from "react-table-sticky";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
const Styles = styled.div`
  padding: 3px;
  flex: 1;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  .tr {
    :hover {
      background: ${(props) => props.theme.palette.accent100};
    }
  }
  .table {
    font-size: 0.9rem;
    background: white;

    overflow-x: auto;
    .tr {
      cursor: pointer;

      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;

      overflow: hidden;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;

        &.isResizing {
          background: red;
        }
      }
    }
    .th {
      background: #808080;
      color: white;
    }
    &.sticky {
      overflow: auto;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        border-bottom: 1px solid silver;
        text-align: center;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }
    }
  }
`;

export const DataTable = (props) => {
  const { columns, data, onRowClick } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: data || [],
    },
    useBlockLayout,
    useSticky
  );

  return (
    <TableContainer autoSize={props.autoSize}>
      <div {...getTableProps()} className="table sticky">
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()} className="body">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div
                {...row.getRowProps()}
                className="tr"
                onClick={() => onRowClick?.(row.original)}
              >
                {row.cells.map((cell) => {
                  return (
                    <div
                      {...cell.getCellProps([{ style: cell.column.style }])}
                      className="td"
                    >
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* <div className="footer">
      {footerGroups.map(footerGroup => (
        <div {...footerGroup.getHeaderGroupProps()} className="tr">
          {footerGroup.headers.map(column => (
            <div {...column.getHeaderProps()} className="td">
              {column.render("Footer")}
            </div>
          ))}
        </div>
      ))}
    </div> */}
      </div>
    </TableContainer>
  );
};
const TableContainer = (props) => {
  if (props.autoSize) {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Styles style={{ height: height - 35, width: width - 35 }}>
            {props.children}
          </Styles>
        )}
      </AutoSizer>
    );
  } else {
    return <Styles>{props.children}</Styles>;
  }
};

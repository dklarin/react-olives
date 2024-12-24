import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const TableRow = props => {
  let x = 0
  return (
    <ContentLoader
      height={24}
      width={props.width}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      {props.columns.map((col, index) => {
        let xValue = x
        x += col.width
        return (
          <rect
            key={index}
            x={xValue}
            y="8"
            rx="2"
            ry="2"
            width={col.width - 2}
            height="8"
          />
        )
      })}
      <rect x="0" y="23" rx="2" ry="2" width={props.width} height=".3" />
    </ContentLoader>
  )
}

const ShimmerContainer = styled.div`
  background: white;
`
export const DataGridShimmer = props => {
  const { columns, style, className } = props

  const appliedStyle = Object.assign(
    { width: '100%', height: '100%', flex: 1 },
    style || {}
  )

  return (
    <ShimmerContainer style={appliedStyle} className={className}>
      <AutoSizer>
        {({ height, width }) => (
          <div style={{ height, width }}>
            {Array(10)
              .fill('')
              .map((e, i) => (
                <TableRow
                  columns={columns}
                  width={width}
                  key={i}
                  style={{ opacity: Number(2 / i).toFixed(1) }}
                />
              ))}
          </div>
        )}
      </AutoSizer>
    </ShimmerContainer>
  )
}

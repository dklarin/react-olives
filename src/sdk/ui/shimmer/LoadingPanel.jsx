import React from 'react'
import styled from 'styled-components'

/***
 * The component
 */
export const LoadingPanel = props => {
  const { loading, error, children, shimmer } = props
  const Shimmer = shimmer
  if (loading) {
    if (shimmer) return <Shimmer />
    return 'Loading'
  }
  if (error) {
    return error
  }

  return children
}

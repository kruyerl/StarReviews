import styled, { keyframes } from 'styled-components'

export const keyframeRattle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

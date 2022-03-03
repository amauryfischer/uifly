import styled, { css } from "styled-components"

const BaseButton = styled.button<{ color: string; textColor: string }>`
  // transform
  background-position: center;
  box-shadow: 0 0 4px #999;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  background-color: ${({ color }) => `var(--${color}500)`};
  color: ${({ textColor }) => (textColor ? `var(--${textColor}900)` : "white")};
  border-radius: 4px;

  background-position: center;
  transition: background 0.8s, transform 0.3s, background-color 0.3s,
    filter 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-0.15rem);
    ${({ color }) =>
      css`
        background: var(--${color}600)
          radial-gradient(circle, transparent 1%, var(--${color}600) 1%)
          center/15000%;
      `};
    ${({ color }) =>
      css`
        box-shadow: rgba(var(--${color}500-rgb), 0.2) 0px 2px 4px -1px,
          rgb(var(--${color}500-rgb), 0.14) 0px 4px 5px 0px,
          rgb(var(--${color}500-rgb), 0.12) 0px 1px 10px 0px;
      `};
  }
  &:active {
    background-color: #ffffff3d;
    transform: scale(0.97);
    background-size: 100%;
    transition: background 0s;
  }
`

export const BlueButton = (props: any) => {
  return <BaseButton {...props} color="blue" />
}
export const PurpleButton = (props: any) => {
  return <BaseButton {...props} color="purple" />
}
export const GreenButton = (props: any) => {
  return <BaseButton {...props} color="green" />
}
export const YellowButton = (props: any) => {
  return <BaseButton {...props} color="yellow" />
}
export const RedButton = (props: any) => {
  return <BaseButton {...props} color="red" />
}
export const CyanButton = (props: any) => {
  return <BaseButton {...props} color="cyan" textColor="grey" />
}
export const PinkButton = (props: any) => {
  return <BaseButton {...props} color="pink" />
}
export const GreyButton = (props: any) => {
  return <BaseButton {...props} color="grey" />
}

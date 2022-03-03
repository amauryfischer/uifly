import styled from "styled-components"

const Flex = styled.div<{
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  justify?: "start" | "end" | "center" | "between" | "around"
  align?: "start" | "end" | "center" | "baseline" | "stretch"
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch"
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch"
  gap?: string
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  align-content: ${({ alignContent }) => alignContent || "stretch"};
  gap: ${({ gap }) => gap || "0"};
`

export default Flex

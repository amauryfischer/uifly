import { AppBar, Box } from "@mui/material"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { GreenButton } from "../../utils/design/buttons"
import Flex from "../../utils/design/flex"

const StyledAppBar = styled(AppBar)`
  height: 3rem;
  display: flex;
  justify-content: center;
  background-color: #fff !important;
  color: var(--grey500) !important;
  padding-right: 1rem;
  padding-left: 1rem;
`
const ApplicationBar = ({}) => {
  const navigate = useNavigate()
  return (
    <>
      <StyledAppBar>
        <Flex fullWidth gap="1rem" justifyContent="space-between">
          <div onClick={() => navigate("/")}>Numérisk</div>
          <GreenButton onClick={() => navigate("components")}>
            Composants
          </GreenButton>
        </Flex>
      </StyledAppBar>
      <Box height="3rem" />
    </>
  )
}

export default ApplicationBar

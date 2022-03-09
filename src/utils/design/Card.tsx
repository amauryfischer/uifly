import React from "react"
import { Card as MuiCard, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import Flex from "./flex"
import styled from "styled-components"
const StyledImage = styled.img``
const StyledCard = styled(MuiCard)`
  postion: relative;
  width: fit-content;
  transition: all 0.2s !important;
  ${StyledImage}:hover {
    transition: all 0.2s;
    transform: scale(1.1);
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
      rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    transform: translateY(-5px);
  }
`
const ActionIconBar = styled.div`
  position: absolute;
`
const Card = ({}) => {
  return (
    <StyledCard>
      <ActionIconBar>
        <Flex gap="1rem" justifyContent="space-between">
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Flex>
      </ActionIconBar>
      <StyledImage height={"100%"} width={200} src="/people1.jpg" alt="" />
    </StyledCard>
  )
}

export default Card

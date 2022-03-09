import React from "react"
import {
  BlueButton,
  CyanButton,
  GreenButton,
  GreyButton,
  PinkButton,
  PurpleButton,
  RedButton,
  YellowButton,
} from "../../utils/design/buttons"
import Card from "../../utils/design/Card"
import Flex from "../../utils/design/flex"

const Components = ({}) => {
  return (
    <Flex gap="2rem" direction="column">
      <Flex gap="0.5rem">
        <BlueButton>Ajouter un membre</BlueButton>
        <PurpleButton>Ajouter un membre</PurpleButton>
        <GreenButton>Ajouter un membre</GreenButton>
        <RedButton>Ajouter un membre</RedButton>
        <CyanButton>Ajouter un membre</CyanButton>
        <PinkButton>Ajouter un membre</PinkButton>
        <GreyButton>Ajouter un membre</GreyButton>
        <YellowButton>Ajouter un membre</YellowButton>
      </Flex>
      <Flex gap="0.5rem">
        <Card />
        <Card />
        <Card />
      </Flex>
    </Flex>
  )
}

export default Components

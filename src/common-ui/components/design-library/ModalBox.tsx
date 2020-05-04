import React from 'react'
import styled from 'styled-components'
import { fontSizeTitle } from 'src/common-ui/components/design-library/typography'
import { colorGrey9 } from 'src/common-ui/components/design-library/colors'

const StyledModalBox = styled.div`
    background-color: #ffffff;
    font-family: Poppins;
    color: ${colorGrey9};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
`
const HeaderText = styled.h2`
    font-weight: 600;
    font-size: 20px;
    margin: 0px 0 30px;
    text-align: center;
`
const Header = styled.div`
    flex: 1;
`
const StyledLine = styled.div`
    border-bottom: 1px solid #e0e0e0;
`
const Actions = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`
const Body = styled.div`
    font-size: ${fontSizeTitle}px;
    display: flex;
    align-content: center;
    flex: 5;
    margin-top: 20px;
    justify-content: space-between;
`
export const ModalBox = ({
    header,
    actions,
    children,
}: {
    header: any
    actions: any
    children: any
}) => (
    <StyledModalBox>
        <Header>
            <HeaderText>{header}</HeaderText>
            <StyledLine />
        </Header>
        <Body>{children}</Body>
        <Actions>{actions}</Actions>
    </StyledModalBox>
)

export const ModalColLeft = styled.div`
    width: 55%;
    padding-right: 5%;
`
export const ModalColRight = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 100%;
    }
`

export const ModalColRightBig = styled(ModalColRight)`
    & img {
        width: 90%;
        margin-right: -130px;
        margin-top: -10px;
        margin-bottom: -60px;
    }
`

import styled from 'styled-components'
import LogoIcon from '../assets/Logo.svg?react'

export const KaseLogo = styled(LogoIcon)`
    height: ${({ height }) => height || '40px'};
    & path {
        fill: ${({ theme }) => theme.logoColor}
    }
`
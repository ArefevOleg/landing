import {theme} from "./Theme";


type FontPropsType = {
    family?: string
    width?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}


export const font = ({family, width, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
  font-family: ${family || 'Inter'};
  font-weight: ${width || 400};
  color: ${color || theme.fontColor};
  line-height: ${lineHeight || 1.5};
  font-size: calc((100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
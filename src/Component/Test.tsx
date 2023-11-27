'use client'
import { Typography } from "@mui/material"
import { theme } from "@/utils/theme"

type Props = {}

const Test = (props: Props) => {
  return (
    <Typography color={theme.palette.primary.main}> Sltb Fleet app</Typography>
  )
}

export default Test
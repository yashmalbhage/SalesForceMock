import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import Link from 'next/link';

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <Link href="/login">

        <StyledButton disableHoverEffect={false} variant="outlined">
          Sign In
        </StyledButton>
      </Link>
      <Link href="/signup">
        <StyledButton disableHoverEffect={false} >Sign Up</StyledButton>
      </Link>
    </Box>
  )
}

export default AuthNavigation

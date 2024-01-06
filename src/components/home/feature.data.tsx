import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'Practice answering common Salesforce interview questions.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Get personalized feedback from industry experts.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Time',
    description: 'Improve your confidence and public speaking skills.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Improve your confidence and public speaking skills.',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Increase your chances of landing your dream Salesforce job.',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Learn about the latest Salesforce trends and best practices.',
    icon: <ContactSupportIcon />,
  },
]

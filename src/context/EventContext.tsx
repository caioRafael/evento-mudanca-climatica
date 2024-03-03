'use client'
import { IRegistrationData } from '@/types/RegistrationType'
import { ISubmissionForm } from '@/types/SubmissionType'
import { ReactNode, createContext, useContext, useState } from 'react'

interface EventContextType {
  submissions: ISubmissionForm[]
  addSubmission: (submission: ISubmissionForm) => void
  registrations: IRegistrationData[]
  addRegistration: (registration: IRegistrationData) => void
}

interface EventProviderProps {
  children: ReactNode
}

const EventContext = createContext<EventContextType | undefined>(undefined)

export function EventProvider({ children }: EventProviderProps) {
  const [submissions, setSubmissions] = useState<ISubmissionForm[]>([])
  const [registrations, setRegistrations] = useState<IRegistrationData[]>([])

  const addSubmission = (submission: ISubmissionForm) => {
    setSubmissions([...submissions, submission])
  }

  const addRegistration = (registration: IRegistrationData) => {
    setRegistrations([...registrations, registration])
  }

  return (
    <EventContext.Provider
      value={{ submissions, addSubmission, registrations, addRegistration }}
    >
      {children}
    </EventContext.Provider>
  )
}

export const useEventContext = (): EventContextType => {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider')
  }
  return context
}

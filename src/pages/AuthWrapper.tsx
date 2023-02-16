
import React from 'react'
import styled from 'styled-components'
import { useUserContext } from '../context/user_context'
import { InputProviderProps } from '../types/globaltypes.types'




function AuthWrapper({ children }: InputProviderProps) {
    const { currentUser } = useUserContext()

    if (currentUser === undefined) {
        return (
            <Wrapper>
                <h1>Loading....</h1>
            </Wrapper>
        )
    }
    return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
import React from 'react'
import styled from 'styled-components'
import Spacer from './ds/Spacer'

require("./css/custom.css")

const StoreContainer = styled.div`
  padding: 20px;
`

const SampleStore = ({children, twoColumn=false}) => (
    <StoreContainer>
        <div className='store-header'>
            <div className='store-logo'>Y</div>
            <Spacer horizontal/>
            <div>
                <div className='store-name'>Your store</div>
                <div className='store-details'>
                    <Spacer horizontal/>
                </div>
            </div>
        </div>
        <div className='store-content'>
            {twoColumn ? (
                <div className='row'>
                    <div className='col col--6'>
                        <div className='product'>
                            <img alt="shirt" height="200" src="img/shirt.svg" />
                        </div>
                        <Spacer />
                    </div>
                    <div className='col col--6'>
                        <Spacer size='lg' />
                        {children}
                    </div>
                </div>
            ): (
                <>
                    <div className='product'>
                        <img alt="shirt" height="200" src="img/shirt.svg" />
                    </div>
                    <Spacer />
                    {children}
                </>
            )}
        </div>
        <div className='childContainer'>

        </div>
    </StoreContainer>
)

export default SampleStore

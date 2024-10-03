import React from 'react'
import FormInput from '../ui/FormInput'

const Pay = () => {
  return (
    <div>
        <FormInput label='Account Id' />
        <Button  
         title='Send Otp'
        />
        <FormInput label='Enter Padipocket Pin' />

    </div>
  )
}

export default Pay
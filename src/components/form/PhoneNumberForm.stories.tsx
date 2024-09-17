import { Meta, StoryObj } from '@storybook/react'
import PhoneNumberForm from './PhoneNumberForm'
import { COUNTRY_LIST, DEFAULT_COUNTRY_PHONE } from '../../constanst/mockData'
import { ICountriesPhone } from '../input/InternationalPhone'

export default {
  title: 'Components/Form/PhoneNumberForm',
  component: PhoneNumberForm,
} as Meta<typeof PhoneNumberForm>

type PhoneNumberFormStory = StoryObj<typeof PhoneNumberForm>

export const PhoneNumberFormTemplete: PhoneNumberFormStory = {
  args: {
    countryList: COUNTRY_LIST,
    mobile: '0899999999',
    isInvalid: false,
    placeholder: 'ระบุหมายเลขโทรศัพท์',
    defaultCountry: DEFAULT_COUNTRY_PHONE,
    onChangeCountry: (selectedCountry: ICountriesPhone) => {
      console.log('selectedCountry-->',selectedCountry)
    },
    onChangeMobile: (mobile: string) => {
      console.log('mobile-->',mobile)
    },
    fontSize: '14px',
  },
}

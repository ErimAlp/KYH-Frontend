import React from 'react'
import ContactForm from '../partials/Forms/ContactForm'
import Breadcrumb from '../partials/Breadcrumb'
import GoogleMaps from '../partials/GoogleMaps'
import Header from '../partials/Header'

const Contacts = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <GoogleMaps />
      <ContactForm />
    </>
  )
}

export default Contacts
import React from 'react'

import Navbar from './Navbar'
import Sidepanel from './Sidepanel'
import QuestionPanel from './QuestionPanel'
import Footer from '../termsandPrivacy/Footer'
import Promotion from './Promotion'

function Faqs() {
  return (
    <div>
      <div className="flex flex-col gap-11">
        <Navbar />
      </div>
      <div className="ml-[43px] mt-[24px] flex gap-6">
        <Sidepanel />
        <QuestionPanel />
        <Promotion />
      </div>
      <Footer />
    </div>
  )
}

export default Faqs

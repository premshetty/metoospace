import React from 'react'
import CardContainer from './CardContainer'
import Filter from './Filter'
import Navbar from './Navbar'
import Search from './Search'

function Lists() {
  return (
    <div>
      <div className="flex flex-col gap-11">
        <Navbar />
        <Search />
      </div>
      <div className="ml-[43px] flex gap-6">
        <Filter />
        <CardContainer />
      </div>
    </div>
  )
}

export default Lists

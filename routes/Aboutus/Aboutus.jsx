"use client"
import React from 'react'
import Table, { Accordian, NitList } from 'my-first-lib-nareshtit'

export const Aboutus = () => {
  const data = [
    {
        title: 'About ',
        body: "VM Travels , established in 2003, has grown into a reputable name in the transportation industry. With a robust fleet of 500 buses, we are committed to providing reliable and comfortable travel experiences to our customers. Over the years, our dedication to quality service and customer satisfaction has positioned us as a trusted choice for travelers"
    },
    {
        title: 'Founder',
        body: "VM Travels, established in 2003 by MALOTHU VINAY, has grown into a reputable name in the transportation industry. Born on June 29, 2001, Maloth Vinay has led the company with vision and dedication. With a robust fleet of 500 buses, VM Travels is committed to providing reliable and comfortable travel experiences to its customers"
    },
    {
        title: 'Guidelines',
        body: "Michael Gerard Tyson (born June 30, 1966) is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike[4] and Kid Dynamite in his early career, and later known as The Baddest Man on the Planet,[5] Tyson is regarded as one of the greatest heavyweight boxers of all time."
    }
]
  return (
    <div>
      <h3>BARANCHES</h3>
      <Table
                ths={['State'   , 'Location']}
                tds={['State'   , 'location']}
                data={[{'State': 'Telangana>>',    'location': "Hyderabad" }, { 'State': 'Karnataka>>',   'location': "Bangalore" }]}
            />
            <Accordian data={data} />
           
    </div>
  )
}

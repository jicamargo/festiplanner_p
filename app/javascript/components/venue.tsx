import * as React from "react"
import VenueBody from './venue_body'
import VenueHeader from './venue_header'
import Subtotal from './subtotal'

export const Venue = (): React.ReactElement => {
  return (
    <>
      <Subtotal />
      <VenueHeader />
      <VenueBody />
    </>
  )
}

export default Venue

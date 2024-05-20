import * as React from "react"
import VenueBody from './venue_body'
import VenueHeader from './venue_header'
import Subtotal from './subtotal'
import PacmanLoader from "react-spinners/PacmanLoader";
import { useAppSelector } from "../contexts/venue_context";

export const Venue = (): React.ReactElement => {
  const loading = useAppSelector((state) => state.loading)

  return (
    <>
      {loading ? (
        <div className="h-24 flex flex-col justify-center items-center font-bold text-slate-400">
          Loading seat map
          <PacmanLoader
            color= "rgb(148 163 184)"
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </div>
      ) : (
        <>
          <Subtotal />
          <VenueHeader />
          <VenueBody />
        </>
      )}
    </>
  )
}

export default Venue

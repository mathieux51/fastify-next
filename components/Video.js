import React, { Fragment } from "react"
import Plyr from "react-plyr"
import "plyr/dist/plyr.css"

export default ({ type, videoId, className }) => (
  <Plyr type={type} videoId={videoId} className={className} />
)

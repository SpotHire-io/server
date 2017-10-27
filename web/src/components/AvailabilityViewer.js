import React from 'react'
import PropTypes from 'prop-types'
import 'moment/locale/en-ca'
import moment from 'moment'
import { css } from 'emotion'
import Box from './Box'

const ph0 = css`
  padding-left: 0;
  padding-right: 0;
`

const list = css`
  list-style-type: none;
`
const ma0 = css`
  margin: 0;
`
const pa0 = css`
  padding: 0;
`
const nt2 = css`
  margin-top: -0.5rem;
`
const pv2 = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
const b = css`
  font-weight: bold;
`
const mt0 = css`
  margin-top: 0;
`
const mb2 = css`
  margin-bottom: 0.5rem;
`
const i = css`
  font-style: italic;
`

const listStyle = css`
  ${list};
  ${ma0};
  ${pa0};
  ${nt2};
`

const listElementStyle = css`
  ${ma0};
  ${ph0};
  ${pv2};
`
const paragraphStyle = css`
  ${b};
  ${mt0};
  ${mb2};
`

const innerListStyle = css`
  ${list};
  ${pa0};
`

const endingParagraphStyle = css`
  ${i};
  ${mt0};
`

const bgWhite = css`
  background-color: #fff;
`
const ba = css`
  border-style: solid;
  border-width: 1px;
`
const bBlack20 = css`
  border-color: rgba(0, 0, 0, 0.2);
`
const shShadow2 = css`
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.2);
`
const w50 = css`
  width: 50%;
`
const mr3 = css`
  margin-right: 1rem;
`
const pa3 = css`
  padding: 1rem;
`
const maxH5 = css`
  max-height: 16rem;
`
const overflowAuto = css`
  overflow: auto;
`

const shadowedBox = css`
  ${bgWhite};
  ${ba};
  ${bBlack20};
  ${shShadow2};
  ${w50};
  ${mr3};
  ${pa3};
  ${maxH5};
  ${overflowAuto};
`

/**
 * Display an employee’s availability for each day of the week.
 *
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
 */

const AvailabilityViewer = ({ className, availability }) => (
  <Box className={shadowedBox}>
    <div className={className}>
      <ol className={listStyle}>
        {Object.keys(availability).map((day, index) => {
          return (
            <li key={day} className={listElementStyle}>
              <p className={paragraphStyle}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </p>
              {availability[day].length ? (
                <ol className={innerListStyle}>
                  {availability[day].map((timeSlot, timeSlotIndex) => (
                    <li key={timeSlot.id} className={pa0}>
                      {moment(timeSlot.start).format('h:mm a')} to{' '}
                      {moment(timeSlot.end).format('h:mm a')}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className={endingParagraphStyle}>No availability set.</p>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  </Box>
)

AvailabilityViewer.propTypes = {
  className: PropTypes.string,
  availability: PropTypes.object,
}

export default AvailabilityViewer

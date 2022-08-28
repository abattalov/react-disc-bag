import React from 'react'

function DiscForm() {
  return (
    <div>
        <h2>Add a disc</h2>
        <form>
          <input
            type="text"
            name="discName"
            required='required'
            placeholder='Disc Name'
          />
          <input
            type="text"
            name="brand"
            required='required'
            placeholder='Disc Brand'
          />
          <input
            type="integer"
            name="speed"
            required='required'
            placeholder='Disc Speed'
          />
          <input
            type="integer"
            name="glide"
            required='required'
            placeholder='Disc Glide'
          />
          <input
            type="integer"
            name="Turn"
            required='required'
            placeholder='Disc Turn'
          />
          <input
            type="integer"
            name="fade"
            required='required'
            placeholder='Disc Fade'
          />
          <input
            type="text"
            name="plastic"
            required='required'
            placeholder='Disc Plastic'
          />
          <input
            type="integer"
            name="weight"
            required='required'
            placeholder='Disc Weight'
          />
        </form>
    </div>
  )
}

export default DiscForm
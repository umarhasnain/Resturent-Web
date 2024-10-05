import React from 'react'

const Modal = ({openModal, setOpenModal}) => {
  return (
    <div className=''>
      {
        openModal && (
          <div flex justify-center items-center bg-red-200>
            <h2>Hello Modal</h2>
            <button onClick={() => setOpenModal(false)}>Close</button>
          </div>
        )
      }
    </div>
  )
}

export default Modal

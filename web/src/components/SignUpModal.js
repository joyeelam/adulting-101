import React, {useState} from 'react'
import {Button, Modal, ModalBody} from 'reactstrap'

import SignUpForm from '../containers/SignUpForm'

const SignUpModal = ({setCurrentUser}) => {

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button outline color='secondary' onClick={toggle}>Sign Up</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <SignUpForm toggle={toggle} setCurrentUser={setCurrentUser}/>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default SignUpModal

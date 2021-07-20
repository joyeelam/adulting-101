import React, {useState} from 'react'
import {Button, Modal, ModalBody} from 'reactstrap'

import LoginForm from '../containers/LoginForm'

const LoginModal = ({setCurrentUser}) => {

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button outline color='secondary' onClick={toggle}>Sign In</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <LoginForm setCurrentUser={setCurrentUser} toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default LoginModal

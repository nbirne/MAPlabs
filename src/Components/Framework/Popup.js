import React from 'react'
import ModalX from './ModalX'
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap'
import ShowMoreLess from '../Utils/ShowMoreLess'
import '../../CSS/Section.css'
import { sectionCompletedAC } from '../../store/user/actions'

/* **************************************************
   Popup component

   Shows / hides a complex interactive component.

   props:
     user -- user object
     moduleNum -- integer
     sectionNum -- integer
     sectionTitle -- title of the section for resdisplay if we do a modal below this
     exercise -- component user will interact with
***************************************************** */
export default class Popup extends React.Component {

  state = {
    isVisible: false,
  }

  // **************************************************
  // Show the complex interactive component
  onclickStart = () => {
    console.log( "Popup::onclickStart()" )
    this.setState( { isVisible: true } )
  }

  // **************************************************
  // CB from the <exercise> when its close/save button is clicked
  onCloseModal = () => {
    console.log( "Popup::onCloseModal()" )

    const { dispatch, user, moduleNum, sectionNum } = this.props
    dispatch( sectionCompletedAC( user, moduleNum, sectionNum ) )

    this.setState( { isVisible: false } )
  }

  // **************************************************
  // CB from <Modal>
  onModalClosing = () => {
    console.log( "Popup::onModalClosing()" )
    // this.setState( { isVisible: false } )
  }
  // **************************************************
  // CB from <Modal>
  onModalOpening = () => {
    console.log( "Popup::onModalOpening()" )
  }

  // **************************************************
  // render!
  render() {
    console.log( "Popup::render()" )

    let { isVisible } = this.state
    let { sectionTitle, exercise } = this.props

    // Link the <exersise> to this instance of the Popup Component.
    //   Allows excercise to tell us that it's done and we should hide the modal
    const exerciseWithOnCloseCB = React.cloneElement(
      exercise,
      { onCloseModalCB: this.onCloseModal,
        isDynamic: true }
    )

    // get the exercise's descrition
    const { description } = exercise.props

    return (
      <>
        {!isVisible && (
          <>
            <ShowMoreLess lines={ 3 } >
              <span dangerouslySetInnerHTML={ { __html: description } } />
            </ShowMoreLess>
            <p>.</p>
            <p>xx seperator between description and the static exercise xxxx</p>
            <p>.</p>
            {exercise}
            <Button className="startButton" type="button" onClick={this.onclickStart}>Start</Button>
          </>
        )}

        <ModalX
          sectionTitle={sectionTitle}
          exercise={exerciseWithOnCloseCB}
          isVisible={this.state.isVisible}
          onModalOpeningCB={this.onModalOpening}
          onModalClosingCB={this.onModalClosing}
        />
      </>
    )
  }
}

// return (
//   <>
//     <h6><i>..Popup controller manages starting a section..</i></h6>
//     {!isVisible && (
//       <Button type = "button" onClick = {this.onclickStart}>Start</Button>
//     )}
//     {isVisible && (
//       <>
//       <ModalX
//         sectionTitle = {sectionTitle}
//         exercise = {exerciseWithOnCloseCB}
//         isVisible = {this.state.isVisible}
//         onModalOpeningCB = {this.onModalOpening}
//         onModalClosingCB = {this.onModalClosing}
//       />
//       </>
//     )}
//   </>
// )


// WORKING CODE pre-modal
// May need to pass a prop to Popup to decide if the exercise should be wrapped
//   in a Modal or appear flat.

// return (
//   <>
//     <h6><i>..Popup controller manages starting a section..</i></h6>
//     {!isVisible && (
//       <Button type = "button" onClick = {this.onclickStart}>Start</Button>
//     )}
//     {isVisible && (
//       <>
//       {exerciseWithOnCloseCB}
//       </>
//     )}
//   </>
// )

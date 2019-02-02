import { connect } from 'react-redux'
import Module from './Module'
import { isLoading } from '../../store/ui/reducer'

/* *****************************************
   mapStateToProps()

   passedProps:
     moduleNum -- integer, the module number
     moduleTitle -- title of the Module
     moduleDescription -- could be many lines, is we need paragraphs then will need to set innerHTML
     children -- the Section components to display
******************************************** */
const mapStateToProps = ( state, passedProps ) => {
  console.log( "ModuleCT::mapStateToProps()" )

  const { moduleNum, moduleTitle, moduleDescription, children } = passedProps

  const isLoading = state.uiRD.isLoading()

  return {
    isLoading,
    moduleNum,
    moduleTitle,
    moduleDescription,
    children,
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* *****************************************
   mapDispatchToProps()

   passedProps -- see mapStateToProps above
******************************************** */
const mapDispatchToProps = ( dispatch, passedProps ) => {

  return {
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Module )

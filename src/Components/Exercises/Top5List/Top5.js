import React, { useState} from 'react'
import PropTypes from 'prop-types'
import { Form, FormControl } from 'react-bootstrap'
import { SELECTED } from '../../../constants'

/* **************************************************
   Top5 Checkbox component

   Displays a single selection
     -- checkbox to select the top 5
     -- field attributes of the data

   props:
     id -- integer id for the question (poorman's UUID)
     data -- { selected:'selected'/'', label:'this is a label' }
     fields -- [field1, feild2] field attributes to display
     isDynamic -- not defined or true
     updateCB -- call for all changes
***************************************************** */
export default function Top5(props) {
  const { id, updateCB, data, isDynamic, fields } = props

  const [formData, setData] = useState(data);

  const onCheck = (e) => {
    const newData = {
      ...props.data,
      selected: (e.target.checked ? SELECTED : '')
    }

    setData(newData)
    updateCB(id, formData)
  }

  const onChange = (e, attribute) => {
    let value = e.target.value
    console.log('onChanging', attribute, value)
    const newData = {
      ...formData,
      [attribute]: value,
    }

    setData(newData)
    console.log("formData after setting", formData)
    updateCB(id, formData)
  }

  const fieldsToCells = () => (
    <>
      { fields.map((field, idx) => 
        <td className="text-left" key={idx}>
          {isDynamic ?
            <Form inline>
              <FormControl 
                onChange={(e) => onChange(e, field)}
                type="text" 
                value={formData[field]}
              />
            </Form>
            : <>{formData[field]}</> }
        </td>)
      }
    </>
  )

  // static
  if ( !isDynamic ) {
    return (
      <>
        <tr>
          { fieldsToCells() }
        </tr>
      </>
    )
  }

  // dynamic render
  return (
    <>
      <tr>
        <td className="text-left" key="-1">
          <Form inline>
            <input 
              onChange={onCheck}
              type="checkbox" 
              checked={!!formData.selected}
            />
          </Form>
        </td>
        { fieldsToCells() }
      </tr>
    </>
  )
}


Top5.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  isDynamic: PropTypes.bool,
  updateCB: PropTypes.func,
}

import { useState, useEffect } from "react"

const useValidations = ({ schema, initValues, handler }) => {

  const [fields, setFields] = useState({...initValues})

  let validations = {...schema}
  Object.keys(validations).forEach(function(key) {
    validations[key] = {
      ...validations[key],
      invalid: false
    }
  });
  const [errors, setErrors] = useState({...validations})

  useEffect(() => {

    setFields(initValues)
    if (initValues.id>0) {
      validate(initValues).then(res => {
        //
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[initValues])

  const validate = (form, field = null) => {

    return new Promise((resolve, reject) => {

      const updateValidations = {...errors}

      if (field!==null) { // validate single field only
          updateValidations[field].invalid = (updateValidations[field].required) ? form[field] === "" : false
          resolve('field')
      } else {
          let valids = []
          Object.keys(updateValidations).forEach(function(key) {
              const isValid = (updateValidations[key].required) ? form[key] !== "" : true
              valids.push(isValid)
              updateValidations[key].invalid = !isValid
          });
          const allIsValid = valids.every(valid => valid)
          if (allIsValid) resolve('all')
          else reject('invalid')
      }
   
      setErrors(updateValidations)

    })

  }  

  const resetValidations = () => {

    const updateValidations = {...validations}

    Object.keys(updateValidations).forEach(function(key) {
        updateValidations[key].invalid = false
    });

    setErrors(updateValidations)

  }

  const handleField = (e) => {

    const fieldsCopy = {...fields}
    fieldsCopy[e.target.name] = e.target.value
    validate(fieldsCopy, e.target.name).then(res => {
      //
    })
    setFields(fieldsCopy)

  }

  const submitForm = () => {

    validate(fields).then(res => {
      if (res==="all") handler(fields)
    }).catch(res => {
      //
    })

  } 

  return {
    handleField,
    values: {...fields},
    errors: {...errors},
    submitForm,
    resetValidations
  }

}

export default useValidations
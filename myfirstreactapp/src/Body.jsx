import React from 'react';

function Body(){
  return (
    <form>
        <fieldset> 
            <legend>
                <label for='fileUpload'>Please select your file</label><br/>
            </legend> 
            <input type='file' id='fileUpload' name='fileUpload'></input><br/>
            <input type='submit' name='Submit'></input>
        </fieldset>
    </form>
  )
}

export default Body;
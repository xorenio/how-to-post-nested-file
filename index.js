

// SCRIPT SETUP
//
//
const formData = require('form-data');
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
//.default;
//
//
// SCRIPT SETUP




// SCRIPT DATA
//
//
const data = [
     {
        section_id: 1, // info
        data: [
            {
              link: "https://drive.google.com/drive/folders/147rCPIaqVCZDl78djuYI3yyP3-",
              //file: FILE BLOB (optional)
              note: "Cad files for the room layout",
              approved: true,
            },
            {
              link: "https://drive.google.com/drive/folders/147rCPIaqVCZDl78djuYI3yyP3-",
              note: "Please send some samples for all the materials that need to be used.",
              //file: FILE BLOB (optional)
              approved: false,
            }
        ]
      },
      {
        section_id: 2, //data
        data: [
            {
              link: "https://drive.google.com/drive/folders/147rCPIaqVCZDl78djuYI3yyP3-",
              //file: FILE BLOB (optional)
              note: "Spreadsheet link1",
              approved: true,
            },
          ],
      },
      {
        section_id: 3, //design
        data: [
            {
              link: "/Bv1/",
              version: "v2",
              note: "V2 room layout",
              approved: true,
            },
            {
              link: "/Av1/",
              version: "V1",
              note: "V1 room layout",
              approved: true,
            }
          ],
      }
];
//
//
//SCRIPT DATA




// SCRIPT FUNCTION
//
// OR USE THIS https://www.npmjs.com/package/object-to-formdata
function obj2FormData(obj, formData = new FormData()){

    this.formData = formData;

    this.createFormData = function(obj, subKeyStr = ''){
        for(let i in obj){
            let value          = obj[i];
            let subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

            if(typeof(value) === 'string' || typeof(value) === 'number'){

                this.formData.append(subKeyStrTrans, value);

            } else if(typeof(value) === 'object'){

                this.createFormData(value, subKeyStrTrans);

            }
        }
    }

    this.createFormData(obj);

    return this.formData;
}
//
//
// SCRIPT FUNCTION


// SCRIPT RUNTIME
//
//

let form = obj2FormData({
    configutaor_id : 21,
    workflow : data
});
console.log("==========================")
console.log("   FORM DATA - NO FILE")
console.log("==========================")
console.log("form", form)


// APPEND FILE
//
//
form.append('workflow[0][data][0][file]', fs.createReadStream('./IMAGE/JOHNS_AVATAR.jpg'))
//
//
// APPEND FILE



console.log("==========================")
console.log("   FORM DATA - WITH FILE")
console.log("==========================")
console.log(form)

console.log("==========================")
console.log(" XHR ERROR - NO BAKCEND ")
console.log("==========================")

axios({
 'METHOD': "PATCH",
 "url": "/home",
 "data": form,
 "headers": {
  "Content-Type": "multipar/data-form"
 },
})
//
//
// SCRIPT RUNTIME

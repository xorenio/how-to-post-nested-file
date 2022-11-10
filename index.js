
const formData = require('form-data');
const fs = require('fs');
const axios = require('axios');
//.default;

var form = formData();

form.append('configutaor_id', 21)

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


form.append('workflow[]', data)

console.log(form)

axios({
 'METHOD': "PATCH",
 "url": "/home",
 "data": form,
 "headers": {
  "Content-Type": "multipar/data-form"
 },
})

import * as React from "react";
import { saveAs } from 'file-saver';
import {Buffer} from 'buffer'
import { ReactSketchCanvas } from "react-sketch-canvas";
import axios from 'axios'
const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
};
const Docs = class extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  render() {
    return (
      <div>
        <ReactSketchCanvas
          width='400px'
          height='400px'
          ref={this.canvas}
          strokeWidth={5}
          strokeColor="black"
        />
        <button
          onClick={() => {
            this.canvas.current
              .exportImage("png")
              .then(data => {
                // Extract the base64 data from the data URL
                const content = data.replace(/^data:image\/png;base64,/, "");
                const buffer = Buffer.from(content, "base64")
                const file = new Blob([buffer], { type: 'image/png' });

                // Save the Blob object as a file with a custom name
                saveAs(file, "my-file.png");
                axios.post('http://127.0.0.1:8080', "/Users/jenil/Downloads/my-file.png")
                .then(res =>{
                  console.log(res.data)
                  axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${res.data}/property/title/TXT`)
                  .then(res =>{
                    console.log(res.data)
                  })
                  .catch(e=>{
                    console.log(e)
                  })
                })
                .catch(e=>{
                  console.log(e)
                })
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Save Image
        </button>
      </div>
    );
  }
};

export default Docs
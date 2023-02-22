import React from 'react'
import {useState} from 'react'  // use of hooks
let text_clone,txt;
const TextForm = (props) => {
    const [text,setText]=useState('Enter text here...');
    // const handlearticleremove=()=>{
    //   text.replace(regExp, newValue)
    // }
   const  handlefinder=(event)=>{
    alert('inside the finder block ');
    console.log(event.target.value);
    console.log(text);
    let copys = text;
let  regex = /le/gi, result, indices = [];
while ( (result = regex.exec(copys)) ) {
    indices.push(result.index);
}
console.log(indices);//[7,8]
for(let i=0;i<indices.length;i++){
 // document.getElementById('target').style.color = 'tomato';

  copys[indices[i]].style.color='tomato';
}
  
   }
   const finder=(event)=>{
    console.log('in finder');
    var store_word=event.target.value;
    if( text.includes(store_word)){
   // if(store_word in text){
    var indx_text= text.indexOf(store_word);
    console.log(indx_text);
    alert(indx_text);

      console.log('good(((())))');
    }


   }
  const  handlePaste=(event)=>{
    navigator.clipboard
    .readText()
    .then(
        cliptext =>
            (document.getElementById('clipboard-paste').innerText = cliptext),
            err => console.log(err)
    );

  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}
  
  const handleremoveextrasymbol=()=>{
   const copy1=text.slice()
    const noSpecialChars =copy1.replace(/[^a-zA-Z0-9 ]/g, '');
   
    setText( noSpecialChars);


  }
  const handleFormat=()=>{
    let ele_val=document.getElementById('myBox').innerHTML;
    setText(ele_val);
    
   
    
   

  }
  const handleswapCase=()=>
  {
    var ans = text.split('').map(function(c){
      return c === c.toUpperCase()
      ? c.toLowerCase()
      : c.toUpperCase()
    }).join('')
    setText(ans)
    
  }
  const handleremovearticle=()=>{
    const copy = text.slice();
    const regex = /(?:(the|a|an) +)/g; 
    const result = copy.replace(regex, ' ');
    setText(result)



  }
    const handlecleartext=()=>{
      alert("clear text now");
      let newt="";
      setText(newt);
    }
    const handlelowercase=()=>{
      alert("on click ");
      let newt=text.toLowerCase();
      setText(newt)


     // setText("clicked the button; editor is enabled TYPE...... ");
      return newt;

 }
    const handleClickUp=()=>{
         alert("on click ");
         let newt=text.toUpperCase();
         setText(newt)


        // setText("clicked the button; editor is enabled TYPE...... ");
         return newt;

    }
    const handleOnChange=(event)=>{
        //alert("on click ");
        // on writing on editor the value is appended
        setText(event.target.value);
   }
   // setText("fcghgh");   the value entered is gone to text(text states default val is set)  variable n settext() is executed on text updation or state change
  return (
    <>
        <div className="row">
 
    <h3>{props.heading}</h3>
    <p>{text}</p>
    
 
  
  <div>
    <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" row="9"></textarea>
    <button className='btn btn-primary' onClick={handleClickUp}>convert_upper</button>
    <button className='btn btn-success' onClick={handlelowercase}>convert_lower</button>
    <button className='btn btn-dark' onClick={handleswapCase}>convert_presentcase</button>
    <button className='btn btn-primary' onClick={handlecleartext}>clear_all</button>
    <button className='btn btn-primary' onClick={handleremovearticle}>remove_articles</button>
    <button className='btn btn-success' onClick={handleremoveextrasymbol}>remove_specialsym</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className='finder_btn' >finder_wrd</button>
    
    <button onClick={handleCopy}>Copy Text</button>
    <button onClick={handlePaste}>paste text</button> 
    <button onClick={ handleswapCase}>Swap Case</button>
    <button onClick={handleFormat}>Format Font</button>
<p id="clipboard-paste"></p>
    {/* <button className='btn btn-success' onClick={handlelowercase}>tolowercase</button>
    <button className='btn btn-primary' onClick={handlecleartext}>clear_all</button>
    <button className='btn btn-success' onClick={noVowels }>articles_remove</button>
 
  */}
    
  </div>
</div>
     <div className='container'>
        <p>Your Text Summary</p>
    <h3>@Characters:</h3>   <h1>{text.length}</h1>
    <h4>@words</h4>:<h1>{text.split(" ").length}</h1>
    <h4>@Read Time</h4>:<h1>{text.split(" ").length*0.008}</h1>
        </div> 
        <textarea type="text" value={props.newVal} onChange={finder} ></textarea>
    </>
  )
}

export default TextForm
 //heading //darkmode  //search color text to that color 
// //findnreplace //find and delete word 
//copy text;cut;paste
//alert timer
//setinterval  ;;; (timeup )if editor is eempty ... if(wordsize>100) words uplimit stop
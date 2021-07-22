export const cidrToMaskFunction = (value) => {
  //console.log(value);
  
  if(value== '0' || value=='' || /[a-zA-Z]/.test(value) || parseInt(value>32))
    return 'Invalid';

  let bits='';
  for (let i=0 ; i<32; i++){
    if(i<value){
      bits+='1';
    } else{
      bits+='0';
    }
  }
  let array= bits.match(/.{1,8}(.$)?/g);
  //console.log(array);

  return parseInt(array[0],2).toString() +'.'+ parseInt(array[1],2).toString() +'.'+ parseInt(array[2],2).toString()+ '.' + parseInt(array[3],2).toString() ;
}

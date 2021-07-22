function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

export const maskToCidrFunction = (value) => {
  
  if (!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)) 
    return 'Invalid';
  

  let nibs = value.split('.');
  let bits='';

  for (let n=0; n<4; n++){
    bits += dec2bin(parseInt(nibs[n]));
  }

  return bits.match(/1/g).length.toString();

}

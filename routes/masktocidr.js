import { maskToCidrFunction } from '../services/masktocidr';


export const maskToCidr = (req, res, next) => {
  let value = req.query.value ? req.query.value : false;
  if (!value) {
    res.send(422, 'Invalid' )
  } else {
    let response = {
      "function": "maskToCidr",
      "input" : value,
      "output": maskToCidrFunction(value)
    };
    res.send(response);
    next();
  }

}

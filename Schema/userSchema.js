import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().alphanum().required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }).required(),
});


export default userSchema

//after preparing the Schema for anything, we go to controller where we right the logic
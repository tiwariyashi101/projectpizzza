 import * as Yup from 'yup';
 import YupPassword from 'yup-password'
YupPassword(Yup) 


 let loginSchema=Yup.object({
  email: Yup.string().email('email required').required("email can not be empty").trim(),
  password:Yup.string().password().required()
})




let signSchema=Yup.object({
  Name:Yup.string().required().trim(),
  email: Yup.string().email('email required').required("email can not be empty").trim(),
  password:Yup.string().password().required(),



})


export {loginSchema,signSchema}
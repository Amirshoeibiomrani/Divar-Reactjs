import { checkOtp } from '@/app/services/auth'
import { setCookie } from '@/app/utils/cookie'
 

const CheckOtpForm = ({setCode, code, setStep,mobile}) => {

  const submitHandler=(event)=>{
    event.preventDefault()
    console.log({code,mobile})

    if(code.length !==5) return
    const {response,error}=await checkOtp(mobile, code)

    if(response){
      // console.log(response)
      setCookie(response.data)
      
    }
if(error)console.log(error.response.data.message)
  }

  return (
    
    <form onSubmit={submitHandler}>

      <p>تایید کد اس ام اس شده </p>
      <span>کد پیامک شده به شماره  {mobile}  وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" id='input' placeholder='کد تایید' value={code} onChange={(e)=>setCode(e.target.value)} />
      <button type='submit'>ورود</button>
      <button onClick={()=> setStep(1)}>تغییر شماره موبایل</button>

    </form>
  )
}

export default CheckOtpForm
interface IProps{
msg:string

}

const ErrorMsg =({msg}:IProps)=>{
return msg? <span className="block text-sm font-sans text-red-700">{msg}</span>:null ;

}

export default ErrorMsg ;
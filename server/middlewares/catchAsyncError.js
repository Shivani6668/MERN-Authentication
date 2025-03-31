export const catchAsuncError = (thefunction)=>{
    return (req,res,next)=>{
        Promise.resolve(thefunction(req,res,next)).catch(next)
    }
}
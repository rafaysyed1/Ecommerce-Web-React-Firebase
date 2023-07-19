import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from  './Button.styles.jsx'
export const buttonTypeClasses = {
    base : 'base',
    google : 'google-sign-in',
    inverted : 'inverted'
}
const getButton =(buttonType = buttonTypeClasses.base)=>(
    {
        [buttonTypeClasses.base]:BaseButton,
        [buttonTypeClasses.google]:GoogleSignInButton,
        [buttonTypeClasses.inverted]:InvertedButton,
    }
    [buttonType]
)
const Button =({children,buttonType,...otherprops})=>{
    const CustomButton = getButton(buttonType)
return (

    <CustomButton {...otherprops}>
    {children}
    </CustomButton>
)
}
export default Button

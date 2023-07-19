import { Group, Input, InputFormLabel } from './input-form.styles.jsx'
const InputForm = ({label, ...otherprops})=>{
return (
    <Group>
           <Input
        {...otherprops}
         />
        {label && (
            <InputFormLabel
            shrink = {otherprops.value.length}>{label}</InputFormLabel>
        )}
        
     
    </Group>
)
}
export default InputForm
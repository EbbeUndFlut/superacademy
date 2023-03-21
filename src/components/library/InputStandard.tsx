import { MutableRefObject, RefObject } from "react"

interface IInputStandard {
    type: string
    reference: MutableRefObject<HTMLInputElement> | any
}
const InputStandard = (props: IInputStandard) => {
    return (
        <input className="border-b outline-none" type={props.type} ref={props.reference} />
    )
}

export default InputStandard
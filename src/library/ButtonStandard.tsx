interface ButtonStandard {
    label: string
    onclick?(): any
}

const ButtonStandard = (props: ButtonStandard) => {
    return <button>{props.label}</button>
}

export default ButtonStandard
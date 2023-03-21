interface IButtonStandard {
    label: string
    onclick?(): any
}

const ButtonStandard = (props: IButtonStandard) => {
    return <button>{props.label}</button>
}

export default ButtonStandard
const Input = ({ placeholder, type, name, value, id, className, onChange }) => {
    return (
        <input
            placeholder={placeholder ? placeholder : 'Input'}
            type={type ? type : 'text'}
            name={name ? name : ''}
            id={id ? id : ''}
            onChange={onChange}
            className={ className ? className : 'mb-3 w-full h-12 rounded-3xl border-2 border-gray-300 p-4 focus:outline-none focus:border-red-600'}
        />
    )
}

export default Input;
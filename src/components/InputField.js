const InputField = ({className, type, label, name, value, onChange}) => {

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-400"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="h-6 mt-1 text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-500 border-gray-600 rounded-md"
        />
    </div>
  )

}

export default InputField
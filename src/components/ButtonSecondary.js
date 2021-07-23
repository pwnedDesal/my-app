const ButtonSecondary = ({className, onClick, children}) => {

  let classes = "w-14 h-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-300 bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  if (className) classes += ` ${className}`

  return (
    <>
      <button
        type="button"
        className={classes}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )

}

export default ButtonSecondary
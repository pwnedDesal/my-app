const ButtonOutlined = ({className, onClick, children}) => {

  let classes = "text-xs bg-transparent hover:bg-yellow-800 text-yellow-400 font-semibold hover:text-white py-1 px-2 border border-yellow-500 hover:border-transparent rounded"
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

export default ButtonOutlined
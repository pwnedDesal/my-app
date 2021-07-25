import ButtonSecondary from '../components/ButtonSecondary'

const Filters = ({ setFilter, search, setSearch }) => {

  const inputClasses = "h-8 mt-1 ml-2 text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 w-1/4 shadow-sm sm:text-sm bg-gray-500 border-gray-600 rounded-md placeholder-gray-300" 

  return (
    <div className="mt-6">
      <ButtonSecondary className="mr-2" onClick={() => setFilter('All')}>All</ButtonSecondary>
      <ButtonSecondary className="mr-2" onClick={() => setFilter('Food')}>Food</ButtonSecondary>
      <ButtonSecondary onClick={() => setFilter('Drink')}>Drink</ButtonSecondary>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        className={inputClasses}
        placeholder="Search name"
        />   
    </div>    
  )

}

export default Filters
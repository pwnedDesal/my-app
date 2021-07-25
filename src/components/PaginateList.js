import Pagination from './Pagination'

const PaginateList = ({page, setPage, perPage, data}) => {

  let start = page * perPage
  let end = start + perPage
  const paginatedDisplay = data.slice(start,end)
  let totalPages = Math.ceil(data.length / perPage)
  if (data.length<perPage) totalPages = 1  

  return (
    <div>
      <div className="grid grid-cols-3 gap-0 place-items-center">
          {paginatedDisplay}
      </div>
      {data.length>perPage && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
    </div>
  )

}

export default PaginateList
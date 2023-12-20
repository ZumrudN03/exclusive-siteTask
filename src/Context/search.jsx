import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

function SearchProvider({children}) {
    const [search, setSearch] = useState("")

    function heandleSearch(e) {
        setSearch(e.target.value)
    }
  return (
    <SearchContext.Provider value={{search,heandleSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
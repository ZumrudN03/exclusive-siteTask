import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

function SearchProvider({children}) {
    const [search, setSearch] = useState("")
    const [showDiv, setShowDiv] = useState(false);

    function heandleSearch(e) {
        setSearch(e.target.value)
        setShowDiv(e.target.value !== "")
    }
  return (
    <SearchContext.Provider value={{search,heandleSearch,showDiv}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
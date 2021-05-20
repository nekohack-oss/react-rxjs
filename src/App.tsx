import React, { useState } from 'react'
import { useSearch } from './hooks/searchComposable'

import SearchInput from './components/SearchInput'
import SearchResult from './components/SearchResult'

const App = () => {
    const [word, setWord] = useState('')
    const result = useSearch(word)
    return (
        <main>
            <h1>{word ? `Word: ${word}` : 'Word'}</h1>
            <h2>Search</h2>
            <SearchInput word={word} changeInput={setWord} />
            <h2>Result</h2>
            <SearchResult result={result} />
        </main>
    )
}

export default App

import React, { FC } from 'react'

type ResultProps = {
    result: Array<Object>
}

const SearchResult: FC<ResultProps> = ({ result }) => (
    <ul>
        {result.map((r, i) => (
            <li key={i}>{r}</li>
        ))}
    </ul>
)

export default SearchResult

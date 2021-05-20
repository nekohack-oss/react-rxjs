import React, { FC } from 'react'
import { NekoInput } from 'nekohack-ui'

type SearchProps = {
    word: string
    changeInput: any
}

const SearchInput: FC<SearchProps> = ({ word, changeInput }) => (
    <NekoInput value={word} onChange={(val: string) => changeInput(val)} />
)

export default SearchInput

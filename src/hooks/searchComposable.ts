import { useObservable } from 'rxjs-hooks'
import {
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
} from 'rxjs/operators'

import { searchApi } from '../services/searchApi'

export const useSearch = (word: string) =>
    useObservable(
        (word$) =>
            word$.pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap((word: string) => searchApi(word)),
                map((result) => (result !== undefined ? result : []))
            ),
        [],
        [word]
    )

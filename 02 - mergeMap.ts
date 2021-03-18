import { GithubUsersResp } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

import {  fromEvent, interval,  Observer, of } from "rxjs";
import {  map,mergeMap, take, takeUntil } from "rxjs/operators";



const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const letters$ = of('a','b','c')

letters$
.pipe(
    mergeMap(letter => interval(1000).pipe(
        map(i => letter + i),
        take(3)
        )
        )
)
//.subscribe(observer)

const mouseDown$ = fromEvent(document, 'mousedown')
const mouseUp$ = fromEvent(document, 'mouseup')
const interval$ = interval()

mouseDown$
.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(observer)

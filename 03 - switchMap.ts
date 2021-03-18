import { GithubUsersResp } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

import { fromEvent, Observable, Observer } from "rxjs";
import { debounceTime, pluck, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";


/** switchMap
 * Este operador cancela las subscripciones a los observables si es que un nuevo observable
 * es emitido por el observable padre
 */

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput,orderList)

//Helpers

const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = ''
    console.log('users ',users)

    for (const user of users) {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = user.avatar_url

        const anchor = document.createElement('a')
        anchor.href= user.html_url
        anchor.text= 'Go to page'
        anchor.target= '_blank'

        li.append(img)
        li.append(user.login + ' ')
        li.append(anchor)

        orderList.append(li)
    }
}

const input$ = fromEvent<KeyboardEvent>(document, 'keyup')

input$
.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    switchMap<string, Observable<GithubUsersResp>>(text =>  ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    pluck<GithubUsersResp,GithubUser[]>('items')
)
.subscribe(showUsers)

const url = 'https://httpbin.org/delay/1?arg='

/* En este ejemplo el operador va a cancelar la suscripcion a los valores que se vayan escribiendo en el input hasta que ya no se escriba mas*/
input$.pipe(
    pluck('target','value'),
    switchMap(text => ajax.getJSON(url+text))

)
.subscribe(console.log)
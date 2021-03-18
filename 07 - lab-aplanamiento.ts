import { fromEvent, Observer, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, concatMap, exhaustMap, map, mergeMap, pluck, switchMap, take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

inputEmail.type = 'email'
inputEmail.placeholder = 'email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPass, submitBtn)
document.querySelector('body').append(form)

// Helper

const requestHTTPLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    pluck('response','token'),
    catchError(err => of('error'))
)


// Streams
const submitForm$ = fromEvent(form, 'submit')
.pipe(
    tap(event => event.preventDefault()),
    map(({target}) => ({
        email: target[0].value,
        password: target[1].value
    })),
    //mergeMap(requestHTTPLogin),
    //switchMap(requestHTTPLogin),
    //concatMap(requestHTTPLogin),
    exhaustMap(requestHTTPLogin),
)

submitForm$.subscribe(observer)
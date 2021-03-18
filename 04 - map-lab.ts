
import { fromEvent, Observer } from "rxjs";
import { map,  tap } from "rxjs/operators";

/* Se crea un div con suficiente tamanio para hacer scroll */

const text = document.createElement('div')
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque ipsum nec ligula pellentesque imperdiet. Duis non arcu purus. Etiam consequat eros ut tellus euismod, vel varius arcu sodales. Cras erat ex, accumsan in aliquet porta, egestas non leo. Suspendisse potenti. Vivamus dictum est in placerat mattis. Integer viverra fringilla tellus, nec lacinia turpis convallis eu. Nunc dictum lorem in urna suscipit lobortis. Vestibulum consectetur bibendum enim, sed posuere purus malesuada a. Maecenas ultricies urna id libero condimentum, sed tincidunt est pulvinar. Nullam sit amet iaculis justo. Fusce id vestibulum quam. Cras at iaculis mauris. Etiam ac est orci. Aliquam ligula neque, posuere bibendum augue et, interdum suscipit nisi. Curabitur venenatis rhoncus vestibulum.
<br/><br/>
Fusce consequat velit sit amet lectus feugiat, sit amet lobortis ligula facilisis. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet eleifend dui, at iaculis leo. Ut gravida a elit semper euismod. Aliquam enim tellus, elementum quis urna ac, laoreet fringilla elit. Duis accumsan nibh vel pellentesque mollis. Nullam cursus tellus nec venenatis imperdiet. Suspendisse eu massa non felis consectetur sodales. Nulla ac volutpat arcu. Aliquam lorem justo, placerat id lobortis non, hendrerit lacinia velit. Phasellus luctus justo vitae hendrerit semper. Quisque ullamcorper placerat felis, vitae vulputate enim fringilla eu. Curabitur ut convallis ante. Donec iaculis, sapien ut dignissim semper, orci nisi tempor augue, a aliquet nunc mi eu sapien. In tincidunt, libero sed molestie ornare, enim odio dignissim nunc, in ultrices velit lacus quis dolor.
<br/><br/>
Donec sit amet nunc ullamcorper, porta ipsum sit amet, fringilla purus. Sed pellentesque vel magna in luctus. Nunc tincidunt eros ut volutpat rhoncus. Nunc venenatis interdum mi in aliquet. Vestibulum et libero a dui dapibus ullamcorper. Vestibulum vulputate justo nec laoreet vestibulum. Sed iaculis orci sit amet quam aliquet, ac eleifend ipsum porttitor. Duis a ultrices nibh, sed rutrum dolor. Sed scelerisque, purus a facilisis volutpat, quam velit euismod metus, et euismod enim diam sed justo. Mauris hendrerit, quam nec mollis malesuada, arcu tellus rhoncus elit, nec condimentum augue augue a tellus. Cras luctus interdum sem sit amet feugiat. Suspendisse sodales augue urna, et tincidunt odio vestibulum a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Curabitur at magna lacus. Suspendisse venenatis dapibus enim, quis sodales nibh pellentesque sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut posuere, magna vitae venenatis scelerisque, nisi mi efficitur arcu, et dapibus erat nulla et mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eget nisl ac arcu mollis bibendum. Vivamus risus ipsum, posuere id erat eu, venenatis tempor erat. In eu molestie tortor, sed venenatis ipsum. Duis viverra nunc ut libero laoreet rutrum.
<br/><br/>
Aliquam rhoncus nisi iaculis tincidunt feugiat. Maecenas urna erat, consectetur et leo ac, volutpat venenatis lectus. Aenean euismod libero vehicula, tincidunt purus non, volutpat magna. Vestibulum ultricies nisi non nunc consectetur semper. Praesent erat felis, imperdiet eget blandit semper, vestibulum et tellus. Praesent ut turpis eu sapien eleifend elementum. Integer condimentum sed dolor at aliquam. Quisque dictum ex metus, in pulvinar enim tempus et. In quis condimentum nisi, ut laoreet ante.
<br/><br/>
Fusce consequat velit sit amet lectus feugiat, sit amet lobortis ligula facilisis. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet eleifend dui, at iaculis leo. Ut gravida a elit semper euismod. Aliquam enim tellus, elementum quis urna ac, laoreet fringilla elit. Duis accumsan nibh vel pellentesque mollis. Nullam cursus tellus nec venenatis imperdiet. Suspendisse eu massa non felis consectetur sodales. Nulla ac volutpat arcu. Aliquam lorem justo, placerat id lobortis non, hendrerit lacinia velit. Phasellus luctus justo vitae hendrerit semper. Quisque ullamcorper placerat felis, vitae vulputate enim fringilla eu. Curabitur ut convallis ante. Donec iaculis, sapien ut dignissim semper, orci nisi tempor augue, a aliquet nunc mi eu sapien. In tincidunt, libero sed molestie ornare, enim odio dignissim nunc, in ultrices velit lacus quis dolor.
<br/><br/>
Donec sit amet nunc ullamcorper, porta ipsum sit amet, fringilla purus. Sed pellentesque vel magna in luctus. Nunc tincidunt eros ut volutpat rhoncus. Nunc venenatis interdum mi in aliquet. Vestibulum et libero a dui dapibus ullamcorper. Vestibulum vulputate justo nec laoreet vestibulum. Sed iaculis orci sit amet quam aliquet, ac eleifend ipsum porttitor. Duis a ultrices nibh, sed rutrum dolor. Sed scelerisque, purus a facilisis volutpat, quam velit euismod metus, et euismod enim diam sed justo. Mauris hendrerit, quam nec mollis malesuada, arcu tellus rhoncus elit, nec condimentum augue augue a tellus. Cras luctus interdum sem sit amet feugiat. Suspendisse sodales augue urna, et tincidunt odio vestibulum a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Curabitur at magna lacus. Suspendisse venenatis dapibus enim, quis sodales nibh pellentesque sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut posuere, magna vitae venenatis scelerisque, nisi mi efficitur arcu, et dapibus erat nulla et mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eget nisl ac arcu mollis bibendum. Vivamus risus ipsum, posuere id erat eu, venenatis tempor erat. In eu molestie tortor, sed venenatis ipsum. Duis viverra nunc ut libero laoreet rutrum.
<br/><br/>
Aliquam rhoncus nisi iaculis tincidunt feugiat. Maecenas urna erat, consectetur et leo ac, volutpat venenatis lectus. Aenean euismod libero vehicula, tincidunt purus non, volutpat magna. Vestibulum ultricies nisi non nunc consectetur semper. Praesent erat felis, imperdiet eget blandit semper, vestibulum et tellus. Praesent ut turpis eu sapien eleifend elementum. Integer condimentum sed dolor at aliquam. Quisque dictum ex metus, in pulvinar enim tempus et. In quis condimentum nisi, ut laoreet ante.
`
/* Se agrega el div al body del HTML */
const body = document.querySelector('body')
body.append(text)

/* Se crea un div que fungira como progress bar y se anade al body */
const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

/* Se genera la funcion que calculara el porcentaje de scroll */
const calcScrollPercentage = (event) => {

    const { 
        scrollHeight, 
        clientHeight, 
        scrollTop
     } = event.target.documentElement
 
     /* Para calcular el porcentaje de scroll se requiere de la siguiente formula */
     return (scrollTop / (scrollHeight - clientHeight)) * 100
}

/* Se genera el observable que escuchara el evento scroll */

const scroll$ = fromEvent(document, 'scroll')

/** 
 * Se utiliza map para calcular el porcentaje del scroll y se utiliza tap para modificar el width del progress bar
  */
const progress$ = scroll$.pipe(
    map(calcScrollPercentage),
    tap(percentage => {
        progressBar.style.width = `${percentage}%`
    })
)

const observer: Observer<any> = {
    next: value => console.log("next x ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}
progress$.subscribe(observer)


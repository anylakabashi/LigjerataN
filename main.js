let titulli = 'Ngjarje e rende (video)';
let permbajtja = 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
let meTeRejat = document.getElementById('me-te-rejat')
meTeRejat.innerText = '';


let artikujt = [
  {
    titulli: 'Ngjarje e rende (video)',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  },
  {
    titulli: 'Ngjarje e rende (video) 2',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  },
  {
    titulli: 'Ngjarje e rende (video) 3',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  },
  {
    titulli: 'Ngjarje e rende (video) 4',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  },
  {
    titulli: 'Ngjarje e rende (video) 5',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  },
  {
    titulli: 'Ngjarje e rende (video) 6',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  },
  {
    titulli: 'Ngjarje e rende (video) 7',
    permbajtja: 'Ne Prishtine, shiu dhe era e forte rrezon kulmin e komunes'
  }
]
function shtoArtikull(artikulli) {


  const elementiArtikulli = document.createElement('article');

  const elementiH2 = document.createElement('h2')
  const textElementiH2 = document.createTextNode(artikulli.titulli)
  elementiH2.appendChild(textElementiH2)
  elementiArtikulli.appendChild(elementiH2)

  const elementiP = document.createElement('p')
  const textElementiP = document.createTextNode(artikulli.permbajtja)
  elementiP.appendChild(textElementiP)
  elementiArtikulli.appendChild(elementiP)

  meTeRejat.appendChild(elementiArtikulli)
}
for (let index = 0; index < artikujt.length; index++) {
  shtoArtikull(artikujt[index])

}


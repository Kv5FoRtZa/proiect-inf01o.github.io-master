import { toast } from 'react-toastify';
import { bellmanFord } from './bellmanFord';
import { generareDrum } from './generareDrum';

export const main = (n, matrice, setLoading, setDrum) => {
  let i, j;
  const l = [];

  for (i = 0; i <= parseInt(n) + 1; i++) {
    l[i] = [];
  }

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      l[i][j] = 99999999
    }
  }

  const newL = bellmanFord(l, matrice);

  if (newL[1][1] === -1) {
    toast.error('Pozitia initiala este blocata!', { autoClose: 1000 })
    setLoading(true)
    setDrum([0, 0])

    return
  } else if (newL[n][n] === 99999999) {
    toast.error('Nu este nici un drum disponibil!', { autoClose: 1000 })
    setLoading(true)
    setDrum([0, 0])

    return
  }
  else{
    const drumObject = generareDrum(newL, matrice);
    setDrum(drumObject.drum)
    toast.success(`${"Drumul minim are costul "} ${newL[n][n]}`, { autoClose: 1000 })
   /* toast.success(newL[n][n], { autoClose: 1000 })*/
  }
}
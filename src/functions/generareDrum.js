import _ from 'lodash';

export const generareDrum = (l, matrice) => {
  let linie = matrice.length - 2;
  let coloana = matrice.length - 2;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const a = _.cloneDeep(matrice);
  const drum = [];

  let p = 0;
  let numar, i, lin1, col1;
  const drum_linie = [];
  const drum_coloana = [];

  drum_linie[p] = linie;
  drum_coloana[p] = coloana;

  while (coloana !== 1 || linie !== 1) {
    numar = l[linie][coloana] - a[linie][coloana];

    for (i = 0; i < 4; i++) {
      lin1 = linie + dx[i];
      col1 = coloana + dy[i];

      if (numar === l[lin1][col1]) {
        linie = lin1;
        coloana = col1;

        p++;
        drum_linie[p] = linie;
        drum_coloana[p] = coloana;
        break;
      }
    }
  }

  drum_linie.reverse();
  drum_coloana.reverse();

  for (i = 0; i < p; i++) {
    let iValue = (drum_linie[i] + 1).toString() + "_" + (drum_coloana[i] + 1).toString()
    let jValue = (drum_linie[i + 1] + 1).toString() + "_" + (drum_coloana[i + 1] + 1).toString()
    drum.push([iValue, jValue])

    /*
      {11, 12}
      {12, 21}
    */
  }

  return {
    p,
    drum
  }
}
import _ from 'lodash';

export const bellmanFord = (l, matrice) => {
  let x, lin1, col1, i;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const a = _.cloneDeep(matrice);
  const inQueue = [];

  for (i = 0; i < matrice.length; i++) {
    inQueue[i] = new Array(matrice.length);
  }
  const coada = [];

  coada.push({ lin: 1, col: 1 });
  inQueue[1][1] = 1;
  l[1][1] = a[1][1];

  while (coada.length > 0) {
    x = coada[0];

    for (let i = 0; i < 4; i++) {
      lin1 = x.lin + dx[i];
      col1 = x.col + dy[i];

      if (a[lin1][col1] !== -1 && a[lin1][col1] + l[x.lin][x.col] < l[lin1][col1]) {
        l[lin1][col1] = a[lin1][col1] + l[x.lin][x.col];

        if (!inQueue[lin1][col1] || inQueue[lin1][col1] === 0) {
          inQueue[lin1][col1] = 1;
          coada.push({ lin: lin1, col: col1 });
        }
      }
    }

    coada.shift();
    inQueue[x.lin][x.col] = 0;
  }

  return l;
}
// const MACCHINE = ["L180","L232","L2020"];
const STATI = [
  'In progress',
  'End ok',
  'Error',
  'Manual stop',
  'Ready',
  'Safety block',
  'Waiting'
];
export function fake_getDatiCiclatura() {
  const json = {
    L180: [
      {
        Macchina: 'L180',
        Stallo: '1',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'Error',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '2',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'In progress',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '3',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'Waiting',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '4',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'Manual stop',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '6',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'Safety block',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '7',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'Ready',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '8',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'End ok',
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L180',
        Stallo: '9',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: 'In progress',
        'Export time': '17/08/2020 07:50'
      }
    ],
    L232: [
      {
        Macchina: 'L232',
        Stallo: '1',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '3',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '2',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '4',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '6',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '7',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '8',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L232',
        Stallo: '9',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      }
    ],
    L2020: [
      {
        Macchina: 'L2020',
        Stallo: '1',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '2',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '3',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '4',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '6',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '7',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '8',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      },
      {
        Macchina: 'L2020',
        Stallo: '9',
        Tecnico: 'Max',
        Prova: '20-0463',
        Start: '17/08/2020 07:50',
        End: '17/08/2020 07:50',
        Stato: `${rs()}`,
        'Export time': '17/08/2020 07:50'
      }
    ]
  };
  return Promise.resolve(json);
}

/**
 * Genera random stato stallo
 */
function rs() {
  return STATI[Math.floor(Math.random() * STATI.length)];
}

// Initialization for ES Users
// import { ComponentName, initTE } from "tw-elements";
// initTE({ ComponentName });
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
// Initialization for ES Users
import { Datatable } from 'tw-elements';

const data = {
  columns: [
    'Voucher id',
    'Client to Handler 1 Time',
    'Handler 1 to Handler 2 Time',
    'Handler 2 to Handler 3 Time',
    'Handler 3 to Unit Head Time',
    'Unit Head to Finance Time',
  ],
  rows: [
    [
      'Vou-001',
      '9:03:55 am',
      '9:36:27 am',
      '9:55:21 am',
      '10:45:14 am',
      '11:03:24 am',
    ],
    [
      'Vou-002',
      '10:03:55 am',
      '10:36:27 am',
      '10:55:21 am',
      '11:45:14 am',
      '12:03:24 am',
    ],
    [
      'Vou-003',
      '11:03:55 am',
      '11:36:27 am',
      '11:55:21 am',
      '12:45:14 pm',
      '1:03:24 pm',
    ],
    [
      'Vou-004',
      '12:03:55 pm',
      '12:36:27 pm',
      '12:55:21 pm',
      '12:45:14 pm',
      '12:03:24 pm',
    ],
    [
      'Vou-005',
      '1:03:55 pm',
      '1:36:27 pm',
      '1:55:21 pm',
      '1:45:14 pm',
      '1:03:24 pm',
    ],
    [
      'Vou-006',
      '2:03:55 pm',
      '2:36:27 pm',
      '2:55:21 pm',
      '2:45:14 pm',
      '2:03:24 pm',
    ],
    [
      'Vou-007',
      '3:03:55 pm',
      '3:36:27 pm',
      '3:55:21 pm',
      '3:45:14 pm',
      '3:03:24 pm',
    ],
    [
      'Vou-008',
      '4:03:55 pm',
      '4:36:27 pm',
      '4:55:21 pm',
      '4:45:14 pm',
      '4:03:24 pm',
    ],
    [
      'Vou-001',
      '9:03:55 am',
      '9:36:27 am',
      '9:55:21 am',
      '10:45:14 am',
      '11:03:24 am',
    ],
    [
      'Vou-002',
      '10:03:55 am',
      '10:36:27 am',
      '10:55:21 am',
      '11:45:14 am',
      '12:03:24 am',
    ],
    [
      'Vou-003',
      '11:03:55 am',
      '11:36:27 am',
      '11:55:21 am',
      '12:45:14 pm',
      '1:03:24 pm',
    ],
    [
      'Vou-004',
      '12:03:55 pm',
      '12:36:27 pm',
      '12:55:21 pm',
      '12:45:14 pm',
      '12:03:24 pm',
    ],
    [
      'Vou-005',
      '1:03:55 pm',
      '1:36:27 pm',
      '1:55:21 pm',
      '1:45:14 pm',
      '1:03:24 pm',
    ],
    [
      'Vou-006',
      '2:03:55 pm',
      '2:36:27 pm',
      '2:55:21 pm',
      '2:45:14 pm',
      '2:03:24 pm',
    ],
    [
      'Vou-007',
      '3:03:55 pm',
      '3:36:27 pm',
      '3:55:21 pm',
      '3:45:14 pm',
      '3:03:24 pm',
    ],
    [
      'Vou-008',
      '4:03:55 pm',
      '4:36:27 pm',
      '4:55:21 pm',
      '4:45:14 pm',
      '4:03:24 pm',
    ],
  ],
};

const instance = new Datatable(document.getElementById('datatable'), data);

document
  .getElementById('datatable-search-input')
  .addEventListener('input', (e) => {
    instance.search(e.target.value);
  });

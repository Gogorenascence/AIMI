
document.addEventListener('DOMContentLoaded', () => {
  const amount = 48;
  const sources = [
    "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
    "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
    "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
    "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
    "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
    "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
    "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
    "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg"
  ];

  // generate grid layout
  const container = document.querySelector('.container');
  container.classList.add('mw-100', 'p-3');
  const row = document.createElement('div');
  row.classList.add('row', 'row-cols-4', 'g-3');

  const srcLength = sources.length;
  let i = 0;
  let multiple = 0;

  // populate grid
  while (i < amount) {
    // create container for checkbox and associated label
    const col = document.createElement('div');
    col.classList.add('col');

    // create checkbox with bootstrap styling for placement
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + i;
    checkbox.name = 'checkbox' + i;
    checkbox.classList.add('mt-2', 'ms-2');

    // create label for checkbox with background image
    const label = document.createElement('label');
    label.htmlFor = 'checkbox' + i;

    const image = document.createElement('img');
    image.loading = 'lazy'; // lazy loading
    image.src = sources[i - srcLength * multiple];
    image.classList.add('img-thumbnail');
    image.alt = 'Online Image ' + i;

    label.appendChild(image);
    col.appendChild(checkbox);
    col.appendChild(label);
    row.appendChild(col);

    i++;
    if (i % srcLength === 0) multiple++;
  }

  container.appendChild(row);
});




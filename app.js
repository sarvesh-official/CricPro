// Selecting Players
virender = document.getElementById('virender');
sachin = document.getElementById('sachin');
gautam = document.getElementById('gautam');
virat = document.getElementById('virat');
dhoni = document.getElementById('dhoni');
yuvraj = document.getElementById('yuvraj');
suresh = document.getElementById('suresh');
harbhajan = document.getElementById('harbhajan');
zaheer = document.getElementById('zaheer');
munaf = document.getElementById('munaf');
sreesanth = document.getElementById('sreesanth');

//Selecting Pictures
virenderimg = document.querySelector('.virenderimg');
sachinimg = document.querySelector('.sachinimg');
gautamimg = document.querySelector('.gambhirimg');
viratimg = document.querySelector('.viratimg');
dhoniimg = document.querySelector('.dhoniimg');
yuvrajimg = document.querySelector('.yuvrajimg');
sureshimg = document.querySelector('.sureshimg');
harbhajanimg = document.querySelector('.harbhajanimg');
zaheerimg = document.querySelector('.zaheerimg');
munafimg = document.querySelector('.munalimg');
sreesanthimg = document.querySelector('.sreesanthimg');

// Adding Onclick Function

function display(playername) {
  playername.style.marginTop = '-50px';
  playername.style.position = 'absolute';
  playername.style.display = 'block';
}

virender.addEventListener('click', display(virenderimg));
sachin.addEventListener('click', display(sachinimg));
gautam.addEventListener('click', display(gautamimg));
virat.addEventListener('click', display(viratimg));
dhoni.addEventListener('click', display(dhoniimg));
yuvraj.addEventListener('click', display(yuvrajimg));
suresh.addEventListener('click', display(sureshimg));
harbhajan.addEventListener('click', display(harbhajanimg));
zaheer.addEventListener('click', display(zaheerimg));
munaf.addEventListener('click', display(munafimg));
sreesanth.addEventListener('click', display(sreesanthimg));

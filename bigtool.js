
const bigtoolData = {
  bigtool1: {
    img: 'images/tool1.png',
    title: 'Seamslistener',
    text: 'to reflect on your practice and current directions and how it is aligned with your aims ? <p>a <i>point d’écoute </i>(listening spot), and its <i>renfort d’écoute</i> (listening reinforcement), are translations for the word "sheet" : the lower corners of a sail and its line used to change the direction.</p> <p>on the <i>point d’écoute</i>, pass your fingers on the seams and stitched lines of a flowchart. Slide capacities touch sensors sewed in the sail aligned with the diagram’s workflow will detect and record your movements and compare it to the one before, and the one you were aiming at the first time you followed the path of the flowchart’s lines. </p> <p>making you listen to the different directions you took before, and reflect on your own position and the possibilities within your reach.</p> '
  },
  bigtool2: {
    img: 'images/tool2.png',
    title: 'TEMPOrature protractor',
    text: 'To maintain degrees of freedom in interdependence.<p> on the raft you managed to construct after leaving school with others, how to steer together, and how do you collaborate without dissolving or loosing your voice and aims ? </p>  <p> each member of the raft has an individual heat flux sensor positioned on the helm. Everyone has to touch the helm once in a while to keep their degrees of freedom stable. As you hold the helm, your degree of freedom is calculated thanks to the tempo of the collective raft degree of movements and your personal heat. </p>  <p>°+1 a degree of freedom is gained,  °-1 a degree of freedom is lost,  °= degree is stable</p> <img src="images/lcd.png" class="card-image" alt="LCD display"></img>'
  },
  bigtool5: {
    img: 'images/tool5.png',
    title: 'Salinity microphone meter',
    text: `<p>Estuaries are the only ecosystem where water lines can exchange. This sharing area creates an exceptional biomass, where shared thoughts and speech between salty water (freelancers, past students) and fresh chlorine water (students or just graduated students) can take place in a perfect equal foot and anti-hierarchical environment, whose result is a rich spawning ground.</p><p>To know if you have reached the right sharing area and spot, use the salinity microphone meter : if the exchange zone is ideal, the microphone will set : <i>Time for live estuaries of consciousness !</i></p>`
  },
  bigtoolacid: {
    img: 'images/toolacid.png',
    title: 'Tax-idity flag',
    text: 'To inform the other sailors and the harbor on your level of acidic environment, stress, concerning your freelance taxes payment, raise the Tax-idity flag. </p>  <p> Colors of the flag depend on live PH of your environment, sea water, rain and mist you are navigating in.  Transactions, operations that satisfies the A(atomicity), C(onsistency), I(solations), D(urability) properties aim to guarentee validity despite errors and failures.   The color of the flag will reveal if the ACID properties are aligned for the tax transaction, or if there is a necessity do dilute money stress in purified water with the tax-events or business trips organized at Extra Practice evry month.'
  },
  bigtoolbreath: {
    img: 'images/toolbreath.png',
    title: 'Short Wave Breathlistener',
    text: 'To pick up the low radio frequencies and find the ones aligned with your breathing rate. <p> In the search for the flotilla frequency that corresponds to your breathing frequency, you are searching for a place, people,that corresponds to your rhythm. A ferrite coil antenna and spirometer.At low frequencies, a ferrite coil can be used as an receiving antenna, and can also be used to detect the direction of the transmitter by fixed radio direction findings (old GPS system still in operation)</p>'
  },
  bigtoolplow: {
    img: 'images/bigtoolplow.png',
    title: 'Patient Water Plow',
    text: 'as you would plough before sowing a field, patiently plow the area on which you would like to construct. Thanks to the energy of the wind turning a rotor, a ventilated shelter rotates slowly while recovering the foam derived from the offshore breakdown. Collecting old winds excressance (as foam is trapped air mixed with salt and organism by winds) thanks to the energy of new winds, allowing some slow reflectivity between the same elements, different in time and space.'
  },
  bigtoolwind: {
    img: 'images/toolwind.png',
    title: 'Disentangle net anemometer',
    text: 'To know if the winds are favorable for sailing, if you should adapt the location, infrastructure on which you stand.To undo all the knots of incomprehension from your amateurism and the flow of continuous economical data and information in which you drown on the web,put your knots of entanglement around the disentangle net anemometer. Depending on the wind speed your nets will become a readable swaddling of filtered and comprehensible information.'
  }
};


window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#tools img').forEach(function(img) {
    const name = img.src.split('/').pop().replace('.png','');
    if (bigtoolData[name]) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        const data = bigtoolData[name];
        const explanation = document.getElementById('explanation');
        explanation.innerHTML = `<div><img src="${data.img}" style="width:100%"><h3>${data.title}</h3><p>${data.text}</p></div>`;
      });
    }
  });
});

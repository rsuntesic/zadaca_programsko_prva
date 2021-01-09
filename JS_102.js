let bodovi = prompt("Unesi broj bodova");
let ocjena; 
let poruka;
       
if (bodovi >= 0 && bodovi<50) ocijena = 1;
else if (bodovi >= 50 && bodovi < 65){
       ocijena = 2;
       poruka = "Čestitamo prošli ste predmet s "+ ocijena + ".";
       }
else if (bodovi >=65 && bodovi < 80){
       ocijena = 3;
       poruka = "Čestitamo prošli ste predmet s "+ ocijena + ".";
       }
else if (bodovi >=80 && bodovi < 94){
       ocijena = 4;
       poruka = "Čestitamo prošli ste predmet s "+ ocijena + ".";
       }
else if (bodovi >=94 && bodovi <= 100){
       ocijena = 5;
       poruka = "Čestitamo prošli ste predmet s "+ ocijena + ".";
       }
else {
       ocijena = 0;
       poruka = "Unijeli ste previse bodova!!!";
       }

console.log(poruka);

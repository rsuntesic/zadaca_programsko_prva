  let a = prompt("Unesi prvi broj");
  let b = prompt("Unesi drugi broj")
  let c = prompt("Unesi treći broj");
  let d = prompt("Unesi četvrti broj");
  let maks;
        
  if      (a>b && a>c && a>d) maks = a;
  else if (b>c && b>d)        maks = b;
  else if (c>d)               maks = c; 
  else                        maks = d;

  console.log("Najveći između njih je: " + maks);
 
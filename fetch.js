fetch("https://manueltomas-developer.github.io/apiDiasFeshion/apiDiasFeshion.json")
.then(r=>r.json())
.then(data=>console.log(data))
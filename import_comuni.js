const csv = require("csv-parser");
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://mjsqwfspdyvtwftnnmex.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qc3F3ZnNwZHl2dHdmdG5ubWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzA2NTUsImV4cCI6MjA1OTYwNjY1NX0.ICDLHIiYEMkw1wnkmpFw6g9cGybl_kxIPQ_KgunwvCE"
);

fs.createReadStream("comuni.csv")
  .pipe(csv())
  .on("data", async (row) => {
    await supabase.from("comuni").insert({
      nome: row.nome,
      regione: row.regione,
      provincia: row.provincia,
      cap: row.cap,
      latitudine: row.lat,
      longitudine: row.lon
    });
  });

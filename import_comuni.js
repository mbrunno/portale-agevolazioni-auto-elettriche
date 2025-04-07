const csv = require("csv-parser");
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient("https://<your-project>.supabase.co", "<anon-key>");

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
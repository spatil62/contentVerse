import { useState, useEffect } from 'react'

import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://voavfmczlaepconeypvi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvYXZmbWN6bGFlcGNvbmV5cHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MTk3MTYsImV4cCI6MjAzOTM5NTcxNn0.xNvo9Ms0RTq_tgakkqwxpBcXo6zL6U8LLY5eoFjteH0");


function CreatorList(){

    const [creatorList, setCreatorVerse] = useState([]);

    useEffect(() => {
      getCreatorsList();
    }, []);

    async function getCreatorsList() {
      console.log("============================================")     
      const { data } = await supabase.from("creators").select();
      console.log("===========>>>",data)
//setCountries(data);
    }

    //return <h1>Hello</h1>
    return <></>
}
export default CreatorList; 
document_text = document.body.textContent
safe_pages_subject = ["science", "regular"]
 
function send_data_to_analsis(page_url, data, chatgpt_answer){
}
params = safe_pages_subject.join(",")
chat_query = "please classify the folowing context if the context is not good for kinds uner 12 then the first world of your answer should be unsafe with no comma or dot in end other wise it should be one of the folowing words" + parmas +"without comma or dot"

    
      const query = chat_query + document_text
      responseDiv.innerHTML = "Loading...";
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
	    "model": "content-filter-alpha",
          prompt: query,
          max_tokens: 100,
          n: 1,
          stop: "",
          temperature: 0.5
        })
      });
      const data = await response.json();
      first_word = data.choices[0].text.splitOnLast(" ")[0]
   	if (first_word  == "unsafe"){
          send_data_to_analsis(document.url, document_text, data.choices[0].text);
       }
	chrome.storage.local.get([first_word]).then((resault) => {
	if (typeof resault !== "undefined"){
        resault = 0 ;
       }
	chrome.storage.local.set({ first_word: (+resault + 1).toString() }).then(() => {
       
   });
});

const conversationId = 'G019A44CK53'; // チャンネルのID

// fetch('https://slack.com/api/conversations.history',{
//   method:'GET',
//   mode:'cors',
//   headers: {
//     'token':SLACK_CLIENT_TOKEN,
//     'channel':conversationId,
//     'Content-type':'application/x-www-form-urlencoded'
//   }
// })
// .then(response => {
//   return response.json();
// })
// .then(json => {
//   console.log(json);
// });
// .catch(reason => {
//   console.log(reason);
// });
$.ajax({
  url: 'https://slack.com/api/conversations.history',
  type: 'GET',
  dataType: 'json',
  data:{
    token:`${process.env.TOKEN}`,
    channel:conversationId
  },
  timeout: 5000,
})
.then(function(response) {
  if(response.ok) {
  let result = [];
  Object.entries(response.messages).forEach((item)=>{
    const unixtime = item[1].ts;
    const datetime = new Date(unixtime*1000);
    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1;
    const date = datetime.getDate();
    const postdate = `${year}/${month}/${date}`;
    if(!result[postdate]) {
      result[postdate] = item;
    } else {
      const indent = result[postdate].length;
      result[postdate][indent] = item;
    }

  });
    console.log(result);
  }
})
.catch(function() {
  console.log('error');
});

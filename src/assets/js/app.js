
const SLACK_CLIENT_TOKEN = 'xoxp-1330090420449-1316092925989-1312311013990-b86b0f855dcc8b84635700cf0c45a884';
const conversationId = 'G019A44CK53' // チャンネルのID

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
    token:SLACK_CLIENT_TOKEN,
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
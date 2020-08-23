
const SLACK_CLIENT_TOKEN = 'xoxp-1330090420449-1316092925989-1341363678864-f9e50cd2696119a1969b520d68c26c8c';
const conversationId = 'G019A44CK53' // チャンネルのID

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
.done(function(data) {
  console.log(data);
})
.fail(function() {
  console.log(data);
});
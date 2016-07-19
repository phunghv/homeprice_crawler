var graph = require('fbgraph');

//var fs = require('fs');
//var Regex = require('regex');

//var natural = require('natural');
//var XRegExp = require('xregexp');
//
// cuongbui.vbn@gmail.com
// 123321qw
//
//var pre_text=['giá','gia'];
//var pos_text =['củ','triệu','cu','trieu','triêu','triẹu','/.*?\d+(\.|,)?(\d)?((\s*))tr/','k','nghìn','nghin','tram'];

//var rex_check =[/\d+(\.|,)?(\d)?((\s*))tr/];
graph.setAccessToken("EAACEdEose0cBAC8S1WbReZCg0vNqZCqcMqfwR8DXUpaP8LgaeO5uvWqP8p4wPmmbVcHZAmSavAwMVALatRpfW11PXu3dT5WHAxxStnR005xR5a78WzeKNX5Mfgi60ezEIyimGZCMHykyClnZCr1yZAn6mcInjmUla0BO6FJN8OQQZDZD");
graph.setVersion("2.2");
var graphObject = graph
  .get("443537385830239/feed", function(err, res) {
    console.log(res); 
    
    //for(var i =0 ; i< res.data.length; i++){
      //  for(var j =0; j < rex_check.length;j++){
         //	var regex = XRegExp(rex_check[j], 'n');
         //   for(str in res.data.message){
         //       console.log(str);
        //        console.log("====================");
     //       }
            //var isDate = regex.test(res.data.message); // -> true
       // }


        
       // tokenizer = new natural.RegexpTokenizer({pattern: /tr/});
      // console.log(tokenizer.tokenize(res.data[i].message));






         //console.log(res.data[i].message);
        // 
       //  fs.appendFile('message.txt', res.data[i].message +"\r\n\r\n\r\n\r\n\r\n", function (err_fs) {
       //     if (err_fs) return console.log(err_fs);
       ////     //console.log('Hello World > helloworld.txt');
       //  });
      //   console.log("===========================================");
});
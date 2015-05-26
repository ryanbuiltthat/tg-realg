// Template.receipttopdf.onCreated(function(){
// //params._id
// });
// Template.receipttopdf.helpers({
// 	makepdf: function(url){
// 		//return Meteor.call('createPDF', Router.current().params._id);
// 		// console.log(Router.current());
// 		// return true;
// 		//return wkhtmltopdf(Router.current().url, { output: 'out.pdf' });
// 	}
// });




// this.route('generatePDF', {
//         path: '/api/generatePDF',
//         where: 'server',
//         action: function() {
//             var webshot = Meteor.npmRequire('webshot');
//             var fs      = Npm.require('fs');
//             var fut = new Future();
//             var fileName = "generated_"+Random.id()+".pdf";
//             var url = Meteor.absoluteUrl(<path to a client side route with print css>);

//             var options = {
//               renderDelay:5000,
//                 "paperSize": {
//                     "format": "Letter", 
//                     "orientation": "portrait", 
//                     "margin": "1cm"
//                 }
//             };

//             webshot(url, fileName, options, function(err) {
//               fs.readFile(fileName, function (err,data) {
//                 if (err) {
//                   return console.log(err);
//                 }

//                 fs.unlinkSync(fileName);
//                 fut.return(data);
//               });
//             });

//             this.response.writeHead(200, {'Content-Type': 'application/pdf',"Content-Disposition": "attachment; filename=generated.pdf"});
//             this.response.end(fut.wait());
//         }
//     });
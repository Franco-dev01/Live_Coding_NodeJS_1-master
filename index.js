const express = require('express');
const app = express();
const path = require('path');



app.set('views',__dirname+ '/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));
//inclusion de notre fichier css





        app.get('/index',(req,res)=>{

        res.render('index.ejs')
        });

        app.get('/menu',(req,res)=>{

         res.render('menu.ejs')
         });


         app.get('/reservation',(req,res)=>{

            res.render('reservation.ejs')
        });


         app.get('/gallery',(req,res)=>{

            res.render('gallery.ejs')
            });





        app.get('/contact',(req,res)=>{

            res.render('contact.ejs')
            });


        app.get('/blog',(req,res)=>{

            res.render('blog.ejs')
          });


          app.get('/blog-detail',(req,res)=>{

            res.render('blog-detail.ejs')
        });



        app.get('/about',(req,res)=>{

            res.render('about.ejs')
            });




app.listen(3000,()=>{
    console.log('serveur demarre avec succes surle port 3000')
})

function strike(){
   var success = Math.ceil(Math.random() * 10);
   console.log(success);
   if (success < 4){
       document.getElementById("monster").src = "https://res.cloudinary.com/teepublic/image/private/s--8V0MPK3m--/c_crop,x_10,y_10/c_fit,h_797/c_crop,g_north_west,h_972,w_1127,x_-171,y_-87/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-237,y_-229/c_mfit,g_north_east,u_misc:tapestry-l-l-gradient/e_displace,fl_layer_apply,x_0,y_19/l_upload:v1507037316:production:blanks:knoqtwkqk9vucfsy8ke0/fl_layer_apply,g_north_west,x_0,y_0/b_rgb:191919/c_limit,f_jpg,h_630,q_90,w_630/v1494260409/production/designs/1583722_1.jpg";
       console.log("hit")
   }
   else{
       document.getElementById("monster").src = "https://cdn.drawception.com/images/panels/2017/1-22/Wd5nzyTGcC-12.png";
        console.log("miss")
   }
}
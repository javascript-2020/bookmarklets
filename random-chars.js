
<script>

(async()=>{

      var format    = [3,2,3];
      var chars     = [];
      for(var i=65;i<=90;i++)chars.push(String.fromCharCode(i));    //  uppercase
      for(var i=97;i<=122;i++)chars.push(String.fromCharCode(i));   //  lowercase
      for(var i=48;i<=57;i++)chars.push(String.fromCharCode(i));    //  numbers
      
      var str       = '';
      format.forEach((n,i)=>{
      
            for(var j=0;j<n;j++){
              
                  str  += char();
                  
            }//for
            if(i<format.length-1){
                  str  += '-';
            }
            
      });
      
      console.log(str);

      
      function char(){
        
            var i   = Math.floor(Math.random()*chars.length);
            var c   = chars[i];
            return c;
            
      }//char
      
      
})();

</script>
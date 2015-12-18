'use_strict';

(function(exports){
  var ToeicPractice = function(){
    ans:0;
    isAnswering:0;
    answerd:0;
      correct:0;
        last:0;
  };
  
  ToeicPractice.prototype = {
    
   // var ans=0,isAnswering=0,answerd=0,correct=0,last=0;

    reset(){
      this.answerd = 0;
      this.correct = 0;
      document.querySelector('#cs').innerHTML = 'Current Scores: ';
      document.querySelector('#cr').innerHTML = 'Correct Rate: ';
      this.start();
    },
    
    start(){
      this.isAnswering = 1;
      this.getQuestion();
    },
    
    judge(){
      var btnA = document.getElementById('btn_A');
      var btnB = document.getElementById('btn_B');
      var btnC = document.getElementById('btn_C');
      var btnD = document.getElementById('btn_D');
      var btnN = document.getElementById('btn_Next');
      var btnR = document.getElementById('btn_Reset');
      var btnLogin = document.getElementById('login');
      btnA.addEventListener('click', function(event){
         if(this.isAnswering){
           this.isAnswering = 0;
           if(this.ans == 1){
             this.correct++;
             alert('You got the right answer!');
           } else {
             alert('Dum Dum');
           }
         } else {
           alert('Next Question!');
         } 
      });

      btnB.addEventListener('click', function(event){
        if(this.isAnswering){
          this.isAnswering = 0;
          if(this.ans == 2){
            this.correct++;
            alert('You got the right answer!');
          } else {
            alert('Dum Dum');
          }
        } else {
          alert('Next Question!');
        }
      });

      btnC.addEventListener('click', function(event){
        if(this.isAnswering){
          this.isAnswering = 0;
          if(this.ans == 3){
            this.correct++;
            alert('You got the right answer!');
          } else {
            alert('Dum Dum');
          }
        } else {
          alert('Next Question!');
        }
      });

      btnD.addEventListener('click', function(event){
        if(this.isAnswering){
          this.isAnswering = 0;
          if(this.ans == 4){
            this.correct++;
            alert('You got the right answer!');
          } else {
            alert('Dum Dum');
          }
        } else {
          alert('Next Question!');
        }
      });

      btnN.addEventListener('click', function(event){
        if(this.isAnswering){
          alert('Choose an Answer!');
        } else {
          //alert('CurrentScores: '+correct+'/'+answerd  + '\r\nCorrect Rate: '+ Math.floor((correct/answerd)*100)+'%');
          document.querySelector('#cs').innerHTML = 'Current Scores: '+correct+'/'+answerd;
          document.querySelector('#cr').innerHTML = 'Correct Rate: '+ Math.floor((correct/answerd)*100)+'%';
          this.start();
        }
      });

      btnR.addEventListener('click', function(event){
        this.reset();
      })
    },
    test(){
      var html = "<div id='question'></div>";
      html = html + "<div id='option1'></div>";
      html = html + "<div id='option2'></div>";
      html = html + "<div id='option3'></div>";
      html = html + "<div id='option4'></div>";
      html = html + "<div id='cs'></div>";
      html = html + "<div id='cr'></div>";
      document.write(html);
    },
    getQuestion(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://spreadsheets.google.com/feeds/list/10EvroHjVf8ARi2qbSOoRmbpscSau-p1aG4BjdsahlCU/1/public/values?alt=json-in-script', true);
      xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var json = xhr.responseText;
          var obj = JSON.parse(json.slice(28,json.length-2));
          var l;
          do{
            l = Math.floor(Math.random()*obj.feed.entry.length);
          }while(l==this.last);
          this.last = l;
          var data = obj.feed.entry[l].gsx$q.$t + '<br>(A)' + obj.feed.entry[l].gsx$opt1.$t + '<br>(B)'+ obj.feed.entry[l].gsx$opt2.$t + '<br>(C)' + obj.feed.entry[l].gsx$opt3.$t + '<br>(D)' + obj.feed.entry[l].gsx$opt4.$t ;
          var q = obj.feed.entry[l].gsx$q.$t;
          var opt1 = obj.feed.entry[l].gsx$opt1.$t;
          var opt2 = obj.feed.entry[l].gsx$opt2.$t;
          var opt3 = obj.feed.entry[l].gsx$opt3.$t;
          var opt4 = obj.feed.entry[l].gsx$opt4.$t;
          var question = document.querySelector('#question');
          var option1 = document.querySelector('#option1');
          var option2 = document.querySelector('#option2');
          var option3 = document.querySelector('#option3');
          var option4 = document.querySelector('#option4');
          this.ans = obj.feed.entry[l].gsx$ans.$t;    
          question.innerHTML = q;
          option1.innerHTML = opt1;
          option2.innerHTML = opt2;
          option3.innerHTML = opt3;
          option4.innerHTML = opt4;
          this.answerd++;
         } else {
          alert('Network error occured.');
         }
       }
      };
        xhr.send();
    }
   };
 exports.ToeicPractice = ToeicPractice;
    
})(window);


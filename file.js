var players=[
    {'name':'Friez','img':'Images/Friez.PNG',},
    {'name':'Goku','img':'Images/Goku.PNG',},
    {'name':'Goku','img':'Images/Goku2.PNG',},
    {'name':'Hit','img':'Images/Hit.PNG',},
    {'name':'Hit','img':'Images/Hit2.PNG',},
    {'name':'Jiren','img':'Images/Jiren.PNG',},
    {'name':'Jiren','img':'Images/Jiren2.PNG',},
    {'name':'Trunks','img':'Images/Trunks.PNG',},
    {'name':'Trunks','img':'Images/Trunks2.PNG',},
    {'name':'Vegeta','img':'Images/Vegeta.PNG',},
    {'name':'Vegeta','img':'Images/Vegeta1.PNG',},
      {'name':'Vegeta','img':'Images/Vegeta1.PNG',},
    
];
var players1=players.concat(players);
players1.sort(function()
{
    return 0.5-Math.random();
})
 var e=document.getElementById('yo');
for(var i=0;i<players1.length;i++)
    {var g=document.createElement('div');
     g.classList.add('parent');
     var front=document.createElement('div');
     front.classList.add('front');
var f=document.createElement('div');
f.classList.add('back');
        f.style.backgroundImage=`url(${players1[i].img})`;
        g.dataset.name=players1[i].name;
    e.appendChild(g);
     g.appendChild(f);
     g.appendChild(front);
    }
var a='';
var b='';
var delay=2000;
var score=0;
function reset1()
{
count=0;
  a='';
  b='';
 var selected=document.querySelectorAll('.selected');
 for(var i=0;i<selected.length;i++)
     {
         selected[i].classList.remove('selected');
     }    
}
var chances=2;
var ch=document.getElementById('section3');
ch.innerHTML="Chances: "+chances;
var score=0;
var s=document.getElementById('section1');
s.innerHTML="Score: " +score;
function reset()
{location.reload();//to reload the page
los=0;
 chances=2;
count=0;
 score=0;
  a='';
  b='';
 s.innerHTML="Score: " +score;
 
 var invisible=document.querySelectorAll('.invisible')
  for(var i=0;i<invisible.length;i++)
    {
        invisible[i].classList.remove('invisible')
    }
 ch.innerHTML="Chances: "+chances;
 s.innerHTML="Score: " +score;
}
function match()
{ var selected=document.querySelectorAll('.selected');
    for(var i=0;i<selected.length;i++)
        {
            selected[i].classList.add('invisible');
        }
}
var count=0;
var los=0;
e.addEventListener('click',function(ev){
    var clicked=ev.target;
     count++;
    if(clicked.nodeName==='SECTION1' || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('invisible') )
        {
            return;
        }
    if(count===1)
        {
            clicked.parentNode.classList.add('selected');
            a=clicked.parentNode.dataset.name;
        }
    if(count===2)
        {
             clicked.parentNode.classList.add('selected');
            b=clicked.parentNode.dataset.name;
            if(a===b)
                {   score++;
                    setTimeout(match,delay);
                    setTimeout(reset1,delay);
                 
                 s.innerHTML="Score: " +score;
                }
            else if(a!==b){
                setTimeout(reset1,delay);
                los++;
                chances--;
                ch.innerHTML="Chances: "+chances;
                if(los>2)
                    { reset(); 
                      window.alert("Game over Your total score Score:"+score+".");
                   
                   
                    }
                
            }
            
        }
    if(count>2)
        {
            setTimeout(reset1,delay);
        }
    
})
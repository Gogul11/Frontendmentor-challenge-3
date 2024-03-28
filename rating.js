
s = document.createElement('p');
s.setAttribute('id', "mark");
function score1()
{
        s.textContent="you selected 1 out of 5";
        
}
    
    function score2()
    {
        s.textContent="you selected 2 out of 5";
        
    }
    
    function score3()
    {
        s.textContent="you selected 3 out of 5";
    }
    
    function score4()
    {
        s.textContent="you selected 4 out of 5";
    }
    
    function score5()
    {
        s.textContent="you selected 5 out of 5";
    }
    
    
    
    function show()
    {
        const r = document.getElementById("main");
        r.remove();
        
        const tpage = document.createElement('div');
        tpage.setAttribute('id', 'next');
        tpage.append(s);
        const text = document.createElement('h2');
        text.setAttribute('id', 'thank');
        text.textContent = "Thank You!";
        tpage.appendChild(text);
        p = document.createElement('p');
        p.setAttribute('id', "cont");
        p.textContent = "We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch";
        tpage.append(p);
        

        document.body.append(tpage);
    }
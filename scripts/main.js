writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Be yourself, for everybody else is already taken. <br> <strong> Oscar Wilde</strong><br>";
    quotes[1] = "Life can only be understood backwards;<br> but it must be lived forwards. <br> <strong> Soren Kierkegaard </strong><br>";
    quotes[2] = "Optimism is a strategy for making a better future.<br> Because unless you believe that the future can be better,<br> you are unlikely to step up and take responsibility for making it so.<br><strong> Noam Chomsky</strong><br>";
    quotes[3] = "Two things are infinite: the universe and human stupidity;<br> and I’m not sure about the universe.<br> <strong> Albert Einstein</strong><br>";
    quotes[4] = "There is nothing either good or bad, but thinking makes it so.<br> <strong>  William Shakespeare</strong><br>";
    quotes[5] = "I cannot teach anybody anything.<br> I can only make them think.<br><strong>  Socrates</strong><br>";
    quotes[6] = "You are never too old to set another goal or dream a new dream.<br> <strong>C.S Lewis</strong><br>";
    quotes[7] = "Learn from yesterday, live for today, hope for tomorrow.<br> The important thing is not to stop questioning.<br><strong>Albert Einstein</strong><br>";
    quotes[8] = "It’s not that I’m so smart,<br> it’s just that I stay with problems longer.<br><strong>Albert Einstein</strong><br>";
    quotes[9] = "Very little is needed to make a happy life;<br> it is all within yourself, in your way of thinking.<br><strong> Marcus Aurelius</strong><br>";
    quotes[10] = "Life is not easy for any of us.<br> But what of that?<br> We must have perseverance and<br> above all confidence in ourselves.<br> We must believe, <br> that we are gifted for something <br>and that this thing must be attained.<br><strong>Marie Curie-Sklodowska</strong><br>";
    quotes[11] = "Fight for the things that you care about,<br> but do it in a way that will lead others to join you. <br><strong>Ruth Bader Ginsburg</strong><br>";
    quotes[12] = "Do what you feel in your heart to be right<br>for you’ll be criticized anyway.<br><strong>Eleanor Roosevelt</strong><br>";
    quotes[13] = "The greatest danger to our future is apathy.<br><strong>Jane Goodall</strong><br>";
    quotes[14] = "The question isn’t who’s going to let me;<br> it’s who is going to stop me. <br><strong>Ayn Rand</strong><br>";
    quotes[15] = "Climb the ladder of success, by always<br> putting forward your best self.<br>Practice being the best at what you do. <br><strong> Mark F.LaMoure</strong><br>";
    quotes[16] = "Be to yourself as you would to your friend.<br> <strong> William Shakespeare</strong><br>";
    quotes[17] = "I can live with doubt and uncertainty.<br> I think it’s much more interesting to live<br> not knowing than to have answers<br> which might be wrong.<br><strong>Richard P. Feynman</strong><br>";
    quotes[18] = "Don’t just follow people because you agree with what they think.<br> Follow them because you’re intrigued by how they think <br> and how they make you think.<br> <strong>Adam Grant</strong><br>";
    quotes[19] = "Thinking is difficult, that’s why most people judge.<br> <strong>Carl Jung</strong><br>";
    quotes[20] = "Genius is finding the invisible link between things.<br> <strong>Vladimir Nabokov </strong><br>";
    quotes[21] = "Don’t waste your time on jealousy, sometimes you’re ahead, sometimes you’re behind.<br> <strong>Mary Schmich</strong><br>";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();

  




  function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }
  
  
  showDate();

 

  
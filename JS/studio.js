var player = document.getElementById("player");
var playerdiv = document.getElementById("playerdiv");
var vidinfo = document.getElementById("vidinfo");
var s,i;

var info = [
        '<h1>Intezaar karu kya</h1><h2>By Muskan Katoch</h2><p>13 February 2020</p><h3>Genre</h3><p>Story telling</p><h3>Desciption</h3><p>A small tribute to the families of Indian Army by our Chancel. Lets pray for our soldiers who sacrifice their life for our nation. This story explain the pain and sacrifice that a Indian army families makes, the dream that her wife had in her eyes but could not turn into reality. The immense love and Sacrifice of family can not be explained in words. JAI HIND!!!</p><aside><a href="https://www.youtube.com/watch?v=9xs7cFVI6qo">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Masum Ishq</h1><h2>By Ankit Dokania</h2><p>18 February 2020</p><h3>Genre</h3><p>Poetry telling</p><h3>Desciption</h3><p>Poetry can glorify anything and even has the ability to depict any happening or incident in the most beautiful way. This poetry is all around the idea when a boy from rural part met to a girl in a marriage of some of their common relative. Poet Ankit through the medium of his poetry tried to project the same. We hope you will be able to feel all of its essence and will enjoy the same.</p><aside><a href="https://www.youtube.com/watch?v=py1hIMOAWAM">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Yaad satati hai Maa</h1><h2>By Babu Siddhant</h2><p>24 February 2020</p><h3>Genre</h3><p>Poetry telling</p><h3>Desciption</h3><p>This video is about the pain feel by a boy who lives far away from his mother... This  video is relatable to all of us as we all  miss our parents when we stay far away from them. We hope you all will love it. Show your love and support towards this video.</p><aside><a href="https://www.youtube.com/watch?v=wuGRshO-KBc">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Samaaj ka Drshy</h1><h2>By Dheerendra Singh</h2><p>29 February 2020</p><h3>Genre</h3><p>Story telling, Poetry</p><h3>Desciption</h3><p>Todays Society we are living in, is more of work and money and less of humanity. This story explains the present conditions that our society is being used to and being accepted by people itself. We are living in a world where our fashion dominates passion, where our human love is fading and relationships are being patternized. Lets unite together and shower some love and support to this amazing piece of talent.</p><aside><a href="https://www.youtube.com/watch?v=-KCeBpXuxlc">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Adhoora Ishq</h1><h2>By Abhishek Singh</h2><p>4 March 2020</p><h3>Genre</h3><p>Story telling, Poetry</p><h3>Desciption</h3><p>The story revolves around the sufferings one undergo when one of the partner ends the relationship unexpectedly. Its not easy for everyone to deal with the break up and one sometimes think of getting that individual back in the life. But one should consider that "No one goes out of the life with the intention of coming back again" and thus try to move on. Show your love and support towards this video.</p><aside><a href="https://www.youtube.com/watch?v=dP6NTtWsR54">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Haa! Main ek Ladki huu</h1><h2>By Nidhi Jeena</h2><p>7 March 2020</p><h3>Genre</h3><p>Story telling, Poetry</p><h3>Desciption</h3><p>Poem is about - women empowerment. Male and female are the two wheels of the society,so both of them have equal rights to live their life. The main objective of this poem - for every girl -I dont want to fit into the glass sleeper that someone had made by this patriarchal society, I want to break it by the term glass ceiling #breaking barriers....</p><aside><a href="https://www.youtube.com/watch?v=-E21zvd7P3k">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Shaam-e-Gazal</h1><h2>By Farhan Aalam</h2><p>18 March 2020</p><h3>Genre</h3><p>Gazal</p><h3>Desciption</h3><p>This episode is basically a ghazal which describes various issue relating both social and  political issue, that is one of the main havoc to the society and citizens of India, additionally it also describes the changes from love to hatred that comes under this situation.</p><aside><a href="https://www.youtube.com/watch?v=GlozTAulCTE">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>A Story on CoronaVirus</h1><h2>By Muskan Katoch</h2><p>2 April 2020</p><h3>Genre</h3><p>Story telling</p><h3>Desciption</h3><p>This is a story of a boy who lost his mother in this corona virus outbreak in the country. His mother was a doctor and was serving to the patients of COVID-19. Unlike the normal days, his mother did not visit her son because she was so busy in her work in hospital but the virus does not see a doctor or a normal civilians. It affects anyone and everyone around. The son lost his mother and many other sons are losing their mother in this tough times in the country so the only way to get through this situation is self isolation.</p><aside><a href="https://www.youtube.com/watch?v=e9xdbjcgyf8">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>CoronaVirus Awareness Dance</h1><h2>By Eliza Gupta</h2><p>4 April 2020</p><h3>Genre</h3><p>Dance</p><h3>Desciption</h3><p>Eliza urges us all to follow government rules and regulations for this COVID 19 pandemic with the help of her passion for dance and she beautifully described all the points through her enormous dance moves in this video. At this little stage if she can stand to spread awareness then we can too make her step worth by implementing rules in our lives and help India  to fight against this pandemic COVID-19.<br/>#IndiaFightsCoronavirus</p><aside><a href="https://www.youtube.com/watch?v=5w-xQzVGj-Q">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>',
        '<h1>Hamara India</h1><h2>CB Initiative</h2><p>27 April 2020</p><h3>Genre</h3><p>An initiative by Creative Beast</p><h3>Desciption</h3><p>This video describes hope to recover the world from this pandemic. With this ongoing situation the citizens of almost every country are forced into isolation. As people lives are disrupted, isolated and upturned we must prevent this pandemic from turning into a crisis of mental health. We LPU family have taken an initiative to spread hope and happiness across whole world. Creative Beast recognizes this effort of unity and togetherness, and we would like to appreciate our nation for staying put and we bring to you melody of hope, "Hamara india" to bring back smile on every face and keep this spirit of togetherness intact.</p><aside><a href="https://www.youtube.com/watch?v=48XRy0DJ3b0">Watch on Youtube <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></aside>'
]

function loadvid(x){
    switch(x){
        case 1 : s="https://www.youtube.com/embed/9xs7cFVI6qo";
                break;
        case 2 : s="https://www.youtube.com/embed/py1hIMOAWAM";
                break;
        case 3 : s="https://www.youtube.com/embed/wuGRshO-KBc";
                break;
        case 4 : s="https://www.youtube.com/embed/-KCeBpXuxlc";
                break;
        case 5 : s="https://www.youtube.com/embed/dP6NTtWsR54";
                break;
        case 6 : s="https://www.youtube.com/embed/-E21zvd7P3k";
                break;
        case 7 : s="https://www.youtube.com/embed/GlozTAulCTE";
                break;
        case 8 : s="https://www.youtube.com/embed/e9xdbjcgyf8";
                break;
        case 9 : s="https://www.youtube.com/embed/5w-xQzVGj-Q";
                break;
        case 10: s="https://www.youtube.com/embed/48XRy0DJ3b0";
                break;
    }
    
    player.src=s;
    vidinfo.innerHTML=info[x-1];
    playerdiv.style.display="block";
}

/*----------------------------------------------------------------*/

var banbtn = document.getElementById("bannerbtn");
var form = document.querySelector("form");

function formshow(){
        banbtn.style.display="none";
        form.style.display="block";
}
function formhide(){
        banbtn.innerText="Thanks for Participation";
        banbtn.onclick="";
        banbtn.style.display="inline-block";
        form.style.display="none";
}
var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"character"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"character":[["^Choose your character:","\n","ev","str","^Ravi","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Nadid","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"character.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"Ravi"},{"CNT?":"Nadid"},"&&","/ev",{"*":".^.^.c-2","flg":3},{"s":["^Nothing left",{"->":"$r","var":true},null]}],{"c-0":["^ ",{"->":"Ravi"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Nadid"},"\n",{"#f":5}],"c-2":["ev",{"^->":"character.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","end",{"#f":5}]}],{"#f":1}],"Ravi":[["^This is Ravi's story","\n","ev","str","^Chapter 1","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"Ravi.chapter1"},"\n",{"#f":5}]}],{"chapter1":["^Ravi's chapter 1. The end of his story.","\n",{"->":"character"},{"#f":1}],"#f":1}],"Nadid":[["ev","str","^Chapter 1","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Chapter 2","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Chapter 3","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Chapter 6","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Chapter 7","/str",{"CNT?":".^.^.chapter6"},"/ev",{"*":".^.c-4","flg":21},{"c-0":["^ ",{"->":"Nadid.chapter1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Nadid.chapter2"},"\n",{"#f":5}],"c-2":["^ ",{"->":"Nadid.chapter3"},"\n",{"#f":5}],"c-3":["^ ",{"->":"Nadid.chapter6"},"\n",{"#f":5}],"c-4":["^ ",{"->":"Nadid.chapter7"},"\n",{"#f":5}]}],{"chapter1":["^Nothing 1","\n",{"->":"character"},{"#f":1}],"chapter2":["^Nothing 1","\n",{"->":"character"},{"#f":1}],"chapter3":["^Nothing 3","\n",{"->":"character"},{"#f":1}],"chapter6":[["^Family Matters ",{"#":"h1"},"\n",{"#":"intro_ui"},"^Introduction: I didn't really like Gavin at first. He was always acting silly, never taking things seriously, and was a bit sloppy in his appearance. It was only when we both were assigned to a class project that I got to know the real him. And when I did, he surprised me. He was really earnest and genuine beneath that exterior, and he was a really sweet person. I never expected to like someone like Gavin, but by the end of the project, I had a full blown crush on him. And after that last class, when he told me he liked me... well, I felt like my heart was going to explode. We have been dating for about 2 years now, but in secret from most people. Gavin is a Chinese Christian, and I'm a Malay Muslim.","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"Nadid.found_out"},"\n",{"#f":5}]}],{"#f":1}],"found_out":[["^Initially, we were really careful. I made sure that we never held hands in public, and nobody talked about us in school because we kept our distance. After a while, we got careless. Gavin held my hand one day at the bus stop just outside my house. It was just for a few seconds, but that was enough. My pa was across the road at the coffee shop, and he saw. When I got home, he was furious. Pa yelled at me and said that I could never see Gavin again. He made all sorts of threats. He yelled again. I cried and ran into my room to lock the door. I had to talk to Gavin.","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"Nadid.whatsapp"},"\n",{"#f":5}]}],{"#f":1}],"whatsapp":[[{"#":"chat_ui"},"^Gav are you there? I really need to talk. ",{"#":"Nadid"},"\n","^Bae, what's up? I just got home and was going to watch some Netflix. You ok? ",{"#":"Gavin"},"\n",["ev",{"^->":"Nadid.whatsapp.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^My pa saw us holding hands",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^i just need to escape my pa for a while",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Nadid.whatsapp.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"^ and he's super pissed. he hasn't stopped yelling for an hour. ",{"#":"Nadid"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"Nadid.whatsapp.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"^ can you just chat with me? ",{"#":"Nadid"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^dee you know i'm always here for you. this sounds bad... what is he saying? ",{"#":"Gavin"},"\n","^he was so angry. he kept yelling about you not being a good person and then stormed out of the house screaming. like i know what it's really about. he just hates that i'm not dating a muslim boy. ",{"#":"Nadid"},"\n","^even ma started crying. she said some shit about not raising me properly to have values and started praying that i will change like wtf i am happy with who i am and who i am with ",{"#":"Nadid"},"\n",["ev",{"^->":"Nadid.whatsapp.0.g-0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.c-0"},"/ev",{"*":".^.^.c-2","flg":19},{"s":["^i'm angry ",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.g-0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.","/str","/ev",{"*":".^.^.c-3","flg":22},{"s":["^i'm really sad ",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"Nadid.whatsapp.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"^ more than anything. what the hell. i'm 17. i'm not some stupid kid who doesn't know what i want.  ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-3":["ev",{"^->":"Nadid.whatsapp.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"^ why can't they be happy for me? why must holding hands turn into such a bloody fight ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^I'm so sorry dee. don't go back out there unless he comes back in a calm state. Would it help if I came down to talk to them? ",{"#":"Gavin"},"\n","^Oh gav you're such an angel for offering but you're an idiot.... pa will get even more angry if he sees you in person. i don't know what to do. ",{"#":"Nadid"},"\n","^oh shit pa's back. he isn't yelling though. just talking very loudly to ma about you. ",{"#":"Nadid"},"\n","^oh wtf wtf he's using our computer outside to check my instagram which is probably still logged in oh no oh shit  ",{"#":"Nadid"},"\n","^oh shit shit shit. i think they found you. I can hear him saying your name. I can't believe he matched your insta profile to you after seeing you for just a few seconds.  ",{"#":"Nadid"},"\n","^oh no dee, my profile is locked but i have my church role listed in my profile description. oh shit i'm so sorry i'm trying to change it now ",{"#":"Gavin"},"\n","^too late gav. ",{"#":"Nadid"},"\n",["ev",{"^->":"Nadid.whatsapp.0.g-1.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^pa is ranting about your religion",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.g-1.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^pa is getting really upset. i can't tell if he's angry or sad now though ",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"Nadid.whatsapp.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"^, saying \"this boy will never convert for me and that he just wants to do what all teenage boys do and he has no morals\" like how tf does he get that from an insta profile ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-5":["ev",{"^->":"Nadid.whatsapp.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"^... his voice sounds different ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^dee i really can come down right now and talk to him. i'm not scared. i want him to know that i really care about you ",{"#":"Gavin"},"\n","^i think that will make things worse baby. ",{"#":"Nadid"},"\n","^it sounds like they have gone to sleep already. man what a nightmare. i don't know what tomorrow will be like in the morning. sigh why must life be so difficult for us ",{"#":"Nadid"},"\n","^i know dee, i wish people would just be happy for us. even in school i heard amelia say shit about us. they don't even know what we're like, but they all want to talk about whether we will last or not ",{"#":"Gavin"},"\n",["ev",{"^->":"Nadid.whatsapp.0.g-2.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^amelia?! why is she so kaypoh? ",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.g-2.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^sigh unwanted advice? ",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"Nadid.whatsapp.0.g-2.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"^ why is our relationship any of her business and what is she saying about us? ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-3"},{"#f":5}],"c-7":["ev",{"^->":"Nadid.whatsapp.0.g-2.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"^ yeah i know a few people who think they are trying to help but just give shitty advice like we should break up now before things get harder later. ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^sigh ",{"#":"Gavin"},"\n","^you know how much i care about you dee. i wish it was just you and me alone on an island somewhere. none of this shit from other people about what race you are or religion you are. ",{"#":"Gavin"},"\n","^gav are we being too idealistic? is this really how life is going to be for us? always being judged by others and always fighting with my parents? ",{"#":"Nadid"},"\n","^are they right? I mean, pa's cousin married a french guy and he converted and all, but after their first kid they just had so many differences that they ended up divorced. i guess the whole family is just against marrying non-Muslims because of that one case ",{"#":"Nadid"},"\n","^oh man, sorry about your dad's cousin. was it because of religious differences? ",{"#":"Gavin"},"\n","^actually nobody knows why. she never moved back from France even after the divorce, and it's just easier to blame his lack of muslim values than to say that they weren't compatible. i mean she's not the only person in my extended family who is divorced anyway but nobody talks about those other ones because both members were muslim. like wtf man ",{"#":"Nadid"},"\n","^i mean tbh i think life will be a bit harder for both of us. my parents are really christian, and you know i'm super active in church too. we never really discussed this. i mean we're only 18 right... this shit is heavy for a weekday night ",{"#":"Gavin"},"\n",["ev",{"^->":"Nadid.whatsapp.0.g-3.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^yeah we're still young ",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.g-3.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.c-0"},"/ev",{"*":".^.^.c-9","flg":19},{"s":["^wait do you think we won't work out? ",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.g-3.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^so do you think we'll make it? ",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"Nadid.whatsapp.0.g-3.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"^ there's no need to discuss all this stuff right now. ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-4"},{"#f":5}],"c-9":["ev",{"^->":"Nadid.whatsapp.0.g-3.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"^ is that what you mean when you say that we're \"only\" 18? ",{"#":"Nadid"},"\n","^dee that's totally not what i meant. you know this is a big deal and we aren't ready to make these life decisions yet ",{"#":"Gavin"},"\n",{"->":".^.^.^.g-4"},{"#f":5}],"c-10":["ev",{"^->":"Nadid.whatsapp.0.g-3.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"^ i hope we do ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^dee I don't know... i mean i never really thought about that. i do care about you a lot and i think we could be happy together. ",{"#":"Gavin"},"\n","^I mean, I'm christian dee. I don't really know much about islam but I think I'll have to convert right? I don't what that involves, and my parents will definitely have issues. It's not that I'm against it, I just haven't thought about it. ",{"#":"Gavin"},"\n",["ev",{"^->":"Nadid.whatsapp.0.g-4.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^gav what if your parents find out? do you think they would react even worse? ",{"->":"$r","var":true},null]}],["ev",{"^->":"Nadid.whatsapp.0.g-4.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":18},{"s":["^gav what if this is all a mistake? what if they are all right and this can't work? ",{"->":"$r","var":true},null]}],{"c-11":["ev",{"^->":"Nadid.whatsapp.0.g-4.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"#":"Nadid"},"\n","^i don't know dee.. they might. i mean, i'm the only child and i don't have cousins so i really don't know how they'll handle an inter-cultural relationship. ",{"#":"Gavin"},"\n",{"->":".^.^.^.g-5"},{"#f":5}],"c-12":["ev",{"^->":"Nadid.whatsapp.0.g-4.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"#":"Nadid"},"\n","^I don't know dee... i mean, dating you is amazing but i don't know what marriage takes and raising a family and all. i don't know if our cultural differences matter, or if our love matters more ",{"#":"Gavin"},"\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^this is really heavy dee ",{"#":"Gavin"},"\n","^gav, i'm scared. i don't want to lose you but i want our life to be happy ",{"#":"Nadid"},"\n","ev","str","^gav should we end this early while we still can?","/str","/ev",{"*":".^.c-13","flg":20},"ev","str","^gav should we just continue dating and see where it goes","/str","/ev",{"*":".^.c-14","flg":20},["ev",{"^->":"Nadid.whatsapp.0.g-5.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-15","flg":18},{"s":["^gav who cares what the parents think. this is our life not theirs. ",{"->":"$r","var":true},null]}],{"c-13":["^ gav what if this is destined to end in heartbreak? i don't want to lose both my best friend and my boyfriend at once. maybe it's best we just part as friends rather than get into all these fights with our family and suffer a life of hardships? ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-6"},{"#f":5}],"c-14":["^ gav i think you're right, we're only 18. let's take this one step at a time. i want you and you want me... that's step 1. we'll get to step 2 about marriage and all that another day... and hopefully by then, if we have been together long enough, our parents can see that we're going to make this work, and they will come around. it will take time, but it's worth it. ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-6"},{"#f":5}],"c-15":["ev",{"^->":"Nadid.whatsapp.0.g-5.c-15.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"^ let's just ignore them and do what we think is right for us. and if that ends in marriage, then so be it. ",{"#":"Nadid"},"\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":["^dee you know i'm here for you no matter where this goes. ",{"#":"Gavin"},"\n","^This is the end of chapter 6.","\n","ev","str","^Continue to Chapter 7","/str","/ev",{"*":".^.c-16","flg":20},"ev","str","^Go back to Character Choice","/str","/ev",{"*":".^.c-17","flg":20},{"c-16":["^ ",{"->":"Nadid.chapter7"},"\n",{"#f":5}],"c-17":["^ ",{"->":"character"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"chapter7":[["^nothing here yet 7","\n","ev","str","^Go back to Character Choice","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"character"},"\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"#f":1}],"listDefs":{}};
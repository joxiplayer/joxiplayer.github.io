'use strict'

window.onload = () =>{

    const getSongs = (()=>{


            const songs = [
                {
                    name : 'Angin Datang',
                    artist : 'KABAR-BALE PULANG',
                    image :'all/angin-datang-kasih.jpg',
                    songUrl :'all/angin-datang-kasih-kabar.mp3',
                    duration :'03 : 26'
                },
                {
                    name : 'Kejar Mimpi',
                    artist : 'Maudy Ayunda',
                    image :'populer/Kejar-Mimpi.png',
                    songUrl :'all/kejar-mimpi.mp3',
                    duration :'04 : 11' 
                },
                {
                    name : 'Menepi',
                    artist : 'Woro Widowati',
                    image :'populer/menepi.png',
                    songUrl :'populer/menepi.mp3',
                    duration :'04 : 49' 
                },
                {
                    name : 'Cinta Luar Biasa',
                    artist : 'Andmesh Kamaleng',
                    image :'populer/Cinta-Luar-Biasa.jpg',
                    songUrl :'populer/cinta-luar-biasa.mp3',
                    duration :'04 : 31' 
                },
                {
                    name : 'Bukti',
                    artist : 'Virgoun',
                    image :'populer/bukti.jpg',
                    songUrl :'populer/bukti.mp3',
                    duration :'04 : 49' 
                },
                {
                    name : 'Here Your Perfect',
                    artist : 'Jamie Miller',
                    image :'all/here-your-perfect.jpg',
                    songUrl :'all/here-your-perfect.mp3',
                    duration :'03 : 07' 
                },
                {
                    name : 'Nightcore Thunder',
                    artist : 'Gabry Ponte, LUM!X',
                    image :'all/nightcore-thunder.jpg',
                    songUrl :'all/nightcore-thunder.mp3',
                    duration :'02 : 25'
                },
                {
                    name : 'Berawal Dari Tmn',
                    artist : 'BULAN SUTENA',
                    image :'all/berawal-dari-temenan.jpg',
                    songUrl :'all/berawal-dari-temenan.mp3',
                    duration :'09 : 23' 
                },
                {
                    name : 'SIDE TO SIDE',
                    artist : 'WILFEXBOR',
                    image :'all/side-to-side.jpg',
                    songUrl :'all/side-to-side.mp3',
                    duration :'04 : 32' 
                },
                {
                    name : 'Rude',
                    artist : 'MAGIC!',
                    image :'all/rude.jpg',
                    songUrl :'all/rude.mp3',
                    duration :'05 : 10' 
                },
                {
                    name : 'To The Bone',
                    artist : 'Pamungkas',
                    image :'all/to-the-bone.jpg',
                    songUrl :'all/to-the-bone.mp3',
                    duration :'05 : 53' 
                },
                {
                    name : 'Andaikan Engkau',
                    artist : 'Youtube',
                    image :'all/andaikan-engkau-tau.jpg',
                    songUrl :'all/andaikan-engkau-tau.mp3',
                    duration :'40 : 48' 
                },
                {
                    name : 'Beta Janji',
                    artist : 'JANJI PUTIH',
                    image :'all/beta-janji.jpg',
                    songUrl :'all/beta-janji-beta-jaga.mp3',
                    duration :'35 : 36' 
                },
                {
                    name : 'Segera Hadir',
                    artist : 'Segera Hadir',
                    image :'segera-hadir.jpg',
                    songUrl :'segera-hadir.mp3',
                    duration :'00 : 02' 
                },



            ]

            const randomSong = [
                        
                {
                    name : 'Bukti',
                    artist : 'Virgoun',
                    image :'populer/Kejar-Mimpi.png',
                    songUrl :'populer/bukti.mp3',
                    duration :'04 : 49' 
                },
                
            ]

            const animeSong = [
                        
                {
                    name : 'Wonderland',
                    artist : 'Alffy Rev',
                    image :'all/wonderland.jpg',
                    songUrl :'all/wonderland.mp3',
                    duration :'10 : 52' 
                },
                {
                    name : 'Money',
                    artist : 'Lisa',
                    image :'all/money.jpg',
                    songUrl :'all/money.mp3',
                    duration :'02 : 48' 
                },
            ]

            let getRecommendedSong =[{}];
            const randomValue = Math.floor(Math.random() * randomSong.length);
            getRecommendedSong[0] = randomSong[randomValue];
    
            

            return {
            songs,
            animeSong,
            randomSong,
            getRecommendedSong
            }


    })();



    const DOMStrings = (()=>{
        

        const DOMString = {
            navMenu : document.querySelector('.nav-sec'),
            navOpenBtn : document.querySelector('.navOpen-btn'),
            musicContainer : document.querySelector('.music-sec'),
            slider : document.querySelectorAll('.music-con__list'),
            audioFullScreen : document.getElementById('audio-player-fullscreen'),
            openFullScreen : document.querySelector('.music-controller'),
            fullScreenCloseBtn : document.querySelector('.audio-player__close-btn'),

            audioPlayer : document.querySelector(".audio"),
            audioProgressBar : document.querySelectorAll(".music-controller__progress-bar"),
            audioProgressBarFill : document.querySelectorAll('.music-controller__progress-bar-fill'),
            audioListParent : document.querySelectorAll('.music-con__list'),
            audioHorListParent : document.querySelector('.music-hor__list'),
            recommendedImage : document.getElementById('recommended-image')
        }

        const audioBtnCtrl = {
            audioPlayer : document.getElementById('audio'),
            prevBtn : document.querySelectorAll('.audio-prev-btn'),
            playPauseBtn : document.querySelectorAll('.audio-play-pause-btn'),
            nextBtn : document.querySelectorAll('.audio-next-btn'),
            audioImage : document.querySelectorAll('.audio-image'),
            audioName : document.querySelectorAll('.audio-name'),
            audioSingerName : document.querySelector('.audio-singer-name'),
            audioShuffle : document.querySelectorAll('.audio-shuffle'),
            audioVolume : document.querySelectorAll('.audio-volume'),
            audioRepeat: document.querySelectorAll('.audio-repeat'),
            audioCurrentDuration : document.getElementById('current-duration'),
            audioEndDuration : document.getElementById('end-duration'),
            recommendedPlayBtn : document.getElementById('recommended-play-btn'),
        
        }


        return{
            DOMString,
            audioBtnCtrl,

        }


    })();


    const AnimationClass = (()=>{

        const nav = {
                open : 'nav-open-animation',
                close : 'nav-close-animation'
            }

            return{
                nav
            }

    })();


    const UIController = ((DOMStrings,AnimationClass,getSongs)=>{


        

                
            const DOM = DOMStrings.DOMString , 
                        navMenu = DOM.navMenu ,
                        navBtn = DOM.navOpenBtn , 
                        slider = DOM.slider , 
                        songs = getSongs.songs;

            // Set Cover


            DOM.recommendedImage.src = `img/${getSongs.getRecommendedSong[0].image}`

            
            const swipeUp = new Hammer(DOM.openFullScreen);
            swipeUp.get('swipe').set({direction : Hammer.DIRECTION_ALL});

            const swipeDown = new Hammer(document.body);
            swipeDown.get('swipe').set({direction : Hammer.DIRECTION_ALL});
        
                 // Navigation Start 
              const navOpenAndClose = (isClose) =>{

                    const isNavBtnVisible = window.getComputedStyle(navBtn).visibility;

                    if(window.getComputedStyle(navMenu).width === '0px' && isClose ==false)
                        return;

                    if(isNavBtnVisible === 'visible'){
                        navMenu.classList.remove(AnimationClass.nav.open);
                        navMenu.classList.remove(AnimationClass.nav.close);
                        const animation = isClose ? AnimationClass.nav.open : AnimationClass.nav.close;
                        navMenu.classList.add(animation);
                    }

                }

    
            swipeUp.on('swipeup',() =>{
                navOpenAndClose(false)
                DOM.openFullScreen.setAttribute('style','height : 100% ; opacity : 0;z-index:8')
                DOM.audioFullScreen.setAttribute('style','height : 100% ; opacity : 1 ; z-index:10')
            });

            swipeDown.on('swipedown', () =>{
                DOM.openFullScreen.setAttribute('style','height : 4.6rem; opacity : 1;z-index:10')
                DOM.audioFullScreen.setAttribute('style','height :0 ; opacity :0;z-index:8')
            });
            
           
            
            navBtn.addEventListener('click',navOpenAndClose.bind(null,true));

            DOM.musicContainer.addEventListener('click',navOpenAndClose.bind(null,false));

            DOM.openFullScreen.addEventListener('click',navOpenAndClose.bind(null,false));
        
            DOM.musicContainer.addEventListener('touchstart',navOpenAndClose.bind(null,false));

            DOM.openFullScreen.addEventListener('touchstart',navOpenAndClose.bind(null,false));
        
          
            // Navigation End 

            // Music Horizonatal Slider Start

        
            let isDown, startX, scrollLeft;

            isDown = false;
        
        
            slider.forEach(btn => btn.addEventListener('mouseleave', () => isDown = false ));
        
            slider.forEach( btn => btn.addEventListener('mouseup', () => isDown = false ));

            slider.forEach( btn => {
                btn.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - btn.offsetLeft;
                    scrollLeft = btn.scrollLeft;
                });
            });
        
        
            slider.forEach( btn => {
                btn.addEventListener('mousemove', (e) => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - btn.offsetLeft;
                    const walk = (x - startX) * 3; //scroll-fast
                    btn.scrollLeft = scrollLeft - walk;
                });
            });

            // Music Horizonatal Slider Start 


            // Add Song UI 


            const addListUI = ( listChange , i)  =>{ 

                const content = `<div class="music-con__item">
                                <div class="music-con__img">
                                    <img src="img/${songs[i].image}" alt="">
                                    <span class="music-con__play-btn">
                                        <span class="material-icons play-btn">
                                            play_circle_outline
                                        </span>
                                    </span>
                                </div>
                                <div class="music-list__text">
                                    <h3 class="heading-3"> ${songs[i].name} </h3>
                                    <p class="music-artist-name">  ${songs[i].artist} </p>
                                </div>
                            </div>`;

                DOM.audioListParent[listChange].insertAdjacentHTML('beforeend',content); 
            }

                for(let i = 0 ; i < 6 ; i++ ){
                        addListUI(0 , i);
                }

                for(let i = 6 ; i < getSongs.songs.length ; i++ ){
                    addListUI(1 , i);
            }
    
            
            // List UI Added

            for(let i in getSongs.animeSong){

                    const content = `<div class="music-hor__item">
                                        <div class="music-hor__item-inner">
                                            <img src="img/${getSongs.animeSong[i].image}" class="music-hor__img">
                                            <h3 class="music-artist-name">${getSongs.animeSong[i].name}</h3>
                                        </div>
                                        <div class="music-hor__item-inner"> 
                                            <p class="music-hor__music-duration">${getSongs.animeSong[i].duration}</p>                  
                                        </div>
                                    </div> `;
                    
                    DOM.audioHorListParent.insertAdjacentHTML('beforeend',content); 

            }



    })(DOMStrings,AnimationClass,getSongs);


    // Music Contol Model 


    const musicController = ((DOMStrings,getSongs) => {

        const DOM = DOMStrings.DOMString , player = DOM.audioPlayer , audioCtrl = DOMStrings.audioBtnCtrl ,
        musicHoriList  =  document.querySelectorAll('.music-hor__item'),
        musicItems = document.querySelectorAll('.music-con__item') ;
        let currenPlayingSongIndex = 0 , currenListObject = getSongs.songs;

        const volume = {
            off : `<span class="material-icons">
                    volume_off
                </span>`,
            on :`<span class="material-icons">
                    volume_up
                </span>`
        },
        
        HTML = {

            pause : `<span class="material-icons">
                    pause_circle_filled
                    </span>
                    ` ,
            play : ` <span class="material-icons">
                        play_circle_filled
                    </span> `
        }
        
        

        DOM.audioProgressBar.forEach(btn =>{
                btn.addEventListener("click", function seek(e){
                    let percent = e.offsetX / this.offsetWidth;
                    let seekTime = percent * player.duration;
                    player.currentTime = isNaN(seekTime) ? 0.0 : seekTime;
                    DOM.audioProgressBar.value = percent / 100;
                });
        });

        player.addEventListener('timeupdate', ()=>{
            var duration =  player.duration;
        
            if (duration > 0) {
                DOM.audioProgressBarFill.forEach( btn => btn.style.width = ((player.currentTime / duration)*100) + "%" );
            }

            const d = player.currentTime;
            let hours = Math.floor(d / 3600);
            let minutes = Math.floor(d % 3600 / 60);
            let seconds = Math.floor(d % 3600 % 60);

            hours = (hours === 0) ? '' : (zeroPrefixer(hours) + ' : ');

            audioCtrl.audioCurrentDuration.textContent = hours + zeroPrefixer(minutes) + ' : ' + zeroPrefixer(seconds);
    
        });

        const zeroPrefixer = n => ( n < 10) ? ('0'+n) : n ;


        audioCtrl.playPauseBtn.forEach( btn =>{
            btn.addEventListener('click', () => audioCtrl.audioPlayer.paused ?  audioPlayEnable() : audioPlayDisable() );
        });

        

        const audioPlayEnable = () =>{
            audioCtrl.playPauseBtn.forEach( btn => btn.innerHTML = HTML.pause);
            var playPromise  = audioCtrl.audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                }).catch(error => { });
            }
        };

        const audioPlayDisable = () =>{
            audioCtrl.playPauseBtn.forEach( btn => btn.innerHTML = HTML.play);
            audioCtrl.audioPlayer.pause();
        };


        //Set Data Current Playing Music

        const updateAudio = (index) =>  {
                const songObject = currenListObject[index];
                audioCtrl.audioName[0].textContent = songObject.name;
                audioCtrl.audioName[1].textContent = songObject.name;
                audioCtrl.audioImage[0].src = `img/${songObject.image}`;
                audioCtrl.audioImage[1].src = `img/${songObject.image}`;
                audioCtrl.audioSingerName.textContent = songObject.artist;
                audioCtrl.audioPlayer.src =`mp3//${songObject.songUrl}`;
                audioCtrl.audioEndDuration.textContent = songObject.duration;
                DOM.audioProgressBarFill.forEach( btn => btn.style.width = 0 + "%" );
                audioPlayEnable();    
                
        }




        musicItems.forEach( (item, index) => {
                item.addEventListener('click',()=>{
                    currenListObject = getSongs.songs;
                    currenPlayingSongIndex = index;
                    updateAudio(index);    
                });
        });

        

        musicHoriList.forEach( (item, index) => {
            item.addEventListener('click',()=>{
                currenListObject = getSongs.animeSong;
                currenPlayingSongIndex = index;
                updateAudio(index);  
            });
        });



        audioCtrl.recommendedPlayBtn.addEventListener('click',()=>{
            currenListObject = getSongs.getRecommendedSong;
            currenPlayingSongIndex = 0;
            updateAudio(0)
        })



        audioCtrl.nextBtn.forEach( btn =>{
            btn.addEventListener('click',() =>{
                if( currenPlayingSongIndex === currenListObject.length-1)
                    currenPlayingSongIndex = -1;      
                updateAudio(++currenPlayingSongIndex);
            });  

        });

        audioCtrl.prevBtn.forEach( btn =>{
            btn.addEventListener('click',() =>{
                if( currenPlayingSongIndex === 0)
                    currenPlayingSongIndex = currenListObject.length;
                updateAudio(--currenPlayingSongIndex);
            });
        });


    
        audioCtrl.audioPlayer.addEventListener("ended",() =>{
            if(audioCtrl.audioRepeat[0].className.includes('audioSuffle')){
                updateAudio(currenPlayingSongIndex) ;
                return;
            }
            if( currenPlayingSongIndex === currenListObject.length-1)
                    currenPlayingSongIndex = -1;   
            updateAudio(++currenPlayingSongIndex) 
        });

    

        audioCtrl.audioVolume.forEach( btn =>{
            btn.addEventListener('click',() =>{
            const isMuted = audioCtrl.audioPlayer.muted;
            audioCtrl.audioPlayer.muted = !isMuted;
            const icon = isMuted ? volume.on : volume.off;
            audioCtrl.audioVolume[0].innerHTML = icon;
            audioCtrl.audioVolume[1].innerHTML = icon;
            navigator.vibrate(100);
            });
        });

        let isShuffleModeEnable = false;

        audioCtrl.audioShuffle.forEach( btn =>{
            btn.addEventListener('click',() =>{
                audioCtrl.audioShuffle[0].classList.toggle('audioSuffle');
                audioCtrl.audioShuffle[1].classList.toggle('audioSuffle');
                
                if(isShuffleModeEnable){
                    isShuffleModeEnable = false;
                    if( currenListObject.length === getSongs.songs.length)
                        currenListObject = getSongs.songs;
                    else if( currenListObject.length === getSongs.animeSong.length)
                        currenListObject = getSongs.animeSong;
                    else if( currenListObject.length === getSongs.getRecommendedSong.length)
                        currenListObject = getSongs.getRecommendedSong;
            
                }else{
                    currenListObject = shuffle(currenListObject);
                    isShuffleModeEnable = true;
                }

            });
        });


        function shuffle(array) {
            let currentIndex = array.length,
                temporaryValue, randomIndex,
                newArray = new Array(...array);
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = newArray[currentIndex];
            newArray[currentIndex] = newArray[randomIndex];
            newArray[randomIndex] = temporaryValue;
            }
        
            return newArray;
        }
        

        audioCtrl.audioRepeat.forEach( btn =>{
            btn.addEventListener('click',() =>{
                audioCtrl.audioRepeat[0].classList.toggle('audioSuffle');
                audioCtrl.audioRepeat[1].classList.toggle('audioSuffle');
            })
        })



        updateAudio(0); //set First Song
        audioPlayDisable();

    })(DOMStrings,getSongs);


    setTimeout(() => {

        const loader  = document.querySelector('.loading-sec');
        loader.setAttribute('style','opacity : 0');
        setTimeout(() => {
            loader.remove();
        }, 1000);   
        
    }, 3000);
 

}

const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000); //Popup the screen in 02 seconds after the page is loaded.
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active"); //Close the popup screen on click the close button.
  //Create a cookie for a day (to expire within a day) on click the close button.
  document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
});

//Use the created cookie to hide or show the popup screen.
const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if(WebsiteCookie != -1){
  popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
}
else{
  popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
}
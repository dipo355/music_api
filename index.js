const express = require("express")
const app = express()
const PORT = 1000
app.listen(PORT , (err) => {
    if (err) (console.log("port not started") )
    else(console.log("port successfully opened"))    
})
app.get("/" , (req,res) => {
    res.send([
       {
        MusicTitle : "Constantly ",
        Artists : "BoyPee & Brown Joel",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/08/29/73fc90ead91c481f8994a16a4545cbd1H2560W2560_464_464.webp",
        Music : "https://www.boomplay.com/songs/178678664?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },

    {
        MusicTitle : "Bundle By Bundle",
        Artists : "Burna Boy",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/12/17/0359b411f56440568a58dbac5d3e174cH1600W1600_464_464.webp",
        Music : "https://www.boomplay.com/songs/193928123?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },

    {
        MusicTitle : "Port-harcourt",
        Artists : "vicoka",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/09/17/440e05372c0a4e7eb2e696d337e2360fH3000W3000_464_464.webp",
        Music : "https://www.boomplay.com/songs/182338406?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },

    {
        MusicTitle : "Feel D Mood",
        Artists : "Outsyd DJ",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/11/04/1167c083a01744479397bf1372def293H3000W3000_464_464.webp",
        Music : "https://www.boomplay.com/songs/187060166?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    }, 
    
    {
        MusicTitle : "juju",
        Artists : "Smur Lee & shallipoppi",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/08/27/46b5a4a3fe22489799c5e6f6c623711bH1500W1500_464_464.webp",
        Music : "https://www.boomplay.com/songs/179105837?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    }, 
    
    {
        MusicTitle : "Ozeba",
        Artists : "Rema",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/07/09/f59157f0274e40339c92cacf7aabc671_464_464.webp",
        Music : "https://www.boomplay.com/songs/173915787?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },  
    
    {
        MusicTitle : "Marhaba",
        Artists : "Kizz Daniel",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/09/23/13927482d17240d992a68adcb186fa91H2560W2560_464_464.webp",
        Music : "https://www.boomplay.com/songs/182530166?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },

    {
        MusicTitle : "Orobo",
        Artists : "Khaid",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/09/21/5c6bddde277b4ed7bb5028b2f5aa504dH3000W3000_464_464.webp",
        Music : "https://www.boomplay.com/songs/182929003?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },  
    
    {
        MusicTitle : "Stronger",
        Artists : "Young Jonn",
        AlbumLogo : "https://source.boomplaymusic.com/group10/M00/04/09/9ce167ddcb474bafa2e5525234aa9a78_464_464.webp",
        Music : "https://www.boomplay.com/songs/163256359?srModel=COPYLINK&srList=WEB",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    },

    {
        MusicTitle : "",
        Artists : "Davido,  ODUMODUBLVCK ,Chike",
        AlbumLogo : "https://www.val9ja.com.ng/wp-content/uploads/2024/12/Davido-5IVE-Album-1024x1024.webp",
        Music : "https://cdn.val9ja.com/wp-content/uploads/2024/12/Davido_Ft_ODUMODUBLVCK_Chike_-_Funds.mp3",
        Genre : "afrobeats",
        YearOfRelease : "2024"
    }
    ])
})
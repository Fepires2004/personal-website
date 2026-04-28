export interface BlogPost {
  title: string
  artist: string
  album: string
  duration: string
  image: string
  images?: string[]
  video?: string
  audio?: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "VR World",
    artist: "Fernando",
    album: "04/28/2026",
    duration: "X Words",
    image: "/IMG_4493.mp4",
    video: "/IMG_4493.mp4",
    images: ["/fullMap.png", "/endPOV.png", "/cSharpAttempt.png"],
    content: "For the VR world, I decided to make a driving game, where the user controls a car using WASD to either, drive around the spawn island, or drive up the ramp, in which if they fall, they go into the limbo, but if they get to the end, they get fireworks.\n\nOriginally, instead of fireworks, I intended to make a message saying \"You Won!\" pop up after the user goes into the downwards ramp. To make this, I tried using C#, and as Mr. Von Hollen had warned, most students would struggle, I indeed were like most students and struggled. You can see on one of the images the settings I had for the trigger, which failed. This is the reason I resorted to fireworks at the end.\n\nFor the car, I added deacceleration and acceleration noises to make the driving experience more interactive.\n\nFor the sky, I downloaded Fantasy Skybox Free from the asset store (https://assetstore.unity.com/packages/2d/textures-materials/sky/fantasy-skybox-free-18353).\n\nAt the end, when actually using the VR, I had some issues rendering some of the packets I had imported, where the staff at the Innovation Hub assisted me in fixing."
  },
  {
    title: "Silverware Organizer",
    artist: "Fernando",
    album: "04/27/2026",
    duration: "X Words",
    image: "/IMG_4494.mp4",
    video: "/IMG_4494.mp4",
    content: "My biggest struggle with printing my silverware organizer was that I didn't remember the size of the 3D printer, therefore my object was simply too big. I ended up cutting it into 6 pieces to make sure its printable, and that eventually led us to our final product. Another struggle I had in the middle of one of my six prints, I got an error (Printer error 1171: The job was canceled locally or failed due to an unknown reason) when my print was around 15% done. Since it seemed like a malfunction, I just printed the same piece later on and it ended up working out!"
  },
  {
    title: "Fabricating for a Function",
    artist: "Fernando",
    album: "04/22/2026",
    duration: "X Words",
    image: "/fabricating-function-part2-cover.png",
    content: "The hardest part of this wasn't actually on fusion, it was measuring my cabinet without a ruler (which I don't own). I asked an LLM what the dimensions of a Torani vanilla syrup bottle is. After that, I took a picture of the cabinet, with the Torani bottle inside so that the LLM can use it as reference, then proceeded to ask for the dimensions, which was 393 mm x 373 mm.\n\nFor the outer dimensions, it's 388mm x 320mm x 45mm, 2.5mm thick for the wall and 2.0mm thick for the floor. As per the interior dimensions, for the top knife it's 309mm x 100mm, for the main slots it's 75mm x 215 mm, and for the side knife one it's 70 x 315 mm."
  },
  {
    title: "Sound",
    artist: "Fernando",
    album: "04/15/2026",
    duration: "X Words",
    image: "/SoundAssignment.wav",
    audio: "/SoundAssignment.wav",
    content: "For this assignment, I modified my own voice using the distorted effect on Audacity, as well as included two sounds from the internet, one of water running and one of birds chirping."
  },
  {
    title: "3D Printing",
    artist: "Fernando",
    album: "04/08/2026",
    duration: "X Words",
    image: "/IMG_4421.mp4",
    video: "/IMG_4421.mp4",
    content: "For the 3D printing project I would like to do an organize for my silverware, as I have some that are too long to fit in, I'd like to add a horizontal part to it at the bottom that would allow for them to fit sideways."
  },
  {
    title: "Fusion",
    artist: "Fernando",
    album: "04/07/2026",
    duration: "X Words",
    image: "/fusion-1.png",
    images: ["/fusion-1.png", "/fusion-2.png", "/fusion-3.png", "/fusion-4.png", "/fusion-7.png", "/fusion-6.png", "/fusion-5.png"],
    content: "For the box I simply followed the tutorial so it wasn't that complicated.\n\nFor the lampshade I simply drew a sketch of a lampshade I have back home, very simple design and very simply implemented it on Fusion.\n\nFor the flask, we built it in class, the one thing I struggled with was making the beak, therefore I left it the same way I did it for the TinkerCAD one, a more curbed beak.\n\nFor the bowler hat, I struggled with getting the oval shape instead of a spherical one, but besides that, the hat has a curved brim as well as a round top (unlike a Top Hat)."
  },
  {
    title: "CAD Assignment",
    artist: "Fernando",
    album: "03/23/2026",
    duration: "X Words",
    image: "/cad-assignment-1.png",
    images: ["/cad-assignment-1.png", "/cad-assignment-2.png", "/cad-assignment-3.png", "/cad-assignment-4.png", "/cad-assignment-5.png"],
    content: "For the first object, I followed the tutorial (math version) which was very intuitive, but struggled a little bit as I accidentally forgot to add a line and kept getting a \"wire is not closed\" error when doing the last step, after reviewing the steps again I realized my mistake, fixed it, and looks great!\n\nFor the second object, instead of making a cable manager which clips onto the table, which would be very complicated for a Free CAD beginner like me, I decided to do something simple like a C-shaped holder, which could hang off my desk. It shouldn't move as cables are pushing against it on the way up, however, if one is scared of it falling, simply adding weight on top of it would secure it. One nice addition could be having a wireless charger on top, where your smartphone would be used as weight to keep the platform stable.\n\nFor the third object, I decided on something fun, a Lego-style piece. To make sure that the piece when joined together wouldn't fall, I had to use slightly different measurements for each piece so that they're able to stick to each other properly. With the stud being 4.8mm, and the tube being 5.2mm in diameter, that 0.4mm discrepancy is the gap that allows for the pieces to fit together and not fall off."
  },
  {
    title: "3D Modeling",
    artist: "Fernando", 
    album: "03/10/2026", 
    duration: "X Words",
    image: "/3d-modeling-logo.png",
    images: ["/3d-modeling-1.png", "/3d-modeling-2.png", "/3d-modeling-3.png", "/3d-modeling-4.png", "/3d-modeling-5.png", "/3d-modeling-6.png", "/3d-modeling-7.png", "/3d-modeling-8.png", "/3d-modeling-9.png"],
    content: "I had fun working on these models, especially during the aviators as they were very challenging. I hadn’t used any CAD software since freshman year of high school so it was cool to work on it again.\n\nPVC: Two cylinders against each other hollowed out.\n\nEgg: Two half circles hollowed, with one longer than the other.\n\nFlash Drive: Blue square with one white rectangle on each side representing the sticker, and one gray rectangle on each side with a hollowed-out rectangle. I struggled a bit with the circle in the middle, but used a flattened sphere to hollow it out and fill it with a gray circle.\n\nChopstick: I elongated a paraboloid, hollowed out the top by using a square, then copied and pasted it to make the second one.\n\nFlask: I grouped a sphere, cone, and cylinder together, as well as filling it with a smaller copy of the actual flask on the inside to make the red liquid. I made sure the flask was transparent so that the liquid is visible.\n\nBowler Hat: I used a shortened cylinder with a half circle on top, surrounded by a flattened torus and a curved ring for the brim. I made a copy of it and made it smaller to hollow out the inside.\n\nAviator: I made long rectangles for the handles and skinnier cubes for the lens, then cut them up with rotated cubes to make them look more circular. I used an extrude sketch to make my own piece for the gel holder, then a transparent paraboloid for the gel. In the middle of both lenses, I used a flattened rectangle and a round roof."
  },
  { 
    title: "Teamwork", 
    artist: "Fernando", 
    album: "02/11/2026", 
    duration: "X Words",
    image: "/IMG_4157.PNG",
    content: "Throughout this project my group and I discussed ideas of what to make for our project, and we came to the conclusion that since we're begginers we should do a simple game, like snake. Leveraging Cursor and Android Studio we were able to develop a game with three screens, that lets you play with a D-pad.\n\nWe worked together in deciding small but nice features to add, for example, the snake changes color each time it gets a point, adding a countdown before the game actually starts, or even shaking your phone to restart playing the game.\n\nOverall, I had a great time working with my group in this project as I would never be creative enough to think of some of the features we implemented.\n\n Our app is fully functional and ready to be deployed to the Android Play Store."
  },
  { 
    title: "App Development", 
    artist: "Fernando", 
    album: "01/27/2026", 
    duration: "X Words",
    image: "/Screenshot 2026-01-27 at 6.03.35 PM.png",
    content: "For this week's blog post, I built an iOS app on Expo Go, using React Native and Typescript. It's a very simple app that's just meant to simulate the LinkedIn user experience.\n\nI have started by populating it with funny posts, as you can see we'll be having Microsoft's CEO, Satya Nadella as a guest speaker next class! I want to further work on it as a comedy platform, using an LLM API to generate a funny post everytime I load the app."
  },
  { 
    title: "First Blog Post", 
    artist: "Fernando", 
    album: "01/22/2026", 
    duration: "X Words",
    image: "/IMG_4064_fixed.png",
    content: "My name is Fernando De Abreu Pires, I'm originally from Brazil and moved here to the U.S. when I was 10 years old, now I'm a senior here at FSU studying Finance and Management Information Systems.\n\nUpon graduation, I'll be working at Citibank as a Trader in New York City, living with fellow bum, Bruno. In my free time, I like to vibecode, go to the gym, and watch soccer.\n\nI chose to take this course because I have a strong passion with keeping up with emerging technologies, and the opportunity to be exposed to it in-person fascinated me; coincidentally, it fulfills my SIP credit requirement. \n\nAttached is an image of my excuse for missing Tuesday's and Thursday's classes."
  },
]

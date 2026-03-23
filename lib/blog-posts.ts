export interface BlogPost {
  title: string
  artist: string
  album: string
  duration: string
  image: string
  images?: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "CAD Assignment",
    artist: "Fernando",
    album: "03/23/2026",
    duration: "X Words",
    image: "/cad-assignment-1.png",
    images: ["/cad-assignment-1.png", "/cad-assignment-2.png", "/cad-assignment-3.png", "/cad-assignment-4.png"],
    content: ""
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

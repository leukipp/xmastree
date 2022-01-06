# GIFTSIMv1.0

This folder contains a simulator used for Matt's 2021 Christmas tree, as featured in ["My 500-LED xmas tree got into Harvard."](https://youtu.be/WuMRJf6B5Q4).

Light coordinates and animations can be loaded and visualized using remote urls or local `.csv` files.  
A simple http server is sufficient to run the simulation, no other backend is needed.  


## Online [![browser](https://img.shields.io/badge/browser-gray?logo=googlechrome&logoColor=white)](#Online) [![status](https://img.shields.io/badge/status-up-brightgreen)](#Online)

An online version of the simulation can be found [here](https://leukipp.github.io/xmastree/files/simulator/).
[![app](/jupyter/files/simulator/img/app.gif)](https://leukipp.github.io/xmastree/files/simulator/)

Settings can be changed by hash parameters as shown in the examples below.

### Load coordinates from url
[https://leukipp.github.io/xmastree/files/simulator/#coordinates=https://raw.githubusercontent.com/standupmaths/xmastree2021/main/coords_2021.csv](https://leukipp.github.io/xmastree/files/simulator/#coordinates=https://raw.githubusercontent.com/standupmaths/xmastree2021/main/coords_2021.csv)

### Load animations from url
[https://leukipp.github.io/xmastree/files/simulator/#animations=https://raw.githubusercontent.com/GSD6338/XmasTree/main/02_sequencing/moving-rotating-rainbow.csv](https://leukipp.github.io/xmastree/files/simulator/#animations=https://raw.githubusercontent.com/GSD6338/XmasTree/main/02_sequencing/moving-rotating-rainbow.csv)

### Disable tree and glow
[https://leukipp.github.io/xmastree/files/simulator/#tree.visible=false&light.glow=false](https://leukipp.github.io/xmastree/files/simulator/#tree.visible=false&light.glow=false)

### Adjust frames per second
[https://leukipp.github.io/xmastree/files/simulator/#fps=30](https://leukipp.github.io/xmastree/files/simulator/#fps=30)

### Replay frames after finish
[https://leukipp.github.io/xmastree/files/simulator/#loop=true](https://leukipp.github.io/xmastree/files/simulator/#loop=true)


## Setup [![github](https://img.shields.io/badge/github-gray?logo=github&logoColor=white)](#Setup) [![html](https://img.shields.io/badge/html-gray?logo=html5&logoColor=white)](#Setup)
Browse into the repository simulation folder and start a webserver: (e.g. builtin python webserver)

```bash
python3 -m http.server 8080
```

The simulation is now locally available via http://127.0.0.1:8080.


## Legal [![download](https://img.shields.io/badge/download-free-lightgrey)](#Legal)

Textures:

- [leaf.png](https://texture.ninja/textures/Leaves/4)

Fonts:

- [opensans.json](https://fonts.google.com/specimen/Open+Sans)
- [fontawesome-webfont](https://fontawesome.com)

Icons:

- [favicon.png](https://icons8.com/icon/9jXKB0NN0fzm/christmas-tree)


## License [![license](https://img.shields.io/badge/license-MIT-green)](#License)

[MIT](/jupyter/files/simulator/LICENSE)

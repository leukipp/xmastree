# GIFTIDEv1.0

This folder contains an integrated development environment used for Matt's 2021 Christmas tree, as featured in ["My 500-LED xmas tree got into Harvard."](https://youtu.be/WuMRJf6B5Q4).

Jupyter notebooks with `python`, `javascript` and `p5.js` kernels can be used to develop and visualize light animations.  
A simple http server is sufficient to run the integrated development environment, no other backend is needed.  


## Online [![browser](https://img.shields.io/badge/browser-gray?logo=googlechrome&logoColor=white)](#Online) [![status](https://img.shields.io/badge/status-up-brightgreen)](#Online)

An online version of the integrated development environment can be found [here](https://leukipp.github.io/xmastree/lab/).
[![app](/jupyter/img/app.gif)](https://leukipp.github.io/xmastree/lab/)


## Setup [![github](https://img.shields.io/badge/github-gray?logo=github&logoColor=white)](#Setup) [![html](https://img.shields.io/badge/jupyter-gray?logo=jupyter&logoColor=white)](#Setup)

Create a new environment:

```bash
conda create -n jupyterlite
conda activate jupyterlite
python -m pip install -r ./jupyter/requirements.txt
```

Serve a locally-hosted JupyterLite site:

```bash
jupyter lite serve --lite-dir ./jupyter --output-dir ./jupyter/.out
```


## Legal [![download](https://img.shields.io/badge/download-free-lightgrey)](#Legal)

Although JupyterLite is currently being developed by core Jupyter developers, the project is still _unofficial_.

Not all the usual features available in JupyterLab and the Classic Notebook will work
with JupyterLite, but many already do!

Don't hesitate to check out the [documentation](https://jupyterlite.readthedocs.io/en/latest/user-guide.html#frequently-asked-questions)
for more information and project updates.


## License [![license](https://img.shields.io/badge/license-MIT-green)](#License)

[MIT](/jupyter/LICENSE)

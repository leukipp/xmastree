# JupyterLite Demo

JupyterLite deployed as a static site to GitHub Pages, for demo purposes.


## ✨ Try it in your browser ✨

➡️ **https://leukipp.github.io/jupyterlite/**

![github-pages](https://user-images.githubusercontent.com/591645/120649478-18258400-c47d-11eb-80e5-185e52ff2702.gif)


### Further Information and Updates

For more info, keep an eye on the JupyterLite documentation:

- Configuring: https://jupyterlite.readthedocs.io/en/latest/configuring.html
- Deploying: https://jupyterlite.readthedocs.io/en/latest/deploying.html


## Development

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

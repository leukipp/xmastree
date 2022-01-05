class Room {
    constructor(stage, index) {
        this.root = stage.root;
        this.config = stage.config;
        this.loader = stage.loader;
        this.scene = stage.scene;
        this.stage = stage;
        this.index = index;

        this.trees = [];
        this.lights = [];
        this.grounds = [];

        this.input = new InputUtils(this.root);

        this.groundMaterial = new THREE.MeshLambertMaterial({
            color: this.config.material.ground,
            side: THREE.DoubleSide
        });

        this.treeMaterial = new THREE.MeshStandardMaterial({
            color: this.config.material.tree,
            roughness: 1.0,
            metalness: 0.3
        });

        this.stage.status('Loading', 50);
        this.loaded = new Promise(async function (resolve) {
            this.leafMaterial = new THREE.MeshStandardMaterial({
                map: await this.loader.load('texture', 'img/leaf.png'),
                color: this.config.material.leaf,
                roughness: 1.0,
                metalness: 0.3,
                alphaTest: 0.1
            });
            this.stage.status('Loading', 75);

            // add axes helper
            const axes = new THREE.AxesHelper(6);
            const scale = new THREE.Vector3(1, 1, -1);
            const corner = new THREE.Vector3(-3, 0, 3);
            axes.scale.multiply(scale);
            axes.position.copy(corner);
            setLayer(axes, this.stage.layer.ground);
            this.scene.add(axes);

            // html input event for coordinates
            this.input.coords.addEventListener('input', async () => {
                const positions = await this.input.loadCoords();
                this.lights.forEach((light) => {
                    light.reset().then(() => {
                        light.addLeds(positions);
                    });
                });
            });

            // html input event for animations
            this.input.frames.addEventListener('input', async () => {
                const frames = await this.input.loadFrames();
                this.lights.forEach((light) => {
                    light.animateFrames(frames);
                });
            });

            await this.addGround();
            await this.addLight();
            await this.addTree();
            await this.update();

            resolve(this);
        }.bind(this));
    }

    async getGround(size) {
        const geometry = new THREE.PlaneGeometry();
        geometry.rotateX(rad(90));

        const ground = new THREE.Mesh(geometry, this.groundMaterial);
        ground.scale.set(size, 1, size);

        setLayer(ground, this.stage.layer.ground);
        return ground;
    }

    async addGround() {
        const size = 2;

        // add inner ground
        const inner = await this.getGround(size);
        this.grounds.push(inner);
        this.scene.add(inner);

        // add outer ground
        const outer = await this.getGround(size + 4);
        outer.material.transparent = true;
        outer.material.opacity = 0.7;
        outer.position.y = -0.01;
        this.grounds.push(outer);
        this.scene.add(outer);
    }

    async getLight(index) {
        const light = new Light(this.stage, index);
        return light.loaded;
    }

    async addLight() {
        const light = await this.getLight(0)
        this.lights.push(light);
    }

    async removeLights() {
        // remove lights
        this.lights.forEach((light) => {
            light.reset()
        });
        this.lights = [];
    }

    async getTree(index) {
        // merge config
        const config = {
            levels: this.config.tree.levels,
            twigScale: this.config.tree.twigScale,
            ... this.config.tree.branching,
            ... this.config.tree.trunk
        };

        // set index and seed
        config.index = index;
        config.seed = randomInt(0, 10, index);

        return config;
    }

    async addTree() {
        const config = await this.getTree(0)
        const tree = new Tree(config);

        // tree trunk
        const treeGeometry = new THREE.BufferGeometry();
        treeGeometry.setAttribute('position', createFloatAttribute(tree.verts, 3));
        treeGeometry.setAttribute('normal', normalizeAttribute(createFloatAttribute(tree.normals, 3)));
        treeGeometry.setAttribute('uv', createFloatAttribute(tree.UV, 2));
        treeGeometry.setIndex(createIntAttribute(tree.faces, 1));

        // tree leafs
        const leafGeometry = new THREE.BufferGeometry();
        leafGeometry.setAttribute('position', createFloatAttribute(tree.vertsTwig, 3));
        leafGeometry.setAttribute('normal', normalizeAttribute(createFloatAttribute(tree.normalsTwig, 3)));
        leafGeometry.setAttribute('uv', createFloatAttribute(tree.uvsTwig, 2));
        leafGeometry.setIndex(createIntAttribute(tree.facesTwig, 1));

        // tree trunk and leafs
        const treeGroup = new THREE.Group();
        treeGroup.add(new THREE.Mesh(treeGeometry, this.treeMaterial));
        treeGroup.add(new THREE.Mesh(leafGeometry, this.leafMaterial));

        // tree size and position
        treeGroup.scale.multiplyScalar(this.config.tree.scale / 100);
        treeGroup.position.set(0.0, 0.01, 0.0);

        // add tree
        setLayer(treeGroup, this.stage.layer.trees);
        this.trees.push(treeGroup);
        this.scene.add(treeGroup);
    }

    async removeTrees() {
        // remove trees
        this.trees.forEach((tree) => {
            this.scene.remove(tree);
        });
        this.trees = [];
    }

    async update() {
        // hide or show trees
        this.trees.forEach((tree) => {
            tree.visible = this.config.tree.visible;
        });

        // update lights
        this.lights.forEach((light) => {
            light.update();
        });
    }

    async export(zip) {
        const room = zip.folder('room');

        // export coordinates
        if (this.input.loadedCoords) {
            room.file('coordinates.csv', this.input.loadedCoords.map((x) => { return x.join(','); }).join('\n'));
        }

        // export animations
        if (this.input.loadedFrames) {
            room.file('animations.csv', this.input.loadedFrames.map((x) => { return x.join(','); }).join('\n'));
        }
    }

    async reset() {
        // remove lights and trees
        this.removeLights();
        this.removeTrees();

        // add light and trees
        await this.addLight();
        await this.addTree();

        // update room
        await this.update();
        await sleep(100);
    }
}
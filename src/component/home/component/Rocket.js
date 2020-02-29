// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/

		//color list
		var Colors = {
			/*
			white:0xF1FFE7,
			grey:0xC9CBA3,
			lightBlack:0x5B6567,
			darkBlack:0x1E2D2F,
			orange:0xFF3F3F,
			orange:0xFF793F,
			yellow:0xF4C33D,
			orange:0xAAFCB8,
			orange:0x519872,
			*/
			white: 0xffffff,
			orange: 0xE5262B,
			orange: 0xFF7F11,
			green: 0x0D7044,
			blue: 0x4B88A2,
			brown: 0x61210F,
			black: 0x252627,
			skin: 0xffe0bd,
			
			
		};
		//when the three.js loads, run these things
		window.addEventListener('load', init, false);
	export default	function init() {
			//camera and renderer
			createScene();
			//lights
			createLights();
			//objects
			createRocket();
			createPlanet();
			createSky();
			//add mouse position listener
			document.addEventListener('mousemove', mouseMove, false);
			//game loop
			loop();
		}
		//define variables
		var scene, camera, 
			fieldOfView, aspectRatio,
			near, far, height, width;
		
		//define default mouse position
		var mouse = {x:0, y:0};
		//create mouseMove
		function mouseMove(event) {
			//set mouse coordinates to actual coordinates
			var xAxis = -1 + (event.clientX / width) * 2,
				yAxis = 1 - (event.clientY / height) * 2;
			//apply mouse coordinates
			mouse = {x:xAxis, y:yAxis};
			
		}

		//create scene
		function createScene() {
			//width and height of the screen
			height = window.innerHeight;
			width = window.innerWidth;
			//create the scene
			scene = new THREE.Scene();
			//add fog that is the same color as the background of the screen.
			scene.fog = new THREE.Fog(0x5B6567, 100, 950);
			
			//camera and variables
			aspectRatio = width/height;
			fieldOfView = 60;
			near = 1;
			far = 10000;
			camera = new THREE.PerspectiveCamera(
				//add camera variables
				fieldOfView,
				aspectRatio,
				near,
				far,
			);
			//camera position in the scene
			camera.position.set(0, 100, 200);
			// create the renderer
			renderer = new THREE.WebGLRenderer({
				//allow transparency in the renderer
				alpha: true,
				//allow anti-aliasing, lowers performance, but is low poly
				antialias: true,
			});
			//fill screen size
			renderer.setSize(width, height);
			//enable shadows to be renderable
			renderer.shadowMap.enabled = true;
			//obtain div container
			container = document.getElementById('world');
			//append the renderer to the div container
			container.appendChild(renderer.domElement);
			//run the resize function when a resize occurs
			window.addEventListener('resize', windowResize, false);
		}
		//window resize
		function windowResize() {
			//set dimensions to the screen size
			height = window.innerHeight;
			width = window.innerWidth;
			// update to new screen size
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		
		//set light variables
		var worldLight, shadowLight;
		//create lights
		function createLights() {
			//create the world light
			worldLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
			//create the ambient light
			ambientLight = new THREE.AmbientLight(0xdc8874, 0.5);
			//create the shadows
			shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);
			//set the postion of the shadow light
			shadowLight.position.set(150, 350, 350);
			//allow for shadows
			shadowLight.castShadow = true;
			//set direction and placement of shadow light
			shadowLight.shadow.camera.left = -400;
			shadowLight.shadow.camera.right = 400;
			shadowLight.shadow.camera.top = 400;
			shadowLight.shadow.camera.bottom = -400;
			shadowLight.shadow.camera.near = 1;
			shadowLight.shadow.camera.far = 1000;
			//set the resolution of the shadow light, this cuts on perfomance
			shadowLight.shadow.mapSize.width = 2048;
			shadowLight.shadow.mapSize.height = 2048;
			// add both world light and shadow lights to the scene
			scene.add(worldLight);
			scene.add(ambientLight);
			scene.add(shadowLight);
		}
		//define planet in separate scope
		Planet = function() {
			//create planet cylinder shape
			var Geo = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
			//rotate the cylinder
			Geo.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
			
			//new from part 2
			//ensures continiuty of ground
			Geo.mergeVertices();
			//define the length
			var length = Geo.vertices.length;
			//create the ground array
			this.ground = [];
			//for each vertice, do this
			for (var i = 0; i < length; i++) {
				//define the individual vertice
				var vertices = Geo.vertices[i];
				
				this.ground.push({
					//associate new values for x, y, and z
					x:vertices.x,
					y:vertices.y,
					z:vertices.z,
					//set an angle
					angle:Math.random() * Math.PI * 2,
					//set and amplitude
					amplitude:5 + Math.random() * 15,
					//set a speed
					speed:0.016 + Math.random() * 0.032
				});
			}
			
			//create a material
			var Mat = new THREE.MeshPhongMaterial({
				//list variables of the material
				color: Colors.green,
				flatShading: true,
			});
			//create planet mesh
			this.mesh = new THREE.Mesh(Geo, Mat);
			//allow for shadows
			this.mesh.receiveShadow = true;
		}
		
		//create waves
		Planet.prototype.hills = function() {
			
			var vertices = this.mesh.geometry.vertices;
			var l = vertices.length;
			
			for (var i = 0; i < l; i++) {
				
				var vert = vertices[i];
				
				var vertProperties = this.ground[i];
				
				vert.x = vertProperties.x + Math.cos(vertProperties.angle) * vertProperties.amplitude;
				vert.y = vertProperties.y + Math.sin(vertProperties.angle) * vertProperties.amplitude;
				
				vertProperties.angle += vertProperties.speed;
			}
			//this animates the vertices
			//this.mesh.geometry.verticesNeedUpdate=true;
			
			planet.mesh.rotation.z += 0.005;
		}
		//create planet variable
		var planet;
		//create plante
		function createPlanet() {
			//set the planet variable to equal a new planet
			planet = new Planet();
			//set the postion
			planet.mesh.position.y = -600;
			//add the planet to the scene
			scene.add(planet.mesh);
		}
		
		//define cloud in separate scope
		Cloud = function() {
			//create individual cube mesh
			this.mesh = new THREE.Object3D();
			//create individual cube object
			var Geo = new THREE.BoxGeometry(20, 20, 20);
			//create individual cube material
			var Mat = new THREE.MeshPhongMaterial({
				//create individual cube material variables
				color:Colors.white,
			});
			//number of cubes in one cloud
			var cubeNum = 3 + Math.floor(Math.random() * 3);
			//set conditions for each individual cube in the cloud based off cubeNum
			for (var i = 0; i < cubeNum; i++){
				//create cube
				var clone = new THREE.Mesh(Geo, Mat);
				//place cube in random positon with random rotation
				clone.position.x = i * 15;
				clone.position.y = Math.random() * 10;
				clone.position.z = Math.random() * 10;
				clone.rotation.y = Math.random() * Math.PI * 2;
				clone.rotation.z = Math.random() * Math.PI * 2;
				//set random size
				var size = 0.1 + Math.random() * 0.9;
				//give the cube the random size
				clone.scale.set(size, size, size);
				//create shadows
				clone.castShadow = true;
				//be affected by shadows
				//clone.receiveShadow = true;
				//add cube to scene
				this.mesh.add(clone);
			}
		}
		//define the sky
		Sky = function() {
			//mae a sky container
			this.mesh = new THREE.Object3D();
			//numer of clouds in scene
			this.cloudsNum = 20;
			//angle that separates each cloud
			var equalAngle = Math.PI * 2 / this.cloudsNum;
			//set variables for each individual cloud in the sky
			for (var i = 0; i < this.cloudsNum; i++) {
				//make cloud
				var clone = new Cloud(),
					//set angle
					angle = equalAngle * i,
					//set height
					height = 750 + Math.random() * 200;
				//set the position of the cloud in the sky
				clone.mesh.position.x = Math.cos(angle) * height;
				clone.mesh.position.y = Math.sin(angle) * height;
				clone.mesh.position.z = -300 - Math.random() * 40;
				//set the rotation of the cloud in the sky
				clone.mesh.rotation.z = angle + Math.PI / 2;
				//create the size of the cloud
				var size = 1 + Math.random() * 2;
				//set the size of the cloud
				clone.mesh.scale.set(size, size, size);
				//add the cloud to the scene
				this.mesh.add(clone.mesh);
			}
		}
		//create sky variable
		var sky;
		//add sky to scene
		function createSky() {
			//create a sky
			sky = new Sky();
			sky.mesh.position.y = -600;
			scene.add(sky.mesh);
		}
		//I will come back and make this look like a rocket when I can see what it looks like.
		var Rocket = function() {
			// create a container to hold the rocket
			this.mesh = new THREE.Object3D();
			
			//each element is made in the same way, the notes for the first element apply for the rest
			
			//cockpit
			//create the shape
			var cockpitGeo = new THREE.BoxGeometry(60, 50, 50, 1, 1, 1),
				//create the material
				cockpitMat = new THREE.MeshPhongMaterial({
					//create the material variables
					color:Colors.orange,
					flatShading: true,
				}),
				// create mesh
				cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
			//custom vertices
			cockpitGeo.vertices[4].y -= 10;
			cockpitGeo.vertices[4].z += 20;
			cockpitGeo.vertices[5].y -= 10;
			cockpitGeo.vertices[5].z -= 20;
			cockpitGeo.vertices[6].y += 10;
			cockpitGeo.vertices[6].z += 20;
			cockpitGeo.vertices[7].y += 10;
			cockpitGeo.vertices[7].z -= 20;
			//create and allow shadows
			cockpit.castShadow = true;
			cockpit.receiveShadow = true;
			//add to scene
			this.mesh.add(cockpit);
			
			//engine
			var engineGeo = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1),
				engineMat = new THREE.MeshPhongMaterial({color:Colors.white, flatShading: true,}),
				engine = new THREE.Mesh(engineGeo, engineMat);
			engine.position.x = 40;
			engine.castShadow = true;
			engine.receiveShadow = true;
			this.mesh.add(engine);
			
			//tail
			var tailGeo = new THREE.BoxGeometry(15, 20, 10, 1, 1, 1),
				tailMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,}),
				tail = new THREE.Mesh(tailGeo, tailMat);
			//custom vertices
			tailGeo.vertices[2].y -= 31;
			tailGeo.vertices[3].y -= 31;
			tail.position.set(-37, 25, 0);
			tail.castShadow = true;
			tail.receiveShadow = true;
			this.mesh.add(tail);
			
			//lowerWing
			var lowerWingGeo = new THREE.BoxGeometry(40, 8, 200, 1, 1, 1),
				lowerWingMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,}),
				lowerWing = new THREE.Mesh(lowerWingGeo, lowerWingMat);
			//custom vertices
			lowerWingGeo.vertices[0].z -= 20;
			lowerWingGeo.vertices[1].z += 20;
			lowerWingGeo.vertices[2].z -= 20;
			lowerWingGeo.vertices[3].z += 20;
			lowerWing.position.x = 10;
			lowerWing.castShadow = true;
			lowerWing.receiveShadow = true;
			this.mesh.add(lowerWing);
			
			//upperWing
			var upperWingGeo = new THREE.BoxGeometry(40, 8, 200, 1, 1, 1),
				upperWingMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,}),
				upperWing = new THREE.Mesh(upperWingGeo, upperWingMat);
			//custom vertices
			upperWingGeo.vertices[0].z -= 20;
			upperWingGeo.vertices[1].z += 20;
			upperWingGeo.vertices[2].z -= 20;
			upperWingGeo.vertices[3].z += 20;
			upperWing.position.y = 35;
			upperWing.position.x = 10;
			upperWing.castShadow = true;
			upperWing.receiveShadow = true;
			this.mesh.add(upperWing);
			
			//leftSupport
			var leftSupportGeo = new THREE.BoxGeometry(8, 35, 8, 1, 1, 1),
				leftSupportMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,}),
				leftSupport = new THREE.Mesh(leftSupportGeo, leftSupportMat);
			leftSupport.position.y = 20;
			leftSupport.position.x = 10;
			leftSupport.position.z = 80;
			leftSupport.castShadow = true;
			leftSupport.receiveShadow = true;
			this.mesh.add(leftSupport);
			
			//rightSupport
			var rightSupportGeo = new THREE.BoxGeometry(8, 35, 8, 1, 1, 1),
				rightSupportMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,}),
				rightSupport = new THREE.Mesh(rightSupportGeo, rightSupportMat);
			rightSupport.position.y = 20;
			rightSupport.position.x = 10;
			rightSupport.position.z = -80;
			rightSupport.castShadow = true;
			rightSupport.receiveShadow = true;
			this.mesh.add(rightSupport);
			
			//propeller
			var propellerGeo = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1),
				propellerMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,});
			this.propeller = new THREE.Mesh(propellerGeo, propellerMat);
			this.propeller.castShadow = true;
			this.propeller.receiveShadow = true;
			
			//blades
			var bladeGeo = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1),
				bladeMat = new THREE.MeshPhongMaterial({color:Colors.orange, flatShading: true,}),
				blade = new THREE.Mesh(bladeGeo, bladeMat);
			blade.position.set(8, 0, 0);
			blade.castShadow = true;
			blade.receiveShadow = true;
			this.propeller.add(blade);
			this.propeller.position.set(50, 0, 0,);
			this.mesh.add(this.propeller);
		}
		
		//create rocket variable
		var rocket;
		//add the rocket to the scene
		function createRocket() {
			//create a new rocket
			rocket = new Rocket();
			//add rocket scale
			rocket.mesh.scale.set(0.25, 0.25, 0.25);
			rocket.mesh.position.y = 100;
			scene.add(rocket.mesh);
		}
		
		//animate rocket
		function updateRocket() {
			//build the dimensions the plane can travel and assign the mouse coordinates to the rocket
			var rocketX = fly(mouse.x, -1, 1, -100, 100);
			var rocketY = fly(mouse.y, -1, 1, 25, 175);
			
			//new from part 2
			//only update the y value of the plane
			rocket.mesh.position.y += (rocketY - rocket.mesh.position.y) * 0.1;
			//rotate on the z and x axis
			rocket.mesh.rotation.x = (rocket.mesh.position.y - rocketY) * 0.005; 
			rocket.mesh.rotation.z = (rocketY - rocket.mesh.position.y) * 0.01;
			//update the rocket to coorispond to the fly function
				//old from part 1
				//rocket.mesh.position.x = rocketX;
				//rocket.mesh.position.y = rocketY;
			//rotate propeller
			rocket.propeller.rotation.x += 0.3;
		}
		
		//allow for rocket flight
		function fly(Mouse, Mmin, Mmax, Rmin, Rmax) {
			//basic mouse follow mechanic
			//we are creating the border of the game here. the rocket will never go past the range we give it
			//find the max, the mouse of the min value of the border
			var border = Math.max(Math.min(Mouse,Mmax), Mmin);
				//find the mouse min and max middle value
			var Mmiddle = Mmax - Mmin;
				//(subtract the mouse min value from the real mouse value) / the Mmiddle;
			var delay = (border - Mmin) / Mmiddle;
				//find the rocket min and max middle value
			var Rmiddle = Rmax - Rmin;
				//rocket min + (delay * the rockets Rmiddle);
			var result = Rmin + (delay * Rmiddle);
			return result;	
		}
		function zoom() {
			camera.fov = fly(mouse.x, -1, 1, 50, 90);
			camera.updateProjectionMatrix();
		}
		
		/* //this is a non specific version of the fly function
		function normalize(v,vmin,vmax,tmin, tmax){

			var nv = Math.max(Math.min(v,vmax), vmin);
			var dv = vmax-vmin;
			var pc = (nv-vmin)/dv;
			var dt = tmax-tmin;
			var tv = tmin + (pc*dt);
			return tv;
		} */
		
		//animate each frame
		function loop() {
			
			/* //this is now updated inside of updateRocket()
			//animate propeller
			rocket.propeller.rotation.x += 0.3; */
			
			//update all rocket movement
			updateRocket();
			zoom();
			//animate planet
			planet.hills();
			//animate sky
			sky.mesh.rotation.z += 0.01;
			//render onto the page
			renderer.render(scene, camera);
			//continue the loop which makes the animation and scene
			requestAnimationFrame(loop);
		}
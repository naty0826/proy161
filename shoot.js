AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          bullet.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          // Establecer la dirección de la cámara como un vector de Three.js
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          // Establecer la velocidad y su dirección
          bullet.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(bullet);
        }
      });
    },
  });
  
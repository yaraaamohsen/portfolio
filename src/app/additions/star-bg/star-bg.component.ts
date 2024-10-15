import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, Scene, PerspectiveCamera, WebGLRenderer, Clock } from 'three';
import { OrbitControls } from 'three-stdlib';
import { MyplatformService } from '../../core/services/platform/myplatform.service';
import * as THREE from 'three';

@Component({
  selector: 'app-star-bg',
  standalone: true,
  templateUrl: './star-bg.component.html',
  styleUrls: ['./star-bg.component.scss']
})
export class StarBgComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(private _MyplatformService: MyplatformService) { }

  private camera!: PerspectiveCamera;
  private scene!: Scene;
  private renderer!: WebGLRenderer;
  private clock!: Clock;
  private particles!: Points;
  private animationId!: number;

  ngOnInit() {

    // Handle window resize
    if (this._MyplatformService.getPlatform()) {
      console.log('hello');
      this.initThreeJs();
      this.animate();
      window.addEventListener('resize', this.onWindowResize.bind(this));
    }
  }

  ngOnDestroy() {

    if (this._MyplatformService.getPlatform()) {
      // Clean up on component destroy
      cancelAnimationFrame(this.animationId);
      window.addEventListener('resize', this.onWindowResize.bind(this));
      this.renderer.dispose(); // Dispose renderer resources

    }
  }

  private initThreeJs() {
    if (this._MyplatformService.getPlatform()) {
      // Set up scene, camera, and renderer
      this.scene = new Scene();
      this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 2;

      this.renderer = new WebGLRenderer({ antialias: true, alpha: true }); // Enable transparency
      this.renderer.setSize(window.innerWidth, document.body.scrollHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio); // Improve rendering on high-DPI screens
      this.container.nativeElement.appendChild(this.renderer.domElement);

      // Add controls
      new OrbitControls(this.camera, this.renderer.domElement);

      // Generate particles
      const geometry = new BufferGeometry();
      const vertices = new Float32Array(5000 * 3);
      const radius = 2.5; // Adjust the radius to control the distance between particles
      for (let i = 0; i < vertices.length; i += 3) {
        // Distribute particles within a sphere with a certain radius
        vertices[i] = (Math.random() * 2 - 1) * radius;
        vertices[i + 1] = (Math.random() * 2 - 1) * radius;
        vertices[i + 2] = (Math.random() * 2 - 1) * radius;
      }
      geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

      const material = new PointsMaterial({
        size: 0.001,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7,
        depthWrite: false
      });

      this.particles = new Points(geometry, material);
      this.scene.add(this.particles);

      this.clock = new Clock();
    }

  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Slow down the rotation of particles
    const delta = this.clock.getDelta();
    this.particles.rotation.x -= delta / 50; // Slower rotation
    this.particles.rotation.y -= delta / 70; // Slower rotation

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    if (this._MyplatformService.getPlatform()) {
      // Update camera aspect ratio and renderer size on window resize
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, document.body.scrollHeight); // Ensure full height coverage
    }
  }
}

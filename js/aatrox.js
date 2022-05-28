import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'
import { DRACOLoader } from 'DRACOLoader'
import { og, ruby, merc, amber, citrine, rose, pearl, tanzanite, obsidian, sapphire, turquoise, emerald, rainbow } from '/js/chromas.js'
import { switch1, switch1Label } from '/js/switchers.js'

const aatrox = () => {
        // THREEJS
        // Canvas
        let canvas = document.querySelector('canvas.webgl')

        // Sizes
        const sizes = {
            width: canvas.clientWidth,
            height: canvas.clientHeight 
        }

        const mediasize = window.matchMedia("(min-width:1024px)")

        window.addEventListener('resize', () => {

            if (mediasize.matches) {
            // update sizes
            sizes.width = window.innerWidth / 2
            sizes.height = canvas.clientHeight

            // update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            
            // update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            }
        })

        // Scene 
        const scene = new THREE.Scene()

        // Texture loader
        const textureLoader = new THREE.TextureLoader()

        // Draco loader
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('../draco/')

        // GLTF loader
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 3
        camera.position.y = 1
        scene.add(camera)

        // Champion model
        gltfLoader.load(
            '../models/aatrox/aatrox-base.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                gltf.scene.scale.set(0.01, 0.01, 0.01)
                gltf.scene.position.set(0, -1.2, 0)
                scene.add(gltf.scene)
            }
        )
        
        const chromas = document.querySelector('.chromas')
        const switchers = document.querySelector('.switchers')

        chromas.innerHTML = ''
        switchers.innerHTML = ''

        // Chromas
        let activeChromas = document.querySelectorAll('.chroma')

        // Skins
        const skins = document.querySelectorAll('.skin')
        const aatroxBase = document.querySelector('.aatrox-base')
        const aatroxJusticar = document.querySelector('.aatrox-justicar')
        const aatroxMecha = document.querySelector('.aatrox-mecha')
        const aatroxSeaHunter = document.querySelector('.aatrox-sea-hunter')
        const aatroxBloodMoon = document.querySelector('.aatrox-blood-moon')
        const aatroxPrestigeBloodMoon = document.querySelector('.aatrox-prestige-blood-moon')
        const aatroxVictorius = document.querySelector('.aatrox-victorius')
        const aatroxOdyssey = document.querySelector('.aatrox-odyssey')
        const aatroxLunarEclipse = document.querySelector('.aatrox-lunar-eclipse')

        for(let skin of skins) {skin.classList.remove('skin-active')}
        aatroxBase.classList.add('skin-active')
        aatroxBase.scrollIntoView({ behavior: 'smooth', })

        aatroxBase.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxBase.classList.add('skin-active')
            aatroxBase.scrollIntoView({ behavior: 'smooth', })

            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-base.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            chromas.innerHTML = ''

            // checkboxes
            switchers.innerHTML = ''
        })

        aatroxJusticar.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxJusticar.classList.add('skin-active')
            aatroxJusticar.scrollIntoView({ behavior: 'smooth', })

            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-justicar.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            chromas.innerHTML = ''

            // checkboxes
            switchers.innerHTML = ''
        })

        aatroxMecha.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxMecha.classList.add('skin-active')
            aatroxMecha.scrollIntoView({ behavior: 'smooth', })

            // textures
            const aatroxMechaTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/aatrox.jpg')
            aatroxMechaTexture.flipY = false
            aatroxMechaTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/wings.jpg')
            aatroxMechaWingsTexture.flipY = false
            aatroxMechaWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaObsidianTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/obsidian/aatrox.jpg')
            aatroxMechaObsidianTexture.flipY = false
            aatroxMechaObsidianTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaObsidianWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/obsidian/wings.jpg')
            aatroxMechaObsidianWingsTexture.flipY = false
            aatroxMechaObsidianWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaPearlTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/pearl/aatrox.jpg')
            aatroxMechaPearlTexture.flipY = false
            aatroxMechaPearlTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaPearlWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/pearl/wings.jpg')
            aatroxMechaPearlWingsTexture.flipY = false
            aatroxMechaPearlWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaTanzaniteTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/tanzanite/aatrox.jpg')
            aatroxMechaTanzaniteTexture.flipY = false
            aatroxMechaTanzaniteTexture.encoding = THREE.sRGBEncoding

            const aatroxMechaTanzaniteWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-mecha/tanzanite/wings.jpg')
            aatroxMechaTanzaniteWingsTexture.flipY = false
            aatroxMechaTanzaniteWingsTexture.encoding = THREE.sRGBEncoding

            // materials
            const aatroxMechaMaterial = new THREE.MeshBasicMaterial({map: aatroxMechaTexture})
            const aatroxMechaWingsMaterial = new THREE.MeshBasicMaterial({map: aatroxMechaWingsTexture})

            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-mecha.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const aatroxMechaMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    aatroxMechaMesh.material = aatroxMechaMaterial
                    const aatroxMechaWingsMesh = gltf.scene.children[0].children.find(child => child.name === 'wings') 
                    aatroxMechaWingsMesh.material = aatroxMechaWingsMaterial
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            chromas.innerHTML = ''
            chromas.appendChild(og)
            chromas.appendChild(pearl)
            chromas.appendChild(obsidian)
            chromas.appendChild(tanzanite)

            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            og.classList.add('active-chroma')

            og.addEventListener('click', () => {
                aatroxMechaMaterial.map = aatroxMechaTexture
                aatroxMechaWingsMaterial.map = aatroxMechaWingsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                og.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                aatroxMechaMaterial.map = aatroxMechaPearlTexture
                aatroxMechaWingsMaterial.map = aatroxMechaPearlWingsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                aatroxMechaMaterial.map = aatroxMechaObsidianTexture
                aatroxMechaWingsMaterial.map = aatroxMechaObsidianWingsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            tanzanite.addEventListener('click', () => {
                aatroxMechaMaterial.map = aatroxMechaTanzaniteTexture
                aatroxMechaWingsMaterial.map = aatroxMechaTanzaniteWingsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })

            // checkboxes
            switchers.innerHTML = ''
        })

        aatroxSeaHunter.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxSeaHunter.classList.add('skin-active')
            aatroxSeaHunter.scrollIntoView({ behavior: 'smooth', })
        
            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-sea-hunter.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.innerHTML = ''
        
        
            // checkboxes
            switchers.innerHTML = ''
        })

        aatroxBloodMoon.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxBloodMoon.classList.add('skin-active')
            aatroxBloodMoon.scrollIntoView({ behavior: 'smooth', })

            switch1.checked = false
        
            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-blood-moon.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const aatroxBloodMoonMesh = gltf.scene.children[0].children.find(child => child.name === 'Mesh_0')
                    const aatroxBloodMoonShadowMesh = gltf.scene.children[0].children.find(child => child.name === 'shadow') 

                    aatroxBloodMoonShadowMesh.visible = false

                    switch1.addEventListener('click', () => {
                        if(switch1.checked) {
                            aatroxBloodMoonShadowMesh.visible = true
                            aatroxBloodMoonMesh.visible = false
                        } else {
                            aatroxBloodMoonShadowMesh.visible = false
                            aatroxBloodMoonMesh.visible = true
                        }                  
                    })

                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.innerHTML = ''
        
        
            // checkboxes
            switchers.innerHTML = ''
            switchers.appendChild(switch1)
            switchers.appendChild(switch1Label)
            switch1Label.innerHTML = "Shadow"
        })

        aatroxPrestigeBloodMoon.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxPrestigeBloodMoon.classList.add('skin-active')
            aatroxPrestigeBloodMoon.scrollIntoView({ behavior: 'smooth', })

            switch1.checked = false
        
            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-prestige-blood-moon.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const aatroxPrestigeBloodMoonMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    const aatroxPrestigeBloodMoonShadowMesh = gltf.scene.children[0].children.find(child => child.name === 'shadow') 

                    aatroxPrestigeBloodMoonShadowMesh.visible = false

                    switch1.addEventListener('click', () => {
                        if(switch1.checked) {
                            aatroxPrestigeBloodMoonShadowMesh.visible = true
                            aatroxPrestigeBloodMoonMesh.visible = false
                        } else {
                            aatroxPrestigeBloodMoonShadowMesh.visible = false
                            aatroxPrestigeBloodMoonMesh.visible = true
                        }                  
                    })

                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.innerHTML = ''
        
        
            // checkboxes
            switchers.innerHTML = ''
            switchers.appendChild(switch1)
            switchers.appendChild(switch1Label)
            switch1Label.innerHTML = "Shadow"
        })
        
        aatroxVictorius.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxVictorius.classList.add('skin-active')
            aatroxVictorius.scrollIntoView({ behavior: 'smooth', })
        
            // textures
            const aatroxVictoriusTexture = textureLoader.load('../models/aatrox/textures/aatrox-victorius/aatrox.jpg')
            aatroxVictoriusTexture.flipY = false
            aatroxVictoriusTexture.encoding = THREE.sRGBEncoding
        
            const aatroxVictoriusWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-victorius/wings.jpg')
            aatroxVictoriusWingsTexture.flipY = false
            aatroxVictoriusWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxVictoriusAmberTexture = textureLoader.load('../models/aatrox/textures/aatrox-victorius/amber/aatrox.jpg')
            aatroxVictoriusAmberTexture.flipY = false
            aatroxVictoriusAmberTexture.encoding = THREE.sRGBEncoding
        
            const aatroxVictoriusAmberWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-victorius/amber/wings.jpg')
            aatroxVictoriusAmberWingsTexture.flipY = false
            aatroxVictoriusAmberWingsTexture.encoding = THREE.sRGBEncoding
        
        
            // materials
            const aatroxVictoriusMaterial = new THREE.MeshBasicMaterial({map: aatroxVictoriusTexture})
            const aatroxVictoriusWingsMaterial = new THREE.MeshBasicMaterial({map: aatroxVictoriusWingsTexture})
        
            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-victorius.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const aatroxVictoriusMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    aatroxVictoriusMesh.material = aatroxVictoriusMaterial
                    const aatroxVictoriusWingsMesh = gltf.scene.children[0].children.find(child => child.name === 'wings') 
                    aatroxVictoriusWingsMesh.material = aatroxVictoriusWingsMaterial
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.innerHTML = ''
            chromas.appendChild(og)
            chromas.appendChild(amber)
        
            activeChromas = document.querySelectorAll('.chroma')
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            og.classList.add('active-chroma')
        
            og.addEventListener('click', () => {
                aatroxVictoriusMaterial.map = aatroxVictoriusTexture
                aatroxVictoriusWingsMaterial.map = aatroxVictoriusWingsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                og.classList.add('active-chroma')
            })
        
            amber.addEventListener('click', () => {
                aatroxVictoriusMaterial.map = aatroxVictoriusAmberTexture
                aatroxVictoriusWingsMaterial.map = aatroxVictoriusAmberTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amber.classList.add('active-chroma')
            })
        
        
            // checkboxes
            switchers.innerHTML = ''
        })
        
        aatroxOdyssey.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxOdyssey.classList.add('skin-active')
            aatroxOdyssey.scrollIntoView({ behavior: 'smooth', })
        
            // textures
            const aatroxOdysseyTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/aatrox.jpg')
            aatroxOdysseyTexture.flipY = false
            aatroxOdysseyTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/wings.jpg')
            aatroxOdysseyWingsTexture.flipY = false
            aatroxOdysseyWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseyBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/banner.jpg')
            aatroxOdysseyBannerTexture.flipY = false
            aatroxOdysseyBannerTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyCitrineTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/citrine/aatrox.jpg')
            aatroxOdysseyCitrineTexture.flipY = false
            aatroxOdysseyCitrineTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyCitrineWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/citrine/wings.jpg')
            aatroxOdysseyCitrineWingsTexture.flipY = false
            aatroxOdysseyCitrineWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyCitrineBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/citrine/banner.jpg')
            aatroxOdysseyCitrineBannerTexture.flipY = false
            aatroxOdysseyCitrineBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseyEmeraldTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/emerald/aatrox.jpg')
            aatroxOdysseyEmeraldTexture.flipY = false
            aatroxOdysseyEmeraldTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyEmeraldWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/emerald/wings.jpg')
            aatroxOdysseyEmeraldWingsTexture.flipY = false
            aatroxOdysseyEmeraldWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyEmeraldBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/emerald/banner.jpg')
            aatroxOdysseyEmeraldBannerTexture.flipY = false
            aatroxOdysseyEmeraldBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseyMercTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/merc/aatrox.jpg')
            aatroxOdysseyMercTexture.flipY = false
            aatroxOdysseyMercTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyMercWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/merc/wings.jpg')
            aatroxOdysseyMercWingsTexture.flipY = false
            aatroxOdysseyMercWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyMercBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/merc/banner.jpg')
            aatroxOdysseyMercBannerTexture.flipY = false
            aatroxOdysseyMercBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseyRainbowTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/rainbow/aatrox.jpg')
            aatroxOdysseyRainbowTexture.flipY = false
            aatroxOdysseyRainbowTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyRainbowWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/rainbow/wings.jpg')
            aatroxOdysseyRainbowWingsTexture.flipY = false
            aatroxOdysseyRainbowWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyRainbowBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/rainbow/banner.jpg')
            aatroxOdysseyRainbowBannerTexture.flipY = false
            aatroxOdysseyRainbowBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseyRoseTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/rose/aatrox.jpg')
            aatroxOdysseyRoseTexture.flipY = false
            aatroxOdysseyRoseTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyRoseWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/rose/wings.jpg')
            aatroxOdysseyRoseWingsTexture.flipY = false
            aatroxOdysseyRoseWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyRoseBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/rose/banner.jpg')
            aatroxOdysseyRoseBannerTexture.flipY = false
            aatroxOdysseyRoseBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseyRubyTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/ruby/aatrox.jpg')
            aatroxOdysseyRubyTexture.flipY = false
            aatroxOdysseyRubyTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyRubyWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/ruby/wings.jpg')
            aatroxOdysseyRubyWingsTexture.flipY = false
            aatroxOdysseyRubyWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyRubyBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/ruby/banner.jpg')
            aatroxOdysseyRubyBannerTexture.flipY = false
            aatroxOdysseyRubyBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxOdysseySapphireTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/sapphire/aatrox.jpg')
            aatroxOdysseySapphireTexture.flipY = false
            aatroxOdysseySapphireTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseySapphireWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/sapphire/wings.jpg')
            aatroxOdysseySapphireWingsTexture.flipY = false
            aatroxOdysseySapphireWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseySapphireBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/sapphire/banner.jpg')
            aatroxOdysseySapphireBannerTexture.flipY = false
            aatroxOdysseySapphireBannerTexture.encoding = THREE.sRGBEncoding

            
            const aatroxOdysseyTurquoiseTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/turquoise/aatrox.jpg')
            aatroxOdysseyTurquoiseTexture.flipY = false
            aatroxOdysseyTurquoiseTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyTurquoiseWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/turquoise/wings.jpg')
            aatroxOdysseyTurquoiseWingsTexture.flipY = false
            aatroxOdysseyTurquoiseWingsTexture.encoding = THREE.sRGBEncoding
        
            const aatroxOdysseyTurquoiseBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-odyssey/turquoise/banner.jpg')
            aatroxOdysseyTurquoiseBannerTexture.flipY = false
            aatroxOdysseyTurquoiseBannerTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const aatroxOdysseyMaterial = new THREE.MeshBasicMaterial({map: aatroxOdysseyTexture})
            const aatroxOdysseyWingsMaterial = new THREE.MeshBasicMaterial({map: aatroxOdysseyWingsTexture})
            const aatroxOdysseyBannerMaterial = new THREE.MeshBasicMaterial({map: aatroxOdysseyBannerTexture})

            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-odyssey.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const aatroxOdysseyMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    aatroxOdysseyMesh.material = aatroxOdysseyMaterial
                    const aatroxOdysseyWingsMesh = gltf.scene.children[0].children.find(child => child.name === 'wings') 
                    aatroxOdysseyWingsMesh.material = aatroxOdysseyWingsMaterial
                    const aatroxOdysseyBannerMesh = gltf.scene.children[0].children.find(child => child.name === 'banner') 
                    aatroxOdysseyBannerMesh.material = aatroxOdysseyBannerMaterial
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.innerHTML = ''
            chromas.appendChild(og)
            chromas.appendChild(ruby)
            chromas.appendChild(merc)
            chromas.appendChild(citrine)
            chromas.appendChild(rose)
            chromas.appendChild(sapphire)
            chromas.appendChild(turquoise)
            chromas.appendChild(emerald)
            chromas.appendChild(rainbow)
        
            activeChromas = document.querySelectorAll('.chroma')
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            og.classList.add('active-chroma')
        
            og.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyWingsTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                og.classList.add('active-chroma')
            })
        
            ruby.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyRubyTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyRubyTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
            merc.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyMercTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyMercTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyMercTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                merc.classList.add('active-chroma')
            })
            citrine.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyCitrineTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyCitrineTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyCitrineTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                citrine.classList.add('active-chroma')
            })
            rose.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyRoseTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyRoseTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })
            sapphire.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseySapphireTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseySapphireTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseySapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })
            turquoise.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyTurquoiseTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyTurquoiseTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyTurquoiseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                turquoise.classList.add('active-chroma')
            })
            emerald.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyEmeraldTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyEmeraldTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })
            rainbow.addEventListener('click', () => {
                aatroxOdysseyMaterial.map = aatroxOdysseyRainbowTexture
                aatroxOdysseyWingsMaterial.map = aatroxOdysseyRainbowTexture
                aatroxOdysseyBannerMaterial.map = aatroxOdysseyRainbowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rainbow.classList.add('active-chroma')
            })
        
        
            // checkboxes
            switchers.innerHTML = ''
        })

        aatroxLunarEclipse.addEventListener('click', () => {
            for(let skin of skins) {skin.classList.remove('skin-active')}
            aatroxLunarEclipse.classList.add('skin-active')
            aatroxLunarEclipse.scrollIntoView({ behavior: 'smooth', })
        
            // textures
            const aatroxLunarEclipseTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/aatrox.jpg')
            aatroxLunarEclipseTexture.flipY = false
            aatroxLunarEclipseTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/wings.jpg')
            aatroxLunarEclipseWingsTexture.flipY = false
            aatroxLunarEclipseWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/banner.jpg')
            aatroxLunarEclipseBannerTexture.flipY = false
            aatroxLunarEclipseBannerTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseCitrineTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/citrine/aatrox.jpg')
            aatroxLunarEclipseCitrineTexture.flipY = false
            aatroxLunarEclipseCitrineTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseCitrineWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/citrine/wings.jpg')
            aatroxLunarEclipseCitrineWingsTexture.flipY = false
            aatroxLunarEclipseCitrineWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseCitrineBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/citrine/banner.jpg')
            aatroxLunarEclipseCitrineBannerTexture.flipY = false
            aatroxLunarEclipseCitrineBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseEmeraldTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/emerald/aatrox.jpg')
            aatroxLunarEclipseEmeraldTexture.flipY = false
            aatroxLunarEclipseEmeraldTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseEmeraldWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/emerald/wings.jpg')
            aatroxLunarEclipseEmeraldWingsTexture.flipY = false
            aatroxLunarEclipseEmeraldWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseEmeraldBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/emerald/banner.jpg')
            aatroxLunarEclipseEmeraldBannerTexture.flipY = false
            aatroxLunarEclipseEmeraldBannerTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseObsidianTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/obsidian/aatrox.jpg')
            aatroxLunarEclipseObsidianTexture.flipY = false
            aatroxLunarEclipseObsidianTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseObsidianWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/obsidian/wings.jpg')
            aatroxLunarEclipseObsidianWingsTexture.flipY = false
            aatroxLunarEclipseObsidianWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseObsidianBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/obsidian/banner.jpg')
            aatroxLunarEclipseObsidianBannerTexture.flipY = false
            aatroxLunarEclipseObsidianBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseRainbowTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/rainbow/aatrox.jpg')
            aatroxLunarEclipseRainbowTexture.flipY = false
            aatroxLunarEclipseRainbowTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseRainbowWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/rainbow/wings.jpg')
            aatroxLunarEclipseRainbowWingsTexture.flipY = false
            aatroxLunarEclipseRainbowWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseRainbowBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/rainbow/banner.jpg')
            aatroxLunarEclipseRainbowBannerTexture.flipY = false
            aatroxLunarEclipseRainbowBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseRoseTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/rose/aatrox.jpg')
            aatroxLunarEclipseRoseTexture.flipY = false
            aatroxLunarEclipseRoseTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseRoseWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/rose/wings.jpg')
            aatroxLunarEclipseRoseWingsTexture.flipY = false
            aatroxLunarEclipseRoseWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseRoseBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/rose/banner.jpg')
            aatroxLunarEclipseRoseBannerTexture.flipY = false
            aatroxLunarEclipseRoseBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseRubyTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/ruby/aatrox.jpg')
            aatroxLunarEclipseRubyTexture.flipY = false
            aatroxLunarEclipseRubyTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseRubyWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/ruby/wings.jpg')
            aatroxLunarEclipseRubyWingsTexture.flipY = false
            aatroxLunarEclipseRubyWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseRubyBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/ruby/banner.jpg')
            aatroxLunarEclipseRubyBannerTexture.flipY = false
            aatroxLunarEclipseRubyBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseTanzaniteTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/tanzanite/aatrox.jpg')
            aatroxLunarEclipseTanzaniteTexture.flipY = false
            aatroxLunarEclipseTanzaniteTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseTanzaniteWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/tanzanite/wings.jpg')
            aatroxLunarEclipseTanzaniteWingsTexture.flipY = false
            aatroxLunarEclipseTanzaniteWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseTanzaniteBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/tanzanite/banner.jpg')
            aatroxLunarEclipseTanzaniteBannerTexture.flipY = false
            aatroxLunarEclipseTanzaniteBannerTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseTurquoiseTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/turquoise/aatrox.jpg')
            aatroxLunarEclipseTurquoiseTexture.flipY = false
            aatroxLunarEclipseTurquoiseTexture.encoding = THREE.sRGBEncoding
        
            const aatroxLunarEclipseTurquoiseWingsTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/turquoise/wings.jpg')
            aatroxLunarEclipseTurquoiseWingsTexture.flipY = false
            aatroxLunarEclipseTurquoiseWingsTexture.encoding = THREE.sRGBEncoding

            const aatroxLunarEclipseTurquoiseBannerTexture = textureLoader.load('../models/aatrox/textures/aatrox-lunar-eclipse/turquoise/banner.jpg')
            aatroxLunarEclipseTurquoiseBannerTexture.flipY = false
            aatroxLunarEclipseTurquoiseBannerTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const aatroxLunarEclipseMaterial = new THREE.MeshBasicMaterial({map: aatroxLunarEclipseTexture})
            const aatroxLunarEclipseWingsMaterial = new THREE.MeshBasicMaterial({map: aatroxLunarEclipseWingsTexture})
            const aatroxLunarEclipseBannerMaterial = new THREE.MeshBasicMaterial({map: aatroxLunarEclipseBannerTexture})
        
            // model
            gltfLoader.load(
                '../models/aatrox/aatrox-lunar-eclipse.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const aatroxLunarEclipseMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    aatroxLunarEclipseMesh.material = aatroxLunarEclipseMaterial
                    const aatroxLunarEclipseWingsMesh = gltf.scene.children[0].children.find(child => child.name === 'wings') 
                    aatroxLunarEclipseWingsMesh.material = aatroxLunarEclipseWingsMaterial
                    const aatroxLunarEclipseBannerMesh = gltf.scene.children[0].children.find(child => child.name === 'banner') 
                    aatroxLunarEclipseBannerMesh.material = aatroxLunarEclipseBannerMaterial
                    gltf.scene.scale.set(0.01, 0.01, 0.01)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.innerHTML = ''
            chromas.appendChild(og)
            chromas.appendChild(ruby)
            chromas.appendChild(citrine)
            chromas.appendChild(rose)
            chromas.appendChild(tanzanite)
            chromas.appendChild(obsidian)
            chromas.appendChild(turquoise)
            chromas.appendChild(emerald)
            chromas.appendChild(rainbow)
        
            activeChromas = document.querySelectorAll('.chroma')
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            og.classList.add('active-chroma')
        
            og.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                og.classList.add('active-chroma')
            })
        
            ruby.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseRubyTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseRubyWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseRubyBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
        
            citrine.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseCitrineTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseCitrineWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseCitrineBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                citrine.classList.add('active-chroma')
            })
        
            emerald.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseEmeraldTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseEmeraldWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseEmeraldBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })
        
            obsidian.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseObsidianTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseObsidianWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseObsidianBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })
        
            rainbow.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseRainbowTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseRainbowWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseRainbowBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rainbow.classList.add('active-chroma')
            })
        
            rose.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseRoseTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseRoseWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseRoseBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })
        
            tanzanite.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseTanzaniteTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseTanzaniteWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseTanzaniteBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })
        
            turquoise.addEventListener('click', () => {
                aatroxLunarEclipseMaterial.map = aatroxLunarEclipseTurquoiseTexture
                aatroxLunarEclipseWingsMaterial.map = aatroxLunarEclipseTurquoiseWingsTexture
                aatroxLunarEclipseBannerMaterial.map = aatroxLunarEclipseTurquoiseBannerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                turquoise.classList.add('active-chroma')
            })
        
            // checkboxes
            switchers.innerHTML = ''
        })

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.outputEncoding = THREE.sRGBEncoding
        renderer.setClearColor( 0xffffff, 0);


        const clock = new THREE.Clock()
        let previousTime = 0

        const loop = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            // Update controls
            controls.update()

            // // Update mixer
            // if(mixer)
            // {
            //     mixer.update(deltaTime)
            // }


            // Render
            renderer.render(scene, camera)

            // Keep looping
            window.requestAnimationFrame(loop)
        }
    
        loop()
}

export {aatrox}


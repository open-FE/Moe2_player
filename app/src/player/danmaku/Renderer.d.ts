import { DanmakuManager } from "./danmakuManager";
import { DanmakuItem } from "./DanmakuItem";
export declare class Renderer {
    canvas: HTMLCanvasElement;
    danmakuManager: DanmakuManager;
    width: number;
    height: number;
    enableVR: boolean;
    constructor(danmakuManager: DanmakuManager);
    init(canvas: any): void;
    resize(width: number, height: number): void;
    update(pause?: boolean): void;
    drawList(list: Array<DanmakuItem>, start: number, end: number): void;
    clearAll(): void;
    drawItemBuffer(item: DanmakuItem): void;
}
export declare class Canvas2DRender extends Renderer {
    ctx: CanvasRenderingContext2D;
    constructor(manager: DanmakuManager);
    init(canvas: any): void;
    clearAll(): void;
    drawList(list: Array<DanmakuItem>, start: number, end: number): void;
    drawItemBuffer(item: DanmakuItem): void;
}
export declare class WebglRender extends Renderer {
    gl: any;
    texPosStart: number;
    texPosEnd: number;
    texture: WebGLTexture;
    aspect: number;
    program: WebGLProgram;
    posVBO: WebGLBuffer;
    posAL: number;
    posArray: Float32Array;
    texposVBO: WebGLBuffer;
    texposAL: any;
    texposArray: Float32Array;
    mvpMatUL: any;
    textureUL: any;
    tmpcanvas: HTMLCanvasElement;
    tmpCtx: CanvasRenderingContext2D;
    videoEl: any;
    videoRender: any;
    videoProgram: any;
    videoTex: any;
    videoTexUL: any;
    videoReady: any;
    videoPosAL: any;
    videoMvpMatUL: any;
    videoUvAL: any;
    videoWidth: any;
    videoHeight: any;
    videoPosVBO: any;
    videoUvVBO: any;
    logoTexture: any;
    logoTextureUL: any;
    vrProgram: any;
    vrPosAL: any;
    vrIndexUL: any;
    vrTexUL: any;
    vrPosVbo: any;
    vrFBuffers: any[];
    vrTextures: any[];
    mvpMat: Float32Array;
    modelMat: Float32Array;
    viewMat: Float32Array;
    perspectiveMat: Float32Array;
    eyePosition: Float32Array;
    eyePositionStart: Float32Array;
    distance: number;
    rotate: Float32Array;
    center: Float32Array;
    updir: Float32Array;
    fov: number;
    near: number;
    far: number;
    mouseDown: boolean;
    downPosX: number;
    downPosY: number;
    constructor(manager: DanmakuManager);
    init(canvas: HTMLCanvasElement, maxcount?: number, videoRender?: boolean): void;
    __enableVR: boolean;
    enableVR: boolean;
    vrDev: any;
    vrEyeParams: any[];
    initVR(): void;
    btnupdown: boolean;
    btndowndown: boolean;
    btnleftdown: boolean;
    btnrightdown: boolean;
    updatePos(): void;
    resize(width: number, height: number): void;
    updateMvp(): void;
    updateVrMVP(index: any): void;
    bindVR(index: any): void;
    renderVideo(): void;
    renderDanmaku(): void;
    renderVR(): void;
    update(): void;
    textureIsActive: boolean;
    activeTexture(): void;
    drawItemBuffer(item: DanmakuItem): void;
    drawList(list: Array<DanmakuItem>): void;
    drawCount: number;
}
